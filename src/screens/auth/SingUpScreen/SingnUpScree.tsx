import React from "react";
import { ScreenComponent } from "../../../Components/Screen/Screen";
import { Text } from "../../../Components/Text/Text";
import { Button } from "../../../Components/Button/Button";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigation } from "../../../hooks/useResetNavigation";
import { useForm } from "react-hook-form";
import { FormTextInput } from "../../../Components/Form/FormTextInput/FormTextInput";
import { FormPasswordTextInput } from "../../../Components/Form/FormPasswordTextInput/FormPasswordTextInput";


type SignUpFormType = {
    userName: string;
    fullName: string;
    email: string;
    password: string;
}
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
export function SingUpScreen({navigation}: ScreenProps) {

    const {resetNavigation} = useResetNavigation();

    const {control, formState, handleSubmit} = useForm<SignUpFormType>({
        defaultValues:{
            userName:'',
            fullName:'',
            email:'',
            password:''
        },
        mode:'onChange'
    });
    
    const formSubmit = (formValues: SignUpFormType) => {

        resetNavigation({
            title:`Bem-vindo ${formValues.userName}`,
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

        <FormTextInput
            control={control}
            name="userName"
            rules={{
                required: 'Username é obrigatório'
            }}
            label="Seu Username"
            placeholder="@"
        />

        <FormTextInput
            control={control}
            name="fullName"
            rules={{
                required:'Nome é obrigatório'
            }}
            label="Nome Completo"
            placeholder="Digite seu nome completo"
        />

        <FormTextInput
            control={control}
            name="email"
            rules={{
                required: 'E-mail é obrigatório',
                pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message:'E-mail inválido'
                }
            }}
            label="Email"
            placeholder="Digite seu e-mail"
        />

        <FormPasswordTextInput
            control={control}
            name="password"
            rules={{
                required:'senha obrigatória',
                minLength:{
                    value:8,
                    message:'Senha deve ter no mínimo 8 caracteres'
                }
            }}
            label="Senha"
            placeholder="Digite sua senha"
        />


            <Button disabled={!formState.isValid} onPress={handleSubmit(formSubmit)} preset="primary" title="Criar uma conta" />
        </ScreenComponent>
    )
}