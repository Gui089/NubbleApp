import React from "react";
import { ScreenComponent } from "../../../Components/Screen/Screen";
import { Text } from "../../../Components/Text/Text";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { Button } from "../../../Components/Button/Button";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../routes/Routes";
import { Box } from "../../../Components/Box/Box";

type ScreeProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export const ForgotPasswordScreen  = ({route, navigation}: ScreeProps) => {

    const submitForm = () => {
        //TODO: implement
        navigation.navigate('SuccessScreen', {
            title:'Enviamos as instruções para seu e-mail',
            description:'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name:'messageRound',
                color:'greenPrimary'
            }
        })
    }

    return (
        <ScreenComponent changeGoBack>
            <Text mb="s16" preset="headingLarge" bold> 
                {route.params.title}
            </Text>
            <Text mb="s32" preset="paragraphLarge" semiBold>
                {route.params.description}
            </Text>

            <Box mb="s40">
                <TextInput errorMessage="Digite um e-mail válido" label={route.params.labelInput}placeholder={route.params.placeholderInput}/>
            </Box>
            
            <Button onPress={submitForm} title="Recuperar senha" />
        </ScreenComponent>
    )
}