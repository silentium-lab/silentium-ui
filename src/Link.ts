import { MessageType, Of, Primitive, Shared, Context } from "silentium";
import { Template } from "silentium-components";
import { ClassName } from "./ClassName";
import { Clicked } from "./Clicked";
import { html } from "./html";
import { Id } from "./Id";

export function Link(
  $linkUrl: MessageType<string>,
  $text: MessageType<string>,
  $class: MessageType<string> = Of(""),
) {
  const $url = Context<string>("url");
  const $id = Shared(Id());
  const url = Primitive($linkUrl);

  const clicked = Clicked(ClassName($id));
  clicked.then((e: Event) => {
    e.preventDefault();
    $url.use(url.primitive() as string);
  });

  return Template(
    (t) =>
      html`<a
        href="${t.escaped($linkUrl)}"
        class="${t.escaped($id)} ${t.escaped($class)}"
      >
        ${t.raw($text)}
      </a>`,
  );
}
