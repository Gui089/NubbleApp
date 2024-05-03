import React from "react";
import { ScreenComponent } from "../../../Components/Screen/Screen";
import { Text } from "../../../Components/Text/Text";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { Button } from "../../../Components/Button/Button";
import {zodResolver} from '@hookform/resolvers/zod'
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigation } from "../../../hooks/useResetNavigation";
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema, forgotPasswordSchema } from "./ForgotPasswordSchema";
import { FormTextInput } from "../../../Components/Form/FormTextInput/FormTextInput";

type ScreeProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export const ForgotPasswordScreen  = ({route, navigation}: ScreeProps) => {
    const {resetNavigation} = useResetNavigation();

    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues:{
            email:''
        },
        mode:'onChange'
    });

    const submitForm = () => {
        resetNavigation({
            title:'Enviamos as instruções para seu e-mail',
            description:'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name:'messageRound',
                color:'greenPrimary'
            }
        });
    }

    return (
        <ScreenComponent changeGoBack>
            <Text mb="s16" preset="headingLarge" bold> 
                {route.params.title}
            </Text>
            <Text mb="s32" preset="paragraphLarge" semiBold>
                {route.params.description}
            </Text>

            <FormTextInput 
                control={control}
                name="email"
                label="Email"
                placeholder="Digite seu e-mail"
            />

            <Button onPress={handleSubmit(submitForm)} title="Recuperar senha" />
        </ScreenComponent>
    )
}