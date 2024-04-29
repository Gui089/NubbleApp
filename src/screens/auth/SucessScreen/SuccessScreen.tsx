import React from "react";
import { ScreenComponent } from "../../../Components/Screen/Screen";
import { Icon } from "../../../Components/icon/Icon";
import { Text } from "../../../Components/Text/Text";
import { Button } from "../../../Components/Button/Button";

export const SuccessScreen = () => {
    return (
        <ScreenComponent>
            <Icon name="home" />
            <Text mt="s24" preset="headingLarge">Sua conta foi criada com Sucesso!</Text>
            <Text mt="s16" preset="paragraphLarge">Agora é só fazer login na nossa plataforma</Text>
            <Button mt="s40" title="Voltar ao início" />
        </ScreenComponent>
    )
}