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
const Motion = repoRequire(root + "/components/site/Motion.tsx").default;
const target = document.createElement("div");
target.className = "section-head";
target.getBoundingClientRect = () => ({ top: 1000 });
document.body.appendChild(target);
let callback;
let observed = [];
let disconnected = 0;
let listener;
const preference = {
  matches: false,
  addEventListener: (type, fn) => {
    listener = fn;
  },
  removeEventListener: () => {
    listener = undefined;
  },
};
window.matchMedia = () => preference;
window.IntersectionObserver = class {
  constructor(cb) {
    callback = cb;
  }
  observe(el) {
    observed.push(el);
  }
  unobserve(el) {
    observed = observed.filter((x) => x !== el);
  }
  disconnect() {
    disconnected++;
    observed = [];
  }
};
global.IntersectionObserver = window.IntersectionObserver;
const rootNode = createRoot(document.getElementById("app"));
(async () => {
  await act(async () => rootNode.render(React.createElement(Motion)));
  assert(observed.includes(target));
  callback([{ isIntersecting: true, target }]);
  assert(target.classList.contains("motion-visible"));
  assert(!observed.includes(target));
  preference.matches = true;
  listener();
  assert(!target.classList.contains("motion-visible"));
  assert(disconnected > 0);
  await act(async () => rootNode.unmount());
  assert.equal(listener, undefined);
  const nextRoot = createRoot(document.getElementById("app"));
  observed = [];
  await act(async () => nextRoot.render(React.createElement(Motion)));
  assert.equal(observed.length, 0);
  assert(!target.classList.contains("motion-visible"));
  await act(async () => nextRoot.unmount());
  console.log(
    "PASS: one-time reveals, reduced-motion preference and preference changes, observer/timer cleanup.",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
