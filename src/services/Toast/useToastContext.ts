import { useContext } from "react";

import { ToastContext } from "./Providers/ToastProvider";
import { ToastService } from "./useToast";


export const useToastContext = (): ToastService => {
    const context = useContext(ToastContext);
    if(!context) {
        throw new Error('Toast must be used with a ToastProvider');
    }

    return context;
}