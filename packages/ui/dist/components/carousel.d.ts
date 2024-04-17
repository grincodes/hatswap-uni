import { ReactNode } from 'react';
interface CarouselProps<T> {
    defaultSlide?: number;
    slideWidth?: number;
    slides: T[];
    render(slide: T, i: number): ReactNode;
    containerWidth?: number;
    className?: string;
}
export declare const Carousel: <T>({ defaultSlide, containerWidth, slideWidth, slides, render, className, }: CarouselProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=carousel.d.ts.map