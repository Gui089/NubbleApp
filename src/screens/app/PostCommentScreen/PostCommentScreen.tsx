import React from "react";
import { Box, ScreenComponent, Text } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";
import { usePostCommentList } from "@domain";


export const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
    const postId = route.params.postId;
    const {posts} = usePostCommentList(postId);

    return (
        <ScreenComponent title="Comentários" changeGoBack>
            <Box>
                <Text>Tela de Comentarios</Text>
            </Box>
        </ScreenComponent>
    )
}