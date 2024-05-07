import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen, HomeScreen, MyProfileScreen, NewPostScreen } from "@screens";

export type AppTabBottomTabParams = {
    HomeScreen: undefined,
    FavoriteScreen: undefined,
    MyProfileScreen: undefined,
    NewPostScreen:undefined
}

const Tab = createBottomTabNavigator<AppTabBottomTabParams>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
    </Tab.Navigator>
  );
}