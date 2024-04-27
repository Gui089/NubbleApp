import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "../../../Components/Text/Text";
import { Box } from "../../../Components/Box/Box";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { Icon } from "../../../Components/icon/Icon";
import { Button } from "../../../Components/Button/Button";
import { ScreenComponent } from "../../../Components/Screen/Screen";

export function LoginScreen({navigation}) {

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  }

    return (
        <ScreenComponent>
        <SafeAreaView >
        <View style={{paddingHorizontal: 16}}>
            <Text marginBottom='s8' preset='headingLarge'>Olá!</Text>
            <Text marginBottom='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>

          <Box marginBottom='s20'>
            <TextInput
              errorMessage='Mensagem de erro'
              label='Email'
              placeholder='Digite seu e-mail' 
            />
          </Box>

          <Box marginBottom='s20'>
            <TextInput 
              RightComponent={<Icon color='gray2' name='eyeOn' />}
              label='Senha'
              placeholder='Digite sua senha' 
              />
          </Box>

            <Text bold marginTop='s10' color='primary' preset='paragraphSmall'>Esqueci minhan senha</Text>

            <Button marginTop='s48' title='Entrar' />
            <Button onPress={navigateToSignUpScreen} preset='outline' marginTop='s12' title='Criar uma conta'/>
        </View>
      </SafeAreaView>
        </ScreenComponent>
    )
}