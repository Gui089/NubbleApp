import { ToastService } from "./useToast";
import {create} from 'zustand';

const useToastStore = create<ToastService>(set => ({
    toast: null,
    showToast:(toast) => set({toast}),
    hiddenToast:() => set({toast: null})
}));

export function useToastZustand():ToastService['toast'] {
    return useToastStore(state => state.toast);
}

export function useToastServiceZustand():Pick<ToastService, 'showToast' | 'hiddenToast'> {
    const showToast = useToastStore(state => state.showToast);
    const hiddenToast = useToastStore(state => state.hiddenToast);

    return {
        showToast,
        hiddenToast
    }
}