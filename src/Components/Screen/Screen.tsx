import React from "react";

import { 
    Box, 
    TouchableOpacityBox, 
    Icon,
    Text,
    ScrollViewContainer, 
    ViewContainer,
    BoxProps
} from "@Components";

import { useAppSafeArea, useAppTheme } from "@hooks";

import { KeyboardAvoidingView, Platform} from "react-native";

import { useNavigation } from "@react-navigation/native";

interface Props extends BoxProps{
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
    ...BoxProps}: Props) {


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
                    {changeGoBack && 
                    <TouchableOpacityBox 
                        onPress={navigation.goBack} 
                        flexDirection="row" 
                        justifyContent="space-between"
                        alignItems="center"
                        mb="s40"
                        >
                        <Icon name="arrowLeft" color="primary"/>
                        {!title && <Text preset="paragraphMedium" ml="s8" semiBold>Voltar</Text>}
                        {title && <Text preset="headingSmall">{title}</Text>}
                        {title && <Box width={20} />}
                    </TouchableOpacityBox>}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
        
    )
}