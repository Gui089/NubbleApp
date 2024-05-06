import React from "react";

import {
  ScreenComponent,
  Text,
  TextInput,
  Box,
  PasswordInput,
  TouchableOpacityBox,
  Button
} from "@Components"

import { Alert, SafeAreaView, View } from "react-native";
import {zodResolver} from '@hookform/resolvers/zod'
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../routes/Routes";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "./LoginSchema";


type ScreenPros = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export function LoginScreen({navigation}: ScreenPros) {

  const {control, handleSubmit, formState} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:'',
      password:''
    },
    mode:'onChange'
  });

  

  const formSubmit = ({email, password}: LoginSchema) => {
      return (
        Alert.alert(`Seu e-mail: ${email} \n senha: ${password}`)
      )
  }

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  }

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen', {
      title: 'Esqueci minha senha',
      description: 'Digite seu e-mail e enviaremos as instruções para redefinição de senha',
      labelInput:'E-mail',
      placeholderInput:'Digite seu e-mail'
    });
  }

    return (
        <ScreenComponent>
        <SafeAreaView >
        <View style={{paddingHorizontal: 16}}>
            <Text marginBottom='s8' preset='headingLarge'>Olá!</Text>
            <Text marginBottom='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>

          <Controller 
            control={control}
            name="email"
            render={({field, fieldState}) => (
              <Box marginBottom='s20'>
                <TextInput
                errorMessage={fieldState.error?.message}
                value={field.value}
                onChangeText={field.onChange}
                label='Email'
                placeholder='Digite seu e-mail' 
                />
              </Box>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field, fieldState}) => (
              <Box >
                <PasswordInput
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                  onChangeText={field.onChange}
                  label='Senha'
                  placeholder='Digite sua senha' 
                />
              </Box>
            )}
          />  
            <TouchableOpacityBox hitSlop={10} onPress={goToForgotPassword}>
              <Text bold color='primary' preset='paragraphSmall'>Esqueci minhan senha</Text>
            </TouchableOpacityBox>

            <Button 
              disabled={!formState.isValid} 
              onPress={handleSubmit(formSubmit)} 
              marginTop='s48' 
              title='Entrar' 
            />
            <Button 
              onPress={navigateToSignUpScreen}
              preset='outline' 
              marginTop='s12' 
              title='Criar uma conta'
            />
        </View>
      </SafeAreaView>
        </ScreenComponent>
    )
}