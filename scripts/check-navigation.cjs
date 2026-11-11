const { createRequire } = require("node:module");
const fs = require("node:fs");
const assert = require("node:assert/strict");
const root = require("node:path").resolve(__dirname, "..");
const repoRequire = createRequire(root + "/package.json");
const { JSDOM } = require("jsdom");
const ts = repoRequire("typescript");
const Module = require("node:module");
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (id, ...rest) {
  return originalResolve.call(
    this,
    id.startsWith("@/") ? root + "/" + id.slice(2) : id,
    ...rest,
  );
};
for (const ext of [".tsx", ".ts"])
  require.extensions[ext] = (module, file) => {
    const out = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    }).outputText;
    module._compile(out, file);
  };
const React = repoRequire("react");
const { act } = React;

const dom = new JSDOM(
  '<!DOCTYPE html><html><body><div id="app"></div></body></html>',
  { url: "https://example.test" },
);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.IS_REACT_ACT_ENVIRONMENT = true;
global.FormData = dom.window.FormData;
global.self = dom.window;
const { createRoot } = repoRequire("react-dom/client");

let pathname = "/";
const originalLoad = Module._load;
Module._load = function (id, ...rest) {
  if (id === "next/navigation") return { usePathname: () => pathname };
  return originalLoad.call(this, id, ...rest);
};
const Header = repoRequire(root + "/components/site/Header.tsx").default;
const rootNode = createRoot(document.getElementById("app"));
(async () => {
  await act(async () => rootNode.render(React.createElement(Header)));
  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.getElementById("mobile-nav");
  assert.equal(toggle.getAttribute("aria-expanded"), "false");
  assert(mobile.hidden);
  await act(async () => toggle.click());
  assert.equal(toggle.getAttribute("aria-expanded"), "true");
  assert(!mobile.hidden);
  await act(async () =>
    document.dispatchEvent(
      new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    ),
  );
  assert(mobile.hidden);
  assert.equal(document.activeElement, toggle);
  const details = document.querySelector(".nav-dropdown");
  details.open = true;
  await act(async () =>
    document.dispatchEvent(
      new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    ),
  );
  assert(!details.open);
  assert.equal(document.activeElement, details.querySelector("summary"));
  details.open = true;
  await act(async () =>
    document.body.dispatchEvent(
      new window.Event("pointerdown", { bubbles: true }),
    ),
  );
  assert(!details.open);
  await act(async () => toggle.click());
  assert(!mobile.hidden);
  pathname = "/our-approach";
  await act(async () => rootNode.render(React.createElement(Header)));
  assert(mobile.hidden);
  assert.equal(
    document
      .querySelector('.site-nav a[aria-current="page"]')
      .getAttribute("href"),
    "/our-approach",
  );
  assert(document.querySelector('.skip-link[href="#main"]'));
  assert.equal(document.querySelectorAll(".nav-dropdown__panel a").length, 10);
  for (const slug of [
    "ai-strategy",
    "ai-automation",
    "ai-assistants",
    "ai-adoption",
  ]) {
    assert(
      document.querySelector(
        `.nav-dropdown__panel a[href="/services/${slug}"]`,
      ),
    );
  }
  await act(async () => rootNode.unmount());
  console.log(
    "PASS: mobile toggle, Escape and focus return, desktop dropdown dismissal, route-change reset, current page and capability links.",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
