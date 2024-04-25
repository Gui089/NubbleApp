import React from "react";
import { Box } from "../Box/Box";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { Icon } from "../icon/Icon";
import { Text } from "../Text/Text";

interface Props {
    children: React.ReactNode;
    changeGoBack?: boolean;
}

export function ScreenComponent({children, changeGoBack = false}: Props) {

    const {top} = useAppSafeArea();

    return (
        <Box paddingHorizontal="s24" style={{padding: top}}>
            <Box flexDirection="row" mb="s40">
                <Icon name="arrowLeft" color="primary"/>
                <Text preset="paragraphMedium" ml="s8" semiBold>Voltar</Text>
            </Box>
            {children}
        </Box>
    )
}