import React from "react";

import {
    ScreenComponent,
    Icon,
    Button,
    Text
} from "@Components";

import { AuthScreenProps } from "src/routes/navigationTypes";

export const SuccessScreen = ({route, navigation}: AuthScreenProps<'SuccessScreen'>) => {

    const changeGoback = () => {
        navigation.goBack();
    }

    return (
        <ScreenComponent>
            <Icon name={route.params.icon.name} color={route.params.icon.color}/>
            <Text mt="s24" preset="headingLarge">
                {route.params.title}
            </Text>
            <Text mt="s16" preset="paragraphLarge">
                {route.params.description}
            </Text>
            <Button onPress={changeGoback} mt="s40" title="Voltar ao início" />
        </ScreenComponent>
    )
}