import { Button, ScreenComponent, Text } from "@Components";
import React from "react";
import { AppScreenProps } from "src/routes/navigationTypes";

export const SettingsScreen = ({navigation}: AppScreenProps<'SettingsScreen'>) => {
    return (
        <ScreenComponent changeGoBack>
            <Text> Settings Screen </Text>
            <Button 
                mt="s20"
                title="Go to Favorites" 
                onPress={() => {
                    navigation.navigate('AppTabNavigator', {
                        screen:"FavoriteScreen"
                    })
                }} />
        </ScreenComponent>
    )
}