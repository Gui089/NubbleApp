import { Box, Icon, ScreenProps, Text, TouchableOpacityBox } from "@Components";
import { useNavigation } from "@react-navigation/native";
import React from "react";


type Props = Pick<ScreenProps, 'title' | 'changeGoBack' >
export const ScreenHeader = ({title, changeGoBack}: Props) => {

    const navigation = useNavigation();

    return (
        <Box>
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
        </Box>
    )
}