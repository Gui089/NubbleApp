import React from "react";

import { IconProps } from "@Components";

import { 
    LoginScreen,
    SingUpScreen,
    SuccessScreen,
    ForgotPasswordScreen
} from "@screens";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

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