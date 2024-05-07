import { ScreenComponent, Text } from "@Components";
import React from "react";
import { AppTabScreenProps } from "src/routes/navigationTypes";

export const MyProfileScreen = (props: AppTabScreenProps<'MyProfileScreen'>) => {
    return (
        <ScreenComponent>
            <Text preset="headingLarge"> MyProfileScreen </Text>
        </ScreenComponent>
    )
}