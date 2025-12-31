import{Applied as e,Message as t,Of as n,All as r,Shared as o,Connected as s,ActualMessage as c,FromEvent as a,Context as u,Primitive as i}from"silentium";import{Template as l,Task as d}from"silentium-components";import{v4 as p}from"uuid";import{Element as m}from"silentium-web-api";import{ClassName as f}from"@/modules/ClassName";import{Id as h}from"@/modules/Id";import{html as v}from"@/modules/plugins/lang/html";import{InputId as $}from"@/components/Input";function b(t){return e(t,e=>"."+e)}function g(e){return t(t=>{let n=".no-class-of-such-name";const r=e=>{const r=e.target;if(!r)return;r.classList.contains(n)&&t(e);r.closest(n)&&t(e)};return e.then(e=>{n=e,r.className=e,document.body.addEventListener("click",r)}),()=>{document.body.removeEventListener("click",r)}})}function w(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);return n}function y(t=n("id")){return e(r(t,n(p())),e=>e.join("_"))}function L(e,t,r,a=n(""),u){const i=o(y()),d=g(b(i));return d.then(e=>{e.preventDefault(),r.use(u??e)}),s(l(n=>w`<button
          ${n.escaped(c(a))}
          class="${n.escaped(i)} ${n.escaped(c(t))} cursor-pointer"
        >
          ${n.escaped(c(e))}
        </button>`),d)}function E(e,t){const n=c(e);return l(e=>w`
      <label>
        <input class="${e.escaped(k(t))} " type="checkbox" />
        ${e.escaped(n)}
      </label>
    `)}function k(e){return t((t,n)=>{const s=o(y());s.then(t);const c=o(m(b(s)));r(c,e).then(([e,t])=>{e&&(e.checked=t)});const u=a(c,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.checked)});return()=>{u.destroy()}})}function I(e){return a(e,n("keyup"),n("addEventListener"),n("removeEventListener"))}function x(e){return l(t=>w`
      <input
        name="title"
        class="${t.escaped(N(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `)}function N(e){return t(t=>{const n=o(y());n.then(t);const s=o(m(b(n)));r(s,e).then(([e,t])=>{e&&(e.value=t)});const c=I(s);d(c,150).then(t=>{e.use(t.target.value)})})}function _(e,t,r=n("")){const s=u("url"),c=o(y()),a=i(e);return g(b(c)).then(e=>{e.preventDefault(),s.use(a.primitive())}),l(n=>w`<a
        href="${n.escaped(e)}"
        class="${n.escaped(c)} ${n.escaped(r)}"
      >
        ${n.raw(t)}
      </a>`)}function j(e,t,r=n("")){return l(n=>w`<a
        href="${n.escaped(e)}"
        target="_blank"
        class="${n.escaped(r)}"
      >
        ${n.escaped(t)}
      </a>`)}function C(t,n){return l(r=>v`
      <select
        class="${r.escaped(D(t))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${r.raw(e(n,e=>e.map(e=>v`<option value="${e._id}">${e.title}</option>`).join("")))}
      </select>
    `)}function D(e){return t((t,n)=>{const s=o(h());s.then(t);const c=o(m(f(s)));r(c,e).then(([e,t])=>{e&&(e.value=t)});const u=a(c,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.value)});return()=>{u.destroy()}})}function q(e){return l(t=>v`
      <textarea
        rows="3"
        class="${t.escaped($(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      ></textarea>
    `)}export{L as Button,E as Checkbox,k as CheckedId,b as ClassName,g as Clicked,y as Id,x as Input,N as InputId,I as KeyPressed,_ as Link,j as LinkExternal,C as Select,D as SelectId,q as Textarea,w as html};
//# sourceMappingURL=silentium-ui.min.mjs.map
