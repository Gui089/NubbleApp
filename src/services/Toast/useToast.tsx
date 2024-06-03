import { useContext} from "react";
import { ToastContext } from "./Providers/ToastProvider";
import { useToastContext } from "./useToastContext";
import { useToastServiceZustand, useToastZustand } from "./useToastZustand";

export interface Toast {
    message: string;
    type?: 'success' | 'error';
    duration?: number;
    section?: {
        title: string;
        onPress: () => void;
    }
}

export interface ToastService {
    toast: Toast | null;
    showToast: (toast: Toast) => void;
    hiddenToast: () => void;
}


export const useToast = (): ToastService['toast'] => {
   /*  const {toast} = useToastContext();
    return toast; */

    return useToastZustand();
    
}

export function useToastService(): Pick<ToastService, 'showToast' | 'hiddenToast'> {
    return useToastServiceZustand();
}