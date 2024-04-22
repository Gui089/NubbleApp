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

const buttonPresets: Record<ButtonPreset, {
    default:ButtonUI,
    disabled: ButtonUI
}> = {
    primary: {
        default: {
            container: {
                backgroundColor: 'primary'
            },
            content: 'primaryContrast'
        },
        disabled: {
            container:{
                backgroundColor:'gray4'
            },
            content:'gray2'
        }
    },
    outline: {
        default:{
            container: {
                borderWidth:1,
                borderColor: 'primary'
            },
            content:'primary'
        },
        disabled:{
            container:{
                borderWidth:1,
                borderColor:'gray4'
            },
            content:'gray2'
        }
    }
}

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string;
    loading?: boolean;
    preset?:ButtonPreset;
    disabled?:boolean;
}

export function Button({title, loading, preset='primary',disabled, ...TouchableOpacityBoxProps}: ButtonProps){

    const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...buttonPreset.container}
            {...TouchableOpacityBoxProps}
            >
            {loading ? (
                <ActivityIndicator color={buttonPreset.content} />
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

