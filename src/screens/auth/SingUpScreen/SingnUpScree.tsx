import React from "react";
import { ScreenComponent } from "../../../Components/Screen/Screen";
import { Text } from "../../../Components/Text/Text";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { Icon } from "../../../Components/icon/Icon";
import { Button } from "../../../Components/Button/Button";
import { Box } from "../../../Components/Box/Box";
import { PasswordInput } from "../../../Components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigation } from "../../../hooks/useResetNavigation";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
export function SingUpScreen({navigation}: ScreenProps) {

    const {resetNavigation} = useResetNavigation();
    
    const formSubmit = () => {
        resetNavigation({
            title:'Sua conta foi criada com sucesso!',
            description:'Agora é só fazer login na nossa plataforma',
            icon: {
                name: 'checkRound',
                color: 'success'
            }
        });
    }

    return (
        <ScreenComponent changeGoBack scrollable>
            <Text preset="headingLarge" mb="s32">Criar uma Conta</Text>

            <Box marginBottom="s24">
                <TextInput 
                    errorMessage="Digite um username válido"
                    label="Seu Username" 
                    placeholder="@"
                />
            </Box>
            
            
            <Box marginBottom="s24">
                <TextInput 
                    label="Nome Completo" 
                    placeholder="Digite seu nome completo"
                />
            </Box>
            
            <Box marginBottom="s24">
                <TextInput 
                    label="E-mail" 
                    placeholder="Digite seu e-mail"
                />
            </Box>
            

            <PasswordInput
                label="Senha"
                placeholder="Digite sua senha"
            />

            <Button onPress={formSubmit} preset="primary" title="Criar uma conta" />
        </ScreenComponent>
    )
}