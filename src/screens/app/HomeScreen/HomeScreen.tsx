import React from "react";

import { Button, ScreenComponent, Text } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";

export const HomeScreen = ({navigation}: AppScreenProps<'HomeScreen'>) => {

    const goToSettings = () => {
        navigation.navigate('SettingsScreen');
    }

    return (
        <ScreenComponent>
            <Text preset="headingLarge">Home Screen</Text>
            <Button onPress={goToSettings} title="Settings" />
        </ScreenComponent>
    )
}