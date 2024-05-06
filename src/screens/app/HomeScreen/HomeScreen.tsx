import React from "react";

import { Button, ScreenComponent, Text } from "@Components";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { AppStackParams } from "src/routes/AppStack";

type HomeScreenProps = NativeStackScreenProps<AppStackParams>
export const HomeScreen = ({navigation}: HomeScreenProps) => {

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