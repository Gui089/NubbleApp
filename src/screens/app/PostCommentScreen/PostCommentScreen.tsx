import React from "react";
import { Box, ScreenComponent, Text } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";
import { usePostCommentList } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItem } from "react-native";
import { PostComment } from "src/domain/PostComment/postCommentTypes";
import { PostCommentItem } from "./Components/PostCommentItem";
import { PostCommentButton } from "./Components/PostCommentButton";


export const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
    const postId = route.params.postId;
    const {posts, fetchNextPage,hasNextPage } = usePostCommentList(postId);

    const renderPostComment: ListRenderItem<PostComment> = ({item}) => {
        return (
            <PostCommentItem  postComment={item}/>
        )
    }

    const renderPostButton: ListRenderItem<PostComment> = ({item}) => {
        return (
            <PostCommentButton hasNextPage={hasNextPage} onPress={fetchNextPage}/>
        )
    }

    return (
        <ScreenComponent title="Comentários" changeGoBack>
            <Box mb="s24">
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderPostComment}
                    ListFooterComponent={renderPostButton}
                />
            </Box>
        </ScreenComponent>
    )
}