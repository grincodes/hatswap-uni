import { jsx as _jsx } from "react/jsx-runtime";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer as ToastifyContainer } from 'react-toastify';
export const ToastContainer = ({ className }) => {
    return (_jsx(ToastifyContainer, { newestOnTop: true, bodyClassName: () => '', toastClassName: () => 'border border-accent mx-4 flex flex-col shadow-md bg-background mt-12 md:mt-2 rounded-xl overflow-hidden text-[color:var(--color)]', className: className }));
};
//# sourceMappingURL=ToastContainer.js.map