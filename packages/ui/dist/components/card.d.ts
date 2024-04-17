import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { ReactNode } from 'react';
import { Amount, Type } from 'sushi/currency';
declare const cardVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
interface CardOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
}
declare const CardOverlay: React.ForwardRefExoticComponent<CardOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardGroup: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
type CardItemProps = (Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
    title: ReactNode;
    subtitle?: string;
    children?: ReactNode;
    skeleton?: never;
    flex?: boolean;
    className?: string;
}) | {
    title?: never;
    subtitle?: boolean;
    children?: never;
    skeleton?: boolean;
    flex?: boolean;
    className?: string;
};
declare const CardItem: React.ForwardRefExoticComponent<CardItemProps & React.RefAttributes<HTMLDivElement>>;
interface CardCurrencyAmountItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean;
    amount?: Amount<Type>;
    fiatValue?: string;
    unwrap?: boolean;
}
declare const CardCurrencyAmountItem: React.ForwardRefExoticComponent<CardCurrencyAmountItemProps & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Card, CardContent, CardCurrencyAmountItem, CardDescription, CardFooter, CardGroup, CardHeader, CardItem, CardLabel, CardOverlay, CardTitle, };
//# sourceMappingURL=card.d.ts.map