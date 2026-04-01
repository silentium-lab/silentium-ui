import{Applied as e,Message as t,All as n,Of as r,Shared as o,Connected as c,Actual as s,FromEvent as u,Context as a,Primitive as i,DestroyContainer as d,Any as l,Void as p}from"silentium";import{Template as f,Task as h}from"silentium-components";import{v4 as m}from"uuid";import{Element as $}from"silentium-web-api";import{Render as v}from"silentium-morphdom";function g(t){return e(t,e=>"."+e)}function b(e,n){return t(t=>{let r=".no-class-of-such-name";const o=e=>{const n=e.target;if(!n)return;n.classList.contains(r)&&t(e);n.closest(r)&&t(e)};return e.then(e=>{r=e,o.className=e,document.body.addEventListener("click",o,n)}),()=>{document.body.removeEventListener("click",o)}})}function y(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);return n}function w(t=r("id")){return e(n(t,r(m())),e=>e.join("_"))}function L(e,t,n,u=r(""),a){const i=o(w()),d=b(g(i));return d.then(e=>{e.preventDefault(),n.use(a??e)}),c(f(n=>y`<button
          ${n.escaped(s(u))}
          class="${n.escaped(i)} ${n.escaped(s(t))} cursor-pointer"
        >
          ${n.raw(s(e))}
        </button>`),d)}function E(e,t){const n=s(e);return f(e=>y`
      <label>
        <input class="${e.escaped(k(t))} " type="checkbox" />
        ${e.escaped(n)}
      </label>
    `)}function k(e){return t((t,r)=>{const c=o(w());c.then(t);const s=o($(g(c)));n(s,e).then(([e,t])=>{e&&(e.checked=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(r).then(t=>{e.use(t.target.checked)});return()=>{a.destroy()}})}function x(e){return u(e,r("keyup"),r("addEventListener"),r("removeEventListener"))}function _(e){return f(t=>y`
      <input
        name="title"
        class="${t.escaped(j(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `)}function j(e){return t(t=>{const r=o(w());r.then(t);const c=o($(g(r)));n(c,e).then(([e,t])=>{e&&(e.value="string"==typeof t?t:String(t))});const s=x(c);h(s,150).then(t=>{e.use(t.target.value)})})}function D(e,t,n=r("")){const c=a("url"),s=o(w()),u=i(e);return b(g(s)).then(e=>{e.preventDefault(),c.use(u.primitive())}),f(r=>y`<a
        href="${r.escaped(e)}"
        class="${r.escaped(s)} ${r.escaped(n)}"
      >
        ${r.raw(t)}
      </a>`)}function S(e,t,n=r("")){return f(r=>y`<a
        href="${r.escaped(e)}"
        target="_blank"
        class="${r.escaped(n)}"
      >
        ${r.escaped(t)}
      </a>`)}function N(n,c="div",s=""){let u=e(n,e=>"string"==typeof e?e:String(e));return t((t,n)=>{const a=d(),i=o(w(r("mount-point")));e(i,e=>`<${c} class="${e}"></${c}>`).then(t);const f=$(g(i)).catch(n);s&&(u=l(u,s));const h=v(f,u).catch(n).then(p());return a.add(f),a.add(h),()=>{a.destroy()}})}function q(e){return t(t=>{const n=o(w(r("mount-point")));n.then(t);const c=$(g(n));v(c,e).then(p())})}function z(t,n){return f(r=>y`
      <select
        class="${r.escaped(A(t))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${r.raw(e(n,e=>e.map(e=>y`<option value="${e._id}">${e.title}</option>`).join("")))}
      </select>
    `)}function A(e){return t((t,r)=>{const c=o(w());c.then(t);const s=o($(g(c)));n(s,e).then(([e,t])=>{e&&(e.value=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(r).then(t=>{e.use(t.target.value)});return()=>{a.destroy()}})}function B(e,t=""){const n=s(t);return f(t=>y`
      <textarea
        rows="3"
        class="${t.escaped(j(e))} ${t.escaped(n)}"
      ></textarea>
    `)}export{L as Button,E as Checkbox,k as CheckedId,g as ClassName,b as Clicked,w as Id,_ as Input,j as InputId,x as KeyPressed,D as Link,S as LinkExternal,N as Mount,q as MountPoint,z as Select,A as SelectId,B as Textarea,y as html};
//# sourceMappingURL=silentium-ui.min.mjs.map
