/// <reference types="node" />
import { AnchorHTMLAttributes, FC } from 'react';
declare const LinkInternal: import("react").ForwardRefExoticComponent<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof {
    href: string | import("url").UrlObject;
    as?: (string | import("url").UrlObject) | undefined;
    replace?: boolean | undefined;
    scroll?: boolean | undefined;
    shallow?: boolean | undefined;
    passHref?: boolean | undefined;
    prefetch?: boolean | undefined;
    locale?: string | false | undefined;
    legacyBehavior?: boolean | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
}> & {
    href: string | import("url").UrlObject;
    as?: (string | import("url").UrlObject) | undefined;
    replace?: boolean | undefined;
    scroll?: boolean | undefined;
    shallow?: boolean | undefined;
    passHref?: boolean | undefined;
    prefetch?: boolean | undefined;
    locale?: string | false | undefined;
    legacyBehavior?: boolean | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLAnchorElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLAnchorElement>>;
declare const LinkExternal: FC<AnchorHTMLAttributes<HTMLAnchorElement>>;
export { LinkExternal, LinkInternal };
//# sourceMappingURL=link.d.ts.map