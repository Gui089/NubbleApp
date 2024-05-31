import { Toast, ToastService } from "@services";
import { createContext, useState } from "react";

export const ToastContext = createContext<ToastService>({
    toast: null,
    showToast: () => {},
    hiddenToast: () => {}
});

export const ToastProvider = ({children}: React.PropsWithChildren) => {

    const [toast, setToast] = useState<ToastService['toast']>(null);

    const showToast = (_toast: Toast) => {
        setToast(_toast);
    }

    const hiddenToast = () => {
        setToast(null);
    }

    return (
        <ToastContext.Provider value={{toast, showToast, hiddenToast}}>
            {children}
        </ToastContext.Provider>
    )
}