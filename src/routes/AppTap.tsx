import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen, HomeScreen, MyProfileScreen, NewPostScreen } from "@screens";
import { Icon, Text } from "@Components";

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
      <Tab.Screen options={{
        tabBarLabel: ({focused}) => <Text 
            semiBold
            color={focused ? 'primary' : 'backgroundContrast'}
            preset="paragraphCaption"
            >
                Início
            </Text>,
        tabBarIcon: ({focused}) => <Icon 
            color={focused ? 'primary' : 'backgroundContrast'}
            name={focused ? 'homeFill' : 'home'}
            />
        }} 
        name="HomeScreen"
        component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}