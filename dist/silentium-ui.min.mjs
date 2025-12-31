import{Applied as e,Message as t,Of as n,All as r,Shared as o,Connected as s,ActualMessage as c,FromEvent as a,Context as u,Primitive as i,DestroyContainer as d,Void as l}from"silentium";import{Template as p,Task as m}from"silentium-components";import{v4 as f}from"uuid";import{Element as h}from"silentium-web-api";import{Render as v}from"silentium-morphdom";import{ClassName as $}from"@/modules/ClassName";import{Id as b}from"@/modules/Id";import{html as g}from"@/modules/plugins/lang/html";import{InputId as w}from"@/components/Input";function y(t){return e(t,e=>"."+e)}function L(e){return t(t=>{let n=".no-class-of-such-name";const r=e=>{const r=e.target;if(!r)return;r.classList.contains(n)&&t(e);r.closest(n)&&t(e)};return e.then(e=>{n=e,r.className=e,document.body.addEventListener("click",r)}),()=>{document.body.removeEventListener("click",r)}})}function E(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);return n}function k(t=n("id")){return e(r(t,n(f())),e=>e.join("_"))}function I(e,t,r,a=n(""),u){const i=o(k()),d=L(y(i));return d.then(e=>{e.preventDefault(),r.use(u??e)}),s(p(n=>E`<button
          ${n.escaped(c(a))}
          class="${n.escaped(i)} ${n.escaped(c(t))} cursor-pointer"
        >
          ${n.escaped(c(e))}
        </button>`),d)}function x(e,t){const n=c(e);return p(e=>E`
      <label>
        <input class="${e.escaped(N(t))} " type="checkbox" />
        ${e.escaped(n)}
      </label>
    `)}function N(e){return t((t,n)=>{const s=o(k());s.then(t);const c=o(h(y(s)));r(c,e).then(([e,t])=>{e&&(e.checked=t)});const u=a(c,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.checked)});return()=>{u.destroy()}})}function _(e){return a(e,n("keyup"),n("addEventListener"),n("removeEventListener"))}function j(e){return p(t=>E`
      <input
        name="title"
        class="${t.escaped(C(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `)}function C(e){return t(t=>{const n=o(k());n.then(t);const s=o(h(y(n)));r(s,e).then(([e,t])=>{e&&(e.value=t)});const c=_(s);m(c,150).then(t=>{e.use(t.target.value)})})}function D(e,t,r=n("")){const s=u("url"),c=o(k()),a=i(e);return L(y(c)).then(e=>{e.preventDefault(),s.use(a.primitive())}),p(n=>E`<a
        href="${n.escaped(e)}"
        class="${n.escaped(c)} ${n.escaped(r)}"
      >
        ${n.raw(t)}
      </a>`)}function q(e,t,r=n("")){return p(n=>E`<a
        href="${n.escaped(e)}"
        target="_blank"
        class="${n.escaped(r)}"
      >
        ${n.escaped(t)}
      </a>`)}function z(r,s="div"){return t((t,c)=>{const a=d(),u=o(k(n("mount-point")));e(u,e=>`<${s} class="${e}"></${s}>`).then(t);const i=h(y(u)).catch(c),p=v(i,r).catch(c).then(l());return a.add(i),a.add(p),()=>{a.destroy()}})}function A(e){return t(t=>{const r=o(k(n("mount-point")));r.then(t);const s=h(y(r));v(s,e).then(l())})}function B(t,n){return p(r=>g`
      <select
        class="${r.escaped(F(t))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${r.raw(e(n,e=>e.map(e=>g`<option value="${e._id}">${e.title}</option>`).join("")))}
      </select>
    `)}function F(e){return t((t,n)=>{const s=o(b());s.then(t);const c=o(h($(s)));r(c,e).then(([e,t])=>{e&&(e.value=t)});const u=a(c,"change","addEventListener","removeEventListener").catch(n).then(t=>{e.use(t.target.value)});return()=>{u.destroy()}})}function G(e){return p(t=>g`
      <textarea
        rows="3"
        class="${t.escaped(w(e))} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      ></textarea>
    `)}export{I as Button,x as Checkbox,N as CheckedId,y as ClassName,L as Clicked,k as Id,j as Input,C as InputId,_ as KeyPressed,D as Link,q as LinkExternal,z as Mount,A as MountPoint,B as Select,F as SelectId,G as Textarea,E as html};
//# sourceMappingURL=silentium-ui.min.mjs.map
