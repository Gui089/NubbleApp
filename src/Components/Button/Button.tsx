import React from "react";
import { Text } from "../Text/Text";
import { Box, TouchableOpacityBox } from "../Box/Box";
import { ActivityIndicator } from "react-native";

interface ButtonProps {
    title: string;
    loading?: boolean;
}

export function Button(props: ButtonProps){

    return (
        <TouchableOpacityBox
            backgroundColor="buttonPrimary"
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            >
            {props.loading ? (
                <ActivityIndicator />
            ) : (
                <Text 
                preset="paragraphMedium" 
                style={{color:'white'}} 
                bold
            >
                {props.title}
            </Text>
            )}
        </TouchableOpacityBox>
    )
}

