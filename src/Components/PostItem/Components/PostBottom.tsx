import React from "react";
import { Box, Text, TouchableOpacityBox } from "@Components";
import { Post } from "@domain";
import { useNavigation } from "@react-navigation/native";


type PostBottomProps = Pick<Post, 'author' | 'commentCount' | 'text' | 'id'>
export const PostBottom = ({author, commentCount, text, id}: PostBottomProps) => {

    const navigation = useNavigation();

    const goToPostCommentScreen = () => {
        navigation.navigate('PostCommentScreen', {
            postId: id,
            postAuthorId: author.id,
        })
    } 


    const commentText = getCommentCount(commentCount);

    return (
        <Box mt="s16">
            <Text preset="paragraphMedium" bold>{author.userName}</Text>
            <Text mt="s4" preset="paragraphMedium" color="gray1">{text}</Text>

            { commentText &&  <TouchableOpacityBox mt="s8">
                <Text onPress={goToPostCommentScreen} preset="paragraphSmall" color="greenPrimary" bold>{commentText}</Text>
            </TouchableOpacityBox>}
        </Box>
    )
}

function getCommentCount(commentCount: number): string | null {
    if(commentCount === 0) {
       return null;
    } else if(commentCount === 1) {
        return 'Ver comentário'
    }else {
        return `Ver ${commentCount} comentários`
    }
}