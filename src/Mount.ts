import {
  Any,
  Applied,
  DestroyContainer,
  Message,
  MessageType,
  Of,
  Shared,
  Void,
} from "silentium";
import { Render } from "silentium-morphdom";
import { Element } from "silentium-web-api";
import { ClassName } from "./ClassName";
import { Id } from "./Id";

export function Mount(
  $base: MessageType<unknown>,
  tag: string = "div",
  defaultValue = "",
) {
  let $baseString = Applied($base, (v) =>
    typeof v === "string" ? v : String(v),
  );
  return Message<string>((resolve, reject) => {
    const dc = DestroyContainer();
    const $id = Shared(Id(Of("mount-point")));
    Applied($id, (id) => `<${tag} class="${id}"></${tag}>`).then(resolve);
    const $el = Element(ClassName($id)).catch(reject);
    if (defaultValue) {
      $baseString = Any($baseString, defaultValue);
    }
    const $r = Render($el, $baseString).catch(reject).then(Void());
    dc.add($el);
    dc.add($r);
    return () => {
      dc.destroy();
    };
  });
}
