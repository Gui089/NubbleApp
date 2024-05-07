import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SettingsScreen } from "@screens";
import { AppTabNavigator } from "@routes";

export type AppStackParams = {
    AppTabNavigator: undefined
    SettingsScreen: undefined
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