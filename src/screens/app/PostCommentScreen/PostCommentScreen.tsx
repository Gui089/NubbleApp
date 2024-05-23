import React from "react";
import { Box, ScreenComponent, Text } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";
import { usePostCommentList } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItem } from "react-native";
import { PostComment } from "src/domain/PostComment/postCommentTypes";
import { PostCommentItem } from "./Components/PostCommentItem";


export const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
    const postId = route.params.postId;
    const {posts} = usePostCommentList(postId);

    const renderPostComment: ListRenderItem<PostComment> = ({item}) => {
        return (
            <PostCommentItem  postComment={item}/>
        )
    }

    return (
        <ScreenComponent title="Comentários" changeGoBack>
            <Box>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderPostComment}
                />
            </Box>
        </ScreenComponent>
    )
}