'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from 'next/dynamic';
import { jsNumberForAddress } from 'react-jazzicon';
const Jazzicon = dynamic(() => import('react-jazzicon'), { ssr: false });
export const JazzIcon = ({ diameter, address }) => {
    return _jsx(Jazzicon, { diameter: diameter, seed: jsNumberForAddress(address) });
};
//# sourceMappingURL=JazzIcon.js.map