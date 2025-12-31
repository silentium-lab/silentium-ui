import { MessageType, Of } from "silentium";
import { Template } from "silentium-components";
import { html } from "./html";

export function LinkExternal(
  $url: MessageType<string>,
  $text: MessageType<string>,
  $class: MessageType<string> = Of(""),
) {
  return Template(
    (t) =>
      html`<a
        href="${t.escaped($url)}"
        target="_blank"
        class="${t.escaped($class)}"
      >
        ${t.escaped($text)}
      </a>`,
  );
}
