import { Actual, MaybeMessage, MessageSourceType } from "silentium";
import { Template } from "silentium-components";
import { html } from "./html";
import { InputId } from "./Input";

/**
 * Textarea UI element
 */
export function Textarea(
  $value: MessageSourceType<string>,
  _class: MaybeMessage<string> = "",
) {
  const class$ = Actual(_class);
  return Template(
    (t) => html`
      <textarea
        rows="3"
        class="${t.escaped(InputId($value))} ${t.escaped(class$)}"
      ></textarea>
    `,
  );
}
