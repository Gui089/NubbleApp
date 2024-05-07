import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from "@screens";
import { AppTabBottomTabParams, AppTabNavigator } from "@routes";
import { NavigatorScreenParams } from "@react-navigation/native";

export type AppStackParams = {
    AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParams>;
    SettingsScreen: undefined;
}

const Stack = createStackNavigator<AppStackParams>();

export const AppStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="AppTabNavigator"
            screenOptions={{
                headerShown: false
            }}
            >
            <Stack.Screen name="AppTabNavigator" component={AppTabNavigator}/>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
    )
}