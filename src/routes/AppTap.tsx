import React from "react";

import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen, HomeScreen, MyProfileScreen, NewPostScreen } from "@screens";
import { AppBottomTab } from "./AppBottomTab";

export type AppTabBottomTabParams = {
    HomeScreen: undefined,
    FavoriteScreen: undefined,
    MyProfileScreen: undefined,
    NewPostScreen:undefined
}

const Tab = createBottomTabNavigator<AppTabBottomTabParams>();

export function AppTabNavigator() {

  function renderTab(props: BottomTabBarProps) {
    return <AppBottomTab {...props}/>
  }

  return (
    <Tab.Navigator
      tabBar={renderTab}
        screenOptions={{
            headerShown: false
        }}
    >
      <Tab.Screen 
        name="HomeScreen"
        component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}