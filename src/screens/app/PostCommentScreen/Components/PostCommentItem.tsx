import { Box, ProfileAvatar, Text } from "@Components";
import { usePostCommentRemove } from "@domain";
import { dataUtils } from "@utils";
import React from "react";
import { Alert, Pressable } from "react-native";
import { PostComment } from "src/domain/PostComment/postCommentTypes";

interface Props {
    postComment: PostComment
}
export const PostCommentItem = ({postComment}: Props) => {

    const {mutate} = usePostCommentRemove();

    const confirmRemove = () => {
        Alert.alert('Deseja excluir o comentário ?', 'pressione confirmare', [
            {
                text: 'Confirmar',
                onPress: () => mutate({postCommentId: postComment.id})
            },
            {
                text: 'Cancelar',
                style:'cancel'
            }
        ])
    }

    return (
        <Pressable onLongPress={confirmRemove}>
        <Box flexDirection="row" alignItems="center" mb="s16">
            <ProfileAvatar proFileUrl={postComment.author.profileURL}/>

            <Box ml="s12" flex={1}>
                <Text preset="paragraphSmall" bold>{postComment.author.userName}</Text>
                <Text preset="paragraphSmall" color="gray1">
                    {postComment.message}
                    {''}
                    -{dataUtils.formatRelative(postComment.createdAt)}
                    </Text>
            </Box>
        </Box>
        </Pressable>
    )
}