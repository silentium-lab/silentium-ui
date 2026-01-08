import { Applied, Message, Of, All, Shared, Connected, ActualMessage, FromEvent, Context, Primitive, DestroyContainer, Any, Void } from 'silentium';
import { Template, Task } from 'silentium-components';
import { v4 } from 'uuid';
import { Element } from 'silentium-web-api';
import { Render } from 'silentium-morphdom';

function ClassName(s) {
  return Applied(s, (s2) => "." + s2);
}

function Clicked($class) {
  return Message((resolve) => {
    let className = ".no-class-of-such-name";
    const handler = (event) => {
      const target = event.target;
      if (!target) {
        return;
      }
      if (target.classList.contains(className)) {
        resolve(event);
      }
      const closestElement = target.closest(className);
      if (closestElement) {
        resolve(event);
      }
    };
    $class.then((newClassName) => {
      className = newClassName;
      handler.className = newClassName;
      document.body.addEventListener("click", handler);
    });
    return () => {
      document.body.removeEventListener("click", handler);
    };
  });
}

function html(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

function Id(baseSrc = Of("id")) {
  return Applied(All(baseSrc, Of(v4())), (v) => v.join("_"));
}

function Button($label, $class, click, $attributes = Of(""), value) {
  const $id = Shared(Id());
  const clicked = Clicked(ClassName($id));
  clicked.then((e) => {
    e.preventDefault();
    click.use(value ?? e);
  });
  return Connected(
    Template(
      (t) => html`<button
          ${t.escaped(ActualMessage($attributes))}
          class="${t.escaped($id)} ${t.escaped(
        ActualMessage($class)
      )} cursor-pointer"
        >
          ${t.escaped(ActualMessage($label))}
        </button>`
    ),
    clicked
  );
}

function Checkbox(label, $value) {
  const $label = ActualMessage(label);
  return Template(
    (t) => html`
      <label>
        <input class="${t.escaped(CheckedId($value))} " type="checkbox" />
        ${t.escaped($label)}
      </label>
    `
  );
}
function CheckedId($value) {
  return Message((resolve, reject) => {
    const $id = Shared(Id());
    $id.then(resolve);
    const $el = Shared(Element(ClassName($id)));
    All($el, $value).then(([el, value]) => {
      if (el) {
        el.checked = value;
      }
    });
    const event = FromEvent(
      $el,
      "change",
      "addEventListener",
      "removeEventListener"
    ).catch(reject).then((e) => {
      $value.use(e.target.checked);
    });
    return () => {
      event.destroy();
    };
  });
}

function KeyPressed($el) {
  return FromEvent(
    $el,
    Of("keyup"),
    Of("addEventListener"),
    Of("removeEventListener")
  );
}

function Input($value) {
  return Template(
    (t) => html`
      <input
        name="title"
        class="${t.escaped(
      InputId($value)
    )} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      />
    `
  );
}
function InputId($value) {
  return Message((transport) => {
    const $id = Shared(Id());
    $id.then(transport);
    const $el = Shared(Element(ClassName($id)));
    All($el, $value).then(([el, value]) => {
      if (el) {
        el.value = value;
      }
    });
    const pressed = KeyPressed($el);
    Task(pressed, 150).then((e) => {
      $value.use(e.target.value);
    });
  });
}

function Link($linkUrl, $text, $class = Of("")) {
  const $url = Context("url");
  const $id = Shared(Id());
  const url = Primitive($linkUrl);
  const clicked = Clicked(ClassName($id));
  clicked.then((e) => {
    e.preventDefault();
    $url.use(url.primitive());
  });
  return Template(
    (t) => html`<a
        href="${t.escaped($linkUrl)}"
        class="${t.escaped($id)} ${t.escaped($class)}"
      >
        ${t.raw($text)}
      </a>`
  );
}

function LinkExternal($url, $text, $class = Of("")) {
  return Template(
    (t) => html`<a
        href="${t.escaped($url)}"
        target="_blank"
        class="${t.escaped($class)}"
      >
        ${t.escaped($text)}
      </a>`
  );
}

function Mount($base, tag = "div", defaultValue = "") {
  return Message((resolve, reject) => {
    const dc = DestroyContainer();
    const $id = Shared(Id(Of("mount-point")));
    Applied($id, (id) => `<${tag} class="${id}"></${tag}>`).then(resolve);
    const $el = Element(ClassName($id)).catch(reject);
    const $r = Render($el, Any($base, defaultValue)).catch(reject).then(Void());
    dc.add($el);
    dc.add($r);
    return () => {
      dc.destroy();
    };
  });
}

function MountPoint($base) {
  return Message((transport) => {
    const $id = Shared(Id(Of("mount-point")));
    $id.then(transport);
    const $el = Element(ClassName($id));
    Render($el, $base).then(Void());
  });
}

function Select($value, $items) {
  return Template(
    (t) => html`
      <select
        class="${t.escaped(
      SelectId($value)
    )} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${t.raw(
      Applied(
        $items,
        (s) => s.map(
          (i) => html`<option value="${i._id}">${i.title}</option>`
        ).join("")
      )
    )}
      </select>
    `
  );
}
function SelectId($value) {
  return Message((resolve, reject) => {
    const $id = Shared(Id());
    $id.then(resolve);
    const $el = Shared(Element(ClassName($id)));
    All($el, $value).then(([el, value]) => {
      if (el) {
        el.value = value;
      }
    });
    const event = FromEvent(
      $el,
      "change",
      "addEventListener",
      "removeEventListener"
    ).catch(reject).then((e) => {
      $value.use(e.target.value);
    });
    return () => {
      event.destroy();
    };
  });
}

function Textarea($value) {
  return Template(
    (t) => html`
      <textarea
        rows="3"
        class="${t.escaped(
      InputId($value)
    )} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      ></textarea>
    `
  );
}

export { Button, Checkbox, CheckedId, ClassName, Clicked, Id, Input, InputId, KeyPressed, Link, LinkExternal, Mount, MountPoint, Select, SelectId, Textarea, html };
//# sourceMappingURL=silentium-ui.js.map
