import { ScreenComponent, Text } from "@Components";
import React from "react";
import { AppScreenProps } from "src/routes/navigationTypes";

export const SettingsScreen = ({navigation}: AppScreenProps<'SettingsScreen'>) => {
    return (
        <ScreenComponent changeGoBack>
            <Text> Settings Screen </Text>
        </ScreenComponent>
    )
}