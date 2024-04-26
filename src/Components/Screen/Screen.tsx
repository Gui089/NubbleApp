import React from "react";
import { Box } from "../Box/Box";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { Icon } from "../icon/Icon";
import { Text } from "../Text/Text";
import { KeyboardAvoidingView, Platform} from "react-native";
import { ScrollViewContainer, ViewContainer } from "./Components/ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";

interface Props {
    children: React.ReactNode;
    changeGoBack?: boolean;
    scrollable?: boolean;
}

export function ScreenComponent({children, changeGoBack = false, scrollable = false}: Props) {

    const {top, bottom} = useAppSafeArea();
    const {colors} = useAppTheme();
    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box 
                    paddingBottom="s24"
                    paddingHorizontal="s24" 
                    style={{padding: top, paddingBottom: bottom}}>
                    {changeGoBack && <Box flexDirection="row" mb="s40">
                        <Icon name="arrowLeft" color="primary"/>
                        <Text preset="paragraphMedium" ml="s8" semiBold>Voltar</Text>
                    </Box>}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
        
    )
}