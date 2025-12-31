'use strict';

var silentium = require('silentium');
var silentiumComponents = require('silentium-components');
var uuid = require('uuid');
var silentiumWebApi = require('silentium-web-api');
var silentiumMorphdom = require('silentium-morphdom');

function ClassName(s) {
  return silentium.Applied(s, (s2) => "." + s2);
}

function Clicked($class) {
  return silentium.Message((resolve) => {
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

function Id(baseSrc = silentium.Of("id")) {
  return silentium.Applied(silentium.All(baseSrc, silentium.Of(uuid.v4())), (v) => v.join("_"));
}

function Button($label, $class, click, $attributes = silentium.Of(""), value) {
  const $id = silentium.Shared(Id());
  const clicked = Clicked(ClassName($id));
  clicked.then((e) => {
    e.preventDefault();
    click.use(value ?? e);
  });
  return silentium.Connected(
    silentiumComponents.Template(
      (t) => html`<button
          ${t.escaped(silentium.ActualMessage($attributes))}
          class="${t.escaped($id)} ${t.escaped(
        silentium.ActualMessage($class)
      )} cursor-pointer"
        >
          ${t.escaped(silentium.ActualMessage($label))}
        </button>`
    ),
    clicked
  );
}

function Checkbox(label, $value) {
  const $label = silentium.ActualMessage(label);
  return silentiumComponents.Template(
    (t) => html`
      <label>
        <input class="${t.escaped(CheckedId($value))} " type="checkbox" />
        ${t.escaped($label)}
      </label>
    `
  );
}
function CheckedId($value) {
  return silentium.Message((resolve, reject) => {
    const $id = silentium.Shared(Id());
    $id.then(resolve);
    const $el = silentium.Shared(silentiumWebApi.Element(ClassName($id)));
    silentium.All($el, $value).then(([el, value]) => {
      if (el) {
        el.checked = value;
      }
    });
    const event = silentium.FromEvent(
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
  return silentium.FromEvent(
    $el,
    silentium.Of("keyup"),
    silentium.Of("addEventListener"),
    silentium.Of("removeEventListener")
  );
}

function Input($value) {
  return silentiumComponents.Template(
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
  return silentium.Message((transport) => {
    const $id = silentium.Shared(Id());
    $id.then(transport);
    const $el = silentium.Shared(silentiumWebApi.Element(ClassName($id)));
    silentium.All($el, $value).then(([el, value]) => {
      if (el) {
        el.value = value;
      }
    });
    const pressed = KeyPressed($el);
    silentiumComponents.Task(pressed, 150).then((e) => {
      $value.use(e.target.value);
    });
  });
}

function Link($linkUrl, $text, $class = silentium.Of("")) {
  const $url = silentium.Context("url");
  const $id = silentium.Shared(Id());
  const url = silentium.Primitive($linkUrl);
  const clicked = Clicked(ClassName($id));
  clicked.then((e) => {
    e.preventDefault();
    $url.use(url.primitive());
  });
  return silentiumComponents.Template(
    (t) => html`<a
        href="${t.escaped($linkUrl)}"
        class="${t.escaped($id)} ${t.escaped($class)}"
      >
        ${t.raw($text)}
      </a>`
  );
}

function LinkExternal($url, $text, $class = silentium.Of("")) {
  return silentiumComponents.Template(
    (t) => html`<a
        href="${t.escaped($url)}"
        target="_blank"
        class="${t.escaped($class)}"
      >
        ${t.escaped($text)}
      </a>`
  );
}

function Mount($base, tag = "div") {
  return silentium.Message((resolve, reject) => {
    const dc = silentium.DestroyContainer();
    const $id = silentium.Shared(Id(silentium.Of("mount-point")));
    silentium.Applied($id, (id) => `<${tag} class="${id}"></${tag}>`).then(resolve);
    const $el = silentiumWebApi.Element(ClassName($id)).catch(reject);
    const $r = silentiumMorphdom.Render($el, $base).catch(reject).then(silentium.Void());
    dc.add($el);
    dc.add($r);
    return () => {
      dc.destroy();
    };
  });
}

function MountPoint($base) {
  return silentium.Message((transport) => {
    const $id = silentium.Shared(Id(silentium.Of("mount-point")));
    $id.then(transport);
    const $el = silentiumWebApi.Element(ClassName($id));
    silentiumMorphdom.Render($el, $base).then(silentium.Void());
  });
}

function Select($value, $items) {
  return silentiumComponents.Template(
    (t) => html`
      <select
        class="${t.escaped(
      SelectId($value)
    )} border-1 border-gray-300 bg-white p-2 rounded-sm w-full"
      >
        <option value=""></option>
        ${t.raw(
      silentium.Applied(
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
  return silentium.Message((resolve, reject) => {
    const $id = silentium.Shared(Id());
    $id.then(resolve);
    const $el = silentium.Shared(silentiumWebApi.Element(ClassName($id)));
    silentium.All($el, $value).then(([el, value]) => {
      if (el) {
        el.value = value;
      }
    });
    const event = silentium.FromEvent(
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
  return silentiumComponents.Template(
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

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.CheckedId = CheckedId;
exports.ClassName = ClassName;
exports.Clicked = Clicked;
exports.Id = Id;
exports.Input = Input;
exports.InputId = InputId;
exports.KeyPressed = KeyPressed;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.Mount = Mount;
exports.MountPoint = MountPoint;
exports.Select = Select;
exports.SelectId = SelectId;
exports.Textarea = Textarea;
exports.html = html;
//# sourceMappingURL=silentium-ui.cjs.map
