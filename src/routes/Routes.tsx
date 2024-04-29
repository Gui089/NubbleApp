import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import React from "react";
import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import { SingUpScreen } from "../screens/auth/SingUpScreen/SingnUpScree";

export type RootStackParamList = {
    LoginScreen: undefined,
    SignUpScreen: undefined,
    //TODO: SuccessScreen : undefined
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}