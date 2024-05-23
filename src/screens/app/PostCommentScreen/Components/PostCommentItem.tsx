import { Box, ProfileAvatar, Text } from "@Components";
import React from "react";
import { PostComment } from "src/domain/PostComment/postCommentTypes";

interface Props {
    postComment: PostComment
}
export const PostCommentItem = ({postComment}: Props) => {
    return (
        <Box flexDirection="row" alignItems="center" mb="s16">
            <ProfileAvatar proFileUrl={postComment.author.profileURL}/>

            <Box ml="s12">
                <Text preset="paragraphSmall" bold>{postComment.author.userName}</Text>
                <Text preset="paragraphSmall" color="gray1">{postComment.message}</Text>
            </Box>
        </Box>
    )
}