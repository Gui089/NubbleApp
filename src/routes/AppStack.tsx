import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { PostCommentScreen, SettingsScreen } from "@screens";
import { AppTabBottomTabParams, AppTabNavigator } from "@routes";
import { NavigatorScreenParams } from "@react-navigation/native";


export type AppStackParams = {
    AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParams>;
    SettingsScreen: undefined;
    PostCommentScreen: {
        postId: string;
    };
};

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
            <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
        </Stack.Navigator>
    )
}