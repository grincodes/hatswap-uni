import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const EXPLORE_NAVIGATION_LINKS: {
    title: string;
    href: string;
    description: string;
}[];
declare const TOOLS_NAVIGATION_LINKS: {
    title: string;
    href: string;
    description: string;
}[];
declare const PARTNER_NAVIGATION_LINKS: {
    title: string;
    href: string;
    description: string;
}[];
declare const navigationContainerVariants: (props?: ({
    variant?: "default" | "transparent" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface NavContainerProps extends VariantProps<typeof navigationContainerVariants> {
    children: React.ReactNode;
}
declare const NavigationContainer: React.FC<NavContainerProps>;
interface NavProps extends VariantProps<typeof navigationContainerVariants> {
    rightElement?: React.ReactNode;
    legacyBehavior?: boolean;
}
declare const Navigation: React.FC<NavProps>;
interface NavigationListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    legacyBehavior?: boolean;
}
declare const NavigationListItem: React.ForwardRefExoticComponent<NavigationListItemProps & React.RefAttributes<HTMLAnchorElement>>;
export { EXPLORE_NAVIGATION_LINKS, Navigation, NavigationContainer, NavigationListItem, PARTNER_NAVIGATION_LINKS, TOOLS_NAVIGATION_LINKS, };
//# sourceMappingURL=navigation.d.ts.map