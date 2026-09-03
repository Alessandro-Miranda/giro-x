const bundleUrl = new URL("./index-CXu6wxrO.js", import.meta.url);
const source = await fetch(bundleUrl).then((response) => response.text());
const basePath = new URL(document.querySelector("base")?.href || location.href).pathname.replace(/\/$/, "");
const patchedSource = source
  .replace('function Jh(){const[,i]=Ox(),u=()=>{i("/")};', 'function Jh(){const[,i]=Ox(),u=()=>{i(new URL(document.querySelector("base")?.href||location.href).pathname)};')
  .replace('q.jsxs(J1,{"data-loc":"client/src/App.tsx:23",children:[q.jsx(iv,{"data-loc":"client/src/App.tsx:24"}),q.jsx(Yx,{"data-loc":"client/src/App.tsx:25"})]})', `q.jsxs(J1,{"data-loc":"client/src/App.tsx:23",children:[q.jsx(iv,{"data-loc":"client/src/App.tsx:24"}),q.jsx(_x,{base:${JSON.stringify(basePath)},children:q.jsx(Yx,{"data-loc":"client/src/App.tsx:25"})})]})`);
const moduleUrl = URL.createObjectURL(new Blob([patchedSource], { type: "text/javascript" }));
await import(moduleUrl);
URL.revokeObjectURL(moduleUrl);