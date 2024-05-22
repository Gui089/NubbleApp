import React from "react";

import { 
    Box,
    ScrollViewContainer, 
    ViewContainer,
    BoxProps
} from "@Components";

import { useAppSafeArea, useAppTheme } from "@hooks";

import { KeyboardAvoidingView, Platform} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScreenHeader } from "./Components/ScreenHeader";

export interface ScreenProps extends BoxProps{
    children: React.ReactNode;
    changeGoBack?: boolean;
    scrollable?: boolean;
    title?: string;
}

export function ScreenComponent({
    children, 
    changeGoBack = false, 
    scrollable = false,
    style,
    title,
    ...BoxProps}: ScreenProps) {


    const {top, bottom} = useAppSafeArea();
    const {colors} = useAppTheme();
    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box 
                    paddingBottom="s24"
                    paddingHorizontal="s24" 
                    style={[{padding: top, paddingBottom: bottom}, style]}>
                    <ScreenHeader changeGoBack={changeGoBack} title={title}/>
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
        
    )
}