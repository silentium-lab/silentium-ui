import * as silentium from 'silentium';
import { MaybeMessage, SourceType, MessageSourceType, MessageType } from 'silentium';
import * as silentium_components from 'silentium-components';

declare function Button($label: MaybeMessage<string>, $class: MaybeMessage<string>, click: SourceType, $attributes?: MaybeMessage<string>, value?: unknown): silentium.MessageImpl<string>;

/**
 * Component what represent
 * checkbox
 */
declare function Checkbox(label: MaybeMessage<string>, $value: MessageSourceType<boolean>): silentium_components.TemplateImpl;
declare function CheckedId($value: MessageSourceType<boolean>): silentium.MessageImpl<string>;

/**
 * CSS class name representation
 */
declare function ClassName(s: MessageType<string>): silentium.MessageImpl<string>;

/**
 * DOM element click even
 */
declare function Clicked($class: MessageType<string>): silentium.MessageImpl<Event>;

/**
 * Render html string
 */
declare function html(strings: any, ...values: any[]): string;

/**
 * Representation of a unique id
 */
declare function Id(baseSrc?: MessageType<string>): silentium.MessageImpl<string>;

declare function Input($value: MessageSourceType<string>): silentium_components.TemplateImpl;
declare function InputId($value: MessageSourceType<string>): silentium.MessageImpl<string>;

/**
 * DOM element keypress even
 */
declare function KeyPressed<T extends Event>($el: MessageType<HTMLElement>): silentium.MessageImpl<T>;

declare function Link($linkUrl: MessageType<string>, $text: MessageType<string>, $class?: MessageType<string>): silentium_components.TemplateImpl;

declare function LinkExternal($url: MessageType<string>, $text: MessageType<string>, $class?: MessageType<string>): silentium_components.TemplateImpl;

declare function Mount($base: MessageType<string>, tag?: string, defaultValue?: string): silentium.MessageImpl<string>;

/**
 * Returns a unique class id that needs to be used
 * in the template for mounting $base.
 * This technique allows decoupling
 * the rendering of the main template from the rendering
 * of some nested part.
 */
declare function MountPoint($base: MessageType<string>): silentium.MessageImpl<string>;

declare function Select($value: MessageSourceType<string>, $items: MessageType<unknown[]>): silentium_components.TemplateImpl;
declare function SelectId($value: MessageSourceType<string>): silentium.MessageImpl<string>;

/**
 * Textarea UI element
 */
declare function Textarea($value: MessageSourceType<string>): silentium_components.TemplateImpl;

export { Button, Checkbox, CheckedId, ClassName, Clicked, Id, Input, InputId, KeyPressed, Link, LinkExternal, Mount, MountPoint, Select, SelectId, Textarea, html };
