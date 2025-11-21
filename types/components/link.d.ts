import { UIElement } from "ziko/ui";

declare class UILink extends UIElement {}

export declare const Link: (
    href?: string,
    target?: string,
    color?: string,
    underline?: boolean,
    inline?: boolean,
    icon?: UIElement,
    text?: string | UIElement | HTMLElement
) => UILink;

