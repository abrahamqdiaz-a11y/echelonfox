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

const Form = repoRequire(root + "/components/ContactForm.tsx").default;
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
let calls = [];
let mode = "ok";
global.fetch = async (url, init) => {
  calls.push({ url, init });
  if (mode === "throw") throw Error("offline");
  return { ok: mode === "ok" };
};
const rootNode = createRoot(document.getElementById("app"));
async function render(key) {
  await act(async () =>
    rootNode.render(React.createElement(Form, { visibleLabels: true, key })),
  );
}
function fill() {
  for (const [name, value] of Object.entries({
    name: "Test Person",
    email: "test@example.test",
    company: "Test Business",
    website: "example.test",
    message: "Our enquiries need clearer follow-up.",
  })) {
    const el = document.querySelector(`[name="${name}"]`);
    const proto =
      el.tagName === "TEXTAREA"
        ? window.HTMLTextAreaElement.prototype
        : window.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, "value").set.call(el, value);
    el.dispatchEvent(new window.Event("input", { bubbles: true }));
  }
  document.querySelector('[name="consent"]').click();
}
async function send() {
  await act(async () =>
    document
      .querySelector("form")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
}
(async () => {
  await render("success");
  const form = document.querySelector("form");
  assert.equal(form.getAttribute("action"), "/netlify-forms.html");
  assert.equal(form.getAttribute("netlify-honeypot"), "bot-field");
  for (const name of ["name", "email", "message"])
    assert(document.querySelector(`[name="${name}"]`).required);
  assert(!document.querySelector('[name="website"]').required);
  for (const field of document.querySelectorAll(".field input,.field textarea"))
    assert(document.querySelector(`label[for="${field.id}"]`));
  await act(async () => fill());
  await send();
  assert(document.querySelector('[role="status"]'));
  assert(document.body.textContent.includes("your message is in"));
  assert.equal(calls[0].url, "/netlify-forms.html");
  assert.equal(calls[0].init.method, "POST");
  const data = new URLSearchParams(calls[0].init.body);
  assert.equal(data.get("website"), "example.test");
  assert.equal(data.get("form-name"), "contact");
  assert.equal(data.get("message"), "Our enquiries need clearer follow-up.");
  assert.equal(data.get("consent"), "on");
  mode = "error";
  await render("error");
  await act(async () => fill());
  await send();
  assert(document.body.textContent.includes("Please try again"));
  assert(document.querySelector("form"));
  assert.equal(
    document.querySelector('[name="email"]').value,
    "test@example.test",
  );
  mode = "throw";
  await render("offline");
  await act(async () => fill());
  await send();
  assert(document.body.textContent.includes("Please try again"));
  assert(document.querySelector('a[href="mailto:abe.quinn@echelonfox.com"]'));
  await act(async () => rootNode.unmount());
  console.log(
    "PASS: contact payload, field labels, consent and honeypot, success, HTTP error and network error; no external submissions sent.",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
