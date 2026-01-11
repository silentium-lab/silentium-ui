import{Applied as e,Message as t,Of as n,All as r,Shared as o,Connected as c,ActualMessage as s,FromEvent as u,Context as a,Primitive as i,DestroyContainer as d,Any as l,Void as p}from"silentium";import{Template as f,Task as h}from"silentium-components";import{v4 as m}from"uuid";import{Element as v}from"silentium-web-api";import{Render as $}from"silentium-morphdom";function g(t){return e(t,e=>"."+e)}function b(e){return t(t=>{let n=".no-class-of-such-name";const r=e=>{const r=e.target;if(!r)return;r.classList.contains(n)&&t(e);r.closest(n)&&t(e)};return e.then(e=>{n=e,r.className=e,document.body.addEventListener("click",r)}),()=>{document.body.removeEventListener("click",r)}})}function y(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);return n}function w(t=n("id")){return e(r(t,n(m())),e=>e.join("_"))}function L(e,t,r,u=n(""),a){const i=o(w()),d=b(g(i));return d.then(e=>{e.preventDefault(),r.use(a??e)}),c(f(n=>y`<button
          ${n.escaped(s(u))}
          class="${n.escaped(i)} ${n.escaped(s(t))} cursor-pointer"
        >
          ${n.escaped(s(e))}
        </button>`),d)}function E(e,t){const n=s(e);return f(e=>y`
      <label>
        <input class="${e.escaped(k(t))} " type="checkbox" />
        ${e.escaped(n)}
      </label>
    `)}function k(e){return t((t,n)=>{const c=o(w());c.then(t);const s=o(v(g(c)));r(s,e).then(([e,t])=>{e&&(e.checked=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.checked)});return()=>{a.destroy()}})}function x(e){return u(e,n("keyup"),n("addEventListener"),n("removeEventListener"))}function _(e){return f(t=>y`
      <input
        name="title"
        class="${t.escaped(j(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `)}function j(e){return t(t=>{const n=o(w());n.then(t);const c=o(v(g(n)));r(c,e).then(([e,t])=>{e&&(e.value="string"==typeof t?t:String(t))});const s=x(c);h(s,150).then(t=>{e.use(t.target.value)})})}function D(e,t,r=n("")){const c=a("url"),s=o(w()),u=i(e);return b(g(s)).then(e=>{e.preventDefault(),c.use(u.primitive())}),f(n=>y`<a
        href="${n.escaped(e)}"
        class="${n.escaped(s)} ${n.escaped(r)}"
      >
        ${n.raw(t)}
      </a>`)}function S(e,t,r=n("")){return f(n=>y`<a
        href="${n.escaped(e)}"
        target="_blank"
        class="${n.escaped(r)}"
      >
        ${n.escaped(t)}
      </a>`)}function N(r,c="div",s=""){let u=e(r,e=>"string"==typeof e?e:String(e));return t((t,r)=>{const a=d(),i=o(w(n("mount-point")));e(i,e=>`<${c} class="${e}"></${c}>`).then(t);const f=v(g(i)).catch(r);s&&(u=l(u,s));const h=$(f,u).catch(r).then(p());return a.add(f),a.add(h),()=>{a.destroy()}})}function q(e){return t(t=>{const r=o(w(n("mount-point")));r.then(t);const c=v(g(r));$(c,e).then(p())})}function z(t,n){return f(r=>y`
      <select
        class="${r.escaped(A(t))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${r.raw(e(n,e=>e.map(e=>y`<option value="${e._id}">${e.title}</option>`).join("")))}
      </select>
    `)}function A(e){return t((t,n)=>{const c=o(w());c.then(t);const s=o(v(g(c)));r(s,e).then(([e,t])=>{e&&(e.value=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.value)});return()=>{a.destroy()}})}function B(e){return f(t=>y`
      <textarea
        rows="3"
        class="${t.escaped(j(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      ></textarea>
    `)}export{L as Button,E as Checkbox,k as CheckedId,g as ClassName,b as Clicked,w as Id,_ as Input,j as InputId,x as KeyPressed,D as Link,S as LinkExternal,N as Mount,q as MountPoint,z as Select,A as SelectId,B as Textarea,y as html};
//# sourceMappingURL=silentium-ui.min.mjs.map
