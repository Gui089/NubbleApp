import { ScreenComponent, Text } from "@Components";
import React from "react";
import { AppTabScreenProps } from "src/routes/navigationTypes";

export const NewPostScreen = (props: AppTabScreenProps<'NewPostScreen'>) => {
    return (
        <ScreenComponent>
            <Text preset="headingLarge"> NewPOstScreen </Text>
        </ScreenComponent>
    )
}