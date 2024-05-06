import { ScreenComponent, Text } from "@Components";
import React from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { AppStackParams } from "src/routes/AppStack";

type SettingsScreenProps = NativeStackScreenProps<AppStackParams>
export const SettingsScreen = ({navigation}: SettingsScreenProps) => {
    return (
        <ScreenComponent changeGoBack>
            <Text> Settings Screen </Text>
        </ScreenComponent>
    )
}