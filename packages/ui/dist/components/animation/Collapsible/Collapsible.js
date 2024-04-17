import { jsx as _jsx } from "react/jsx-runtime";
import { animated, useSpring } from 'react-spring';
import useResizeObserver from 'use-resize-observer';
export const Collapsible = ({ className, open, children, afterChange, }) => {
    const { ref, height } = useResizeObserver();
    const props = useSpring({
        height: open ? height !== null && height !== void 0 ? height : 0 : 0,
        config: {
            mass: 1.2,
            tension: 300,
            friction: 20,
            clamp: true,
            velocity: 0.01,
        },
        onRest: afterChange,
    });
    return (_jsx(animated.div, { style: Object.assign(Object.assign({}, props), { overflow: 'hidden', width: '100%', willChange: 'height' }), children: _jsx("div", { ref: ref, className: className, children: children }) }));
};
//# sourceMappingURL=Collapsible.js.map