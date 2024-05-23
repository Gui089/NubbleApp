import React from "react";
import { Image } from "react-native";

interface Props {
    width?: number;
    height?: number;
    borderRadius?: number;
    proFileUrl: string;
}

export const ProfileAvatar = ({width = 32, height = 32,borderRadius = 12, proFileUrl }: Props) => {
    return (
        <Image style={{
            width:width, 
            height:height, 
            borderRadius:borderRadius
        }} 
            source={{uri:proFileUrl}}/>
    )
}