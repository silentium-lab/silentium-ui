import { Message, MessageType, Of, Shared, Void } from "silentium";
import { Render } from "silentium-morphdom";
import { Element } from "silentium-web-api";
import { ClassName } from "./ClassName";
import { Id } from "./Id";

/**
 * Returns a unique class id that needs to be used
 * in the template for mounting $base.
 * This technique allows decoupling
 * the rendering of the main template from the rendering
 * of some nested part.
 */
export function MountPoint($base: MessageType<string>) {
  return Message<string>((transport) => {
    const $id = Shared(Id(Of("mount-point")));
    $id.then(transport);
    const $el = Element(ClassName($id));
    Render($el, $base).then(Void());
  });
}
