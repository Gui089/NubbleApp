import React from "react";
import { Box, ProfileAvatar, Text } from "@Components";
import { postCommentService, usePostCommentRemove } from "@domain";
import { dataUtils } from "@utils";
import { Alert, Pressable } from "react-native";
import { PostComment } from "src/domain/PostComment/postCommentTypes";
import { useToastService } from "@services";

interface Props {
    postId: number;
    postComment: PostComment,
    userId: number,
    postAuthorId: number
    onRemoveComment: () => void;
}
export const PostCommentItem = ({
    postId,
    postComment, 
    onRemoveComment, 
    userId, 
    postAuthorId
}: Props) => {

    const {showToast} = useToastService();

    const {mutate} = usePostCommentRemove(postId,{
        onSuccess: () => {
        onRemoveComment();
        showToast({message:'Comentário deletado', position: 'bottom'});
    }});

    const isAllowToDelete = postCommentService.isAllowToDelete(
        postComment, 
        userId, 
        postAuthorId
    );

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
        <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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