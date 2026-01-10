import{Applied as e,Message as t,Of as n,All as r,Shared as o,Connected as c,ActualMessage as s,FromEvent as u,Context as a,Primitive as i,DestroyContainer as d,Any as l,Void as p}from"silentium";import{Template as h,Task as m}from"silentium-components";import{v4 as f}from"uuid";import{Element as v}from"silentium-web-api";import{Render as $}from"silentium-morphdom";function b(t){return e(t,e=>"."+e)}function g(e){return t(t=>{let n=".no-class-of-such-name";const r=e=>{const r=e.target;if(!r)return;r.classList.contains(n)&&t(e);r.closest(n)&&t(e)};return e.then(e=>{n=e,r.className=e,document.body.addEventListener("click",r)}),()=>{document.body.removeEventListener("click",r)}})}function w(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);return n}function y(t=n("id")){return e(r(t,n(f())),e=>e.join("_"))}function L(e,t,r,u=n(""),a){const i=o(y()),d=g(b(i));return d.then(e=>{e.preventDefault(),r.use(a??e)}),c(h(n=>w`<button
          ${n.escaped(s(u))}
          class="${n.escaped(i)} ${n.escaped(s(t))} cursor-pointer"
        >
          ${n.escaped(s(e))}
        </button>`),d)}function E(e,t){const n=s(e);return h(e=>w`
      <label>
        <input class="${e.escaped(k(t))} " type="checkbox" />
        ${e.escaped(n)}
      </label>
    `)}function k(e){return t((t,n)=>{const c=o(y());c.then(t);const s=o(v(b(c)));r(s,e).then(([e,t])=>{e&&(e.checked=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.checked)});return()=>{a.destroy()}})}function x(e){return u(e,n("keyup"),n("addEventListener"),n("removeEventListener"))}function _(e){return h(t=>w`
      <input
        name="title"
        class="${t.escaped(j(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `)}function j(e){return t(t=>{const n=o(y());n.then(t);const c=o(v(b(n)));r(c,e).then(([e,t])=>{e&&(e.value=t)});const s=x(c);m(s,150).then(t=>{e.use(t.target.value)})})}function D(e,t,r=n("")){const c=a("url"),s=o(y()),u=i(e);return g(b(s)).then(e=>{e.preventDefault(),c.use(u.primitive())}),h(n=>w`<a
        href="${n.escaped(e)}"
        class="${n.escaped(s)} ${n.escaped(r)}"
      >
        ${n.raw(t)}
      </a>`)}function N(e,t,r=n("")){return h(n=>w`<a
        href="${n.escaped(e)}"
        target="_blank"
        class="${n.escaped(r)}"
      >
        ${n.escaped(t)}
      </a>`)}function q(r,c="div",s=""){return t((t,u)=>{const a=d(),i=o(y(n("mount-point")));e(i,e=>`<${c} class="${e}"></${c}>`).then(t);const h=v(b(i)).catch(u);s&&(r=l(r,s));const m=$(h,r).catch(u).then(p());return a.add(h),a.add(m),()=>{a.destroy()}})}function z(e){return t(t=>{const r=o(y(n("mount-point")));r.then(t);const c=v(b(r));$(c,e).then(p())})}function A(t,n){return h(r=>w`
      <select
        class="${r.escaped(B(t))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${r.raw(e(n,e=>e.map(e=>w`<option value="${e._id}">${e.title}</option>`).join("")))}
      </select>
    `)}function B(e){return t((t,n)=>{const c=o(y());c.then(t);const s=o(v(b(c)));r(s,e).then(([e,t])=>{e&&(e.value=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.value)});return()=>{a.destroy()}})}function C(e){return h(t=>w`
      <textarea
        rows="3"
        class="${t.escaped(j(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      ></textarea>
    `)}export{L as Button,E as Checkbox,k as CheckedId,b as ClassName,g as Clicked,y as Id,_ as Input,j as InputId,x as KeyPressed,D as Link,N as LinkExternal,q as Mount,z as MountPoint,A as Select,B as SelectId,C as Textarea,w as html};
//# sourceMappingURL=silentium-ui.min.mjs.map
