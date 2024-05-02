import React from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Text } from "../../../Components/Text/Text";
import { Box, TouchableOpacityBox } from "../../../Components/Box/Box";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { Button } from "../../../Components/Button/Button";
import { ScreenComponent } from "../../../Components/Screen/Screen";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../routes/Routes";
import { Controller, useForm } from "react-hook-form";
import { PasswordInput } from "../../../Components/PasswordInput/PasswordInput";


type FormTypes = {
  email: string;
  password: string;
}
type ScreenPros = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export function LoginScreen({navigation}: ScreenPros) {

  const {control, handleSubmit, formState} = useForm<FormTypes>({
    defaultValues:{
      email:'',
      password:''
    },
    mode:'onChange'
  });

  

  const formSubmit = ({email, password}: FormTypes) => {
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
            rules={{
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message:'E-mail inválido'
              }
            }}
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
            rules={{
              required:'senha obrigatória',
              minLength:{
                value:8,
                message:'Senha deve ter no mínimo 8 caracteres'
              }
            }}
            render={({field, fieldState}) => (
              <Box marginBottom='s20'>
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
              <Text bold marginTop='s10' color='primary' preset='paragraphSmall'>Esqueci minhan senha</Text>
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