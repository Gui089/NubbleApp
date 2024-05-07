import React from "react";

import { Button, ScreenComponent, Text } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";

export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const goToMyProfile = () => {
        navigation.navigate('AppTabNavigator', {
            screen:'MyProfileScreen'
        });
    }

    return (
        <ScreenComponent>
            <Text preset="headingLarge">Home Screen</Text>
            <Button 
                mb="s20"
                title="Settings" 
                onPress={() => navigation.navigate('SettingsScreen')} />
            <Button onPress={goToMyProfile} title="MyProfile" />
        </ScreenComponent>
    )
}