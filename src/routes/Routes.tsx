import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import React from "react";
import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import { SingUpScreen } from "../screens/auth/SingUpScreen/SingnUpScree";
import { SuccessScreen } from "../screens/auth/SucessScreen/SuccessScreen";
import { IconProps } from "../Components/icon/Icon";
import { ForgotPasswordScreen } from "../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen";

export type RootStackParamList = {
    LoginScreen: undefined,
    SignUpScreen: undefined,
    SuccessScreen : {
        title: string,
        description: string,
        icon: Pick<IconProps, 'name' | 'color'>
    },
    ForgotPasswordScreen: {
        title: string,
        description: string,
        labelInput: string,
        placeholderInput: string
    },
}

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={{
                    headerShown: false,
                }}
                > 
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="SignUpScreen" component={SingUpScreen}/>
                <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}