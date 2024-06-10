import React, { useState } from "react";
import { Box, ScreenComponent } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";
import { usePostCommentList, useUser } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItem } from "react-native";
import { PostComment } from "src/domain/PostComment/postCommentTypes";
import { PostCommentItem } from "./Components/PostCommentItem";
import { PostCommentButton } from "./Components/PostCommentButton";
import { useAppSafeArea } from "@hooks";
import { PostCommentTextMessage } from "./Components/PostCommentTextMessage";


export const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
    const postId = route.params.postId;
    const postAuthorId = route.params.postAuthorId;
    const {posts, fetchNextPage,hasNextPage, refresh } = usePostCommentList(postId);;
    const {bottom} = useAppSafeArea();

    const {id} = useUser();

    const renderPostComment: ListRenderItem<PostComment> = ({item}) => {
        return (
            <PostCommentItem  
            postId={id}
            postComment={item} 
            onRemoveComment={refresh} 
            userId={id} postAuthorId={postAuthorId}/>
        );
    };

    return (
        <ScreenComponent flex={1} title="Comentários" changeGoBack>
        <Box flex={1} justifyContent="space-between">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={renderPostComment}
            contentContainerStyle={{paddingBottom: bottom}}
            ListFooterComponent={
              <PostCommentButton
                onPress={fetchNextPage}
                hasNextPage={hasNextPage}
              />
            }
          />
          <PostCommentTextMessage
              postId={postId}
          />
        </Box>
      </ScreenComponent>
    )
}