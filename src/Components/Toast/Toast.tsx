
import { useToast, useToastService } from "@services";
import { useEffect } from "react";
import {Toast as ToastType} from '@services';
import { ToastContent } from "./Components/ToastContent";

const DEFAULT_DURATION = 2000;
export const Toast = () => {

    const toast = useToast();
    const {hiddenToast} = useToastService();

    useEffect(() => {
        if(toast) {
            setTimeout(() => {
                hiddenToast();
            },toast.duration || DEFAULT_DURATION)
        }
    },[toast, hiddenToast])

    if(!toast) {
        return null;
    }

    return (
        <ToastContent toast={toast}/>
    )
}
