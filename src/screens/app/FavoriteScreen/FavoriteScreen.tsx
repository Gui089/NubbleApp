import { ScreenComponent, Text } from "@Components";
import React from "react";
import { AppTabScreenProps } from "src/routes/navigationTypes";

export const FavoriteScreen = (props: AppTabScreenProps<'FavoriteScreen'>) => {
    return (
        <ScreenComponent>
            <Text preset="headingLarge"> FavoriteScreen </Text>
        </ScreenComponent>
    )
}