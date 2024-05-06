import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SettingsScreen } from "@screens";

export type AppStackParams = {
    HomeScreen: undefined,
    SettingsScreen: undefined
}

const Stack = createStackNavigator<AppStackParams>();

export const AppStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
            >
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
    )
}