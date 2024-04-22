import React from "react";
import { Text } from "../Text/Text";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { ActivityIndicator } from "react-native";
import { ThemeColors } from "../../theme/Theme";

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

const buttonPresets: Record<ButtonPreset, ButtonUI> = {
    primary: {
        container: {
            backgroundColor: 'primary'
        },
        content: 'primaryContrast'
    },
    outline: {
        container: {
            borderWidth:1,
            borderColor: 'primary'
        },
        content:'primary'
    }
}

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string;
    loading?: boolean;
    preset?:ButtonPreset;
}

export function Button({title, loading, preset='primary', ...TouchableOpacityBoxProps}: ButtonProps){

    const buttonPreset = buttonPresets[preset];

    return (
        <TouchableOpacityBox
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...buttonPreset.container}
            {...TouchableOpacityBoxProps}
            >
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text 
                color={buttonPreset.content}
                preset="paragraphMedium" 
                bold
            >
                {title}
            </Text>
            )}
        </TouchableOpacityBox>
    )
}

