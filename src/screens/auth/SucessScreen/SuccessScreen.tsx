import React from "react";

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

import {
    ScreenComponent,
    Icon,
    Button,
    Text
} from "@Components";

import { RootStackParamList } from "@routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export const SuccessScreen = ({route, navigation}: ScreenProps) => {

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