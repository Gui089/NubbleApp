
import { ToastPosition, useToast, useToastService } from "@services";
import { useCallback, useEffect, useRef } from "react";
import { ToastContent } from "./Components/ToastContent";
import { Animated } from "react-native";

const DEFAULT_DURATION = 4000;
export const Toast = () => {

    const toast = useToast();
    const {hiddenToast} = useToastService();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const runEntryAnimation = useCallback(() => {
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:1000,
            useNativeDriver: true
        }).start();
    },[fadeAnim]);

    const runExitingAnimation = useCallback((callback: Animated.EndCallback) => {
        Animated.timing(fadeAnim, {
            toValue:0,
            duration:1000,
            useNativeDriver: true
        }).start(callback);
    }, [fadeAnim]);

    useEffect(() => {
        if(toast) {
            runEntryAnimation();

            setTimeout(() => {
                runExitingAnimation(hiddenToast);
            },toast.duration || DEFAULT_DURATION)
        }
    },[toast, hiddenToast, runEntryAnimation, runEntryAnimation]);

    if(!toast) {
        return null;
    }

    const position: ToastPosition = toast?.position || 'top';

    return (
      <Animated.View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          opacity: fadeAnim,
          [position]: 100,
        }}>
        <ToastContent toast={toast} />
      </Animated.View>
    );
}
