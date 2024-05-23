import { Text } from "@Components";
import React from "react";
import { Pressable } from "react-native";

interface Props {
    onPress: () => void;
    hasNextPage: boolean;
}
export const PostCommentButton = ({onPress, hasNextPage}: Props) => {
    return (
         hasNextPage && (
         <Pressable onPress={onPress} style={{alignSelf:'center'}}>
            <Text color="greenPrimary" bold>Ver mais</Text>
        </Pressable>
        )
    )
}