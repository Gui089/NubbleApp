import React from "react";
import { Dimensions, Image } from "react-native";
import { Post } from "@domain";

type PostImageProps = Pick<Post, 'imageURL'>
export const PostImage = ({imageURL}: PostImageProps) => {
    return (
        <Image 
            resizeMode="cover"
            style={{
                width: Dimensions.get('screen').width, 
                height:300,
                marginHorizontal:-24,
            }} 
                source={{uri: imageURL}}
            />
    )
}