import{Applied as e,Message as t,Of as n,All as r,Shared as o,Connected as c,ActualMessage as s,FromEvent as u,Context as a,Primitive as i,DestroyContainer as d,Void as l}from"silentium";import{Template as p,Task as h}from"silentium-components";import{v4 as m}from"uuid";import{Element as f}from"silentium-web-api";import{Render as $}from"silentium-morphdom";function v(t){return e(t,e=>"."+e)}function b(e){return t(t=>{let n=".no-class-of-such-name";const r=e=>{const r=e.target;if(!r)return;r.classList.contains(n)&&t(e);r.closest(n)&&t(e)};return e.then(e=>{n=e,r.className=e,document.body.addEventListener("click",r)}),()=>{document.body.removeEventListener("click",r)}})}function g(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);return n}function w(t=n("id")){return e(r(t,n(m())),e=>e.join("_"))}function y(e,t,r,u=n(""),a){const i=o(w()),d=b(v(i));return d.then(e=>{e.preventDefault(),r.use(a??e)}),c(p(n=>g`<button
          ${n.escaped(s(u))}
          class="${n.escaped(i)} ${n.escaped(s(t))} cursor-pointer"
        >
          ${n.escaped(s(e))}
        </button>`),d)}function L(e,t){const n=s(e);return p(e=>g`
      <label>
        <input class="${e.escaped(E(t))} " type="checkbox" />
        ${e.escaped(n)}
      </label>
    `)}function E(e){return t((t,n)=>{const c=o(w());c.then(t);const s=o(f(v(c)));r(s,e).then(([e,t])=>{e&&(e.checked=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.checked)});return()=>{a.destroy()}})}function k(e){return u(e,n("keyup"),n("addEventListener"),n("removeEventListener"))}function x(e){return p(t=>g`
      <input
        name="title"
        class="${t.escaped(_(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `)}function _(e){return t(t=>{const n=o(w());n.then(t);const c=o(f(v(n)));r(c,e).then(([e,t])=>{e&&(e.value=t)});const s=k(c);h(s,150).then(t=>{e.use(t.target.value)})})}function j(e,t,r=n("")){const c=a("url"),s=o(w()),u=i(e);return b(v(s)).then(e=>{e.preventDefault(),c.use(u.primitive())}),p(n=>g`<a
        href="${n.escaped(e)}"
        class="${n.escaped(s)} ${n.escaped(r)}"
      >
        ${n.raw(t)}
      </a>`)}function D(e,t,r=n("")){return p(n=>g`<a
        href="${n.escaped(e)}"
        target="_blank"
        class="${n.escaped(r)}"
      >
        ${n.escaped(t)}
      </a>`)}function N(r,c="div",s=""){return t((t,u)=>{const a=d(),i=o(w(n("mount-point")));e(i,e=>`<${c} class="${e}">${s}</${c}>`).then(t);const p=f(v(i)).catch(u),h=$(p,r).catch(u).then(l());return a.add(p),a.add(h),()=>{a.destroy()}})}function q(e){return t(t=>{const r=o(w(n("mount-point")));r.then(t);const c=f(v(r));$(c,e).then(l())})}function z(t,n){return p(r=>g`
      <select
        class="${r.escaped(A(t))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${r.raw(e(n,e=>e.map(e=>g`<option value="${e._id}">${e.title}</option>`).join("")))}
      </select>
    `)}function A(e){return t((t,n)=>{const c=o(w());c.then(t);const s=o(f(v(c)));r(s,e).then(([e,t])=>{e&&(e.value=t)});const a=u(s,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.value)});return()=>{a.destroy()}})}function B(e){return p(t=>g`
      <textarea
        rows="3"
        class="${t.escaped(_(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      ></textarea>
    `)}export{y as Button,L as Checkbox,E as CheckedId,v as ClassName,b as Clicked,w as Id,x as Input,_ as InputId,k as KeyPressed,j as Link,D as LinkExternal,N as Mount,q as MountPoint,z as Select,A as SelectId,B as Textarea,g as html};
//# sourceMappingURL=silentium-ui.min.mjs.map
