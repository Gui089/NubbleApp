import React, { useState } from "react";
import { Box, ScreenComponent, TextMessage } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";
import { usePostCommentList } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItem } from "react-native";
import { PostComment } from "src/domain/PostComment/postCommentTypes";
import { PostCommentItem } from "./Components/PostCommentItem";
import { PostCommentButton } from "./Components/PostCommentButton";
import { useAppSafeArea } from "@hooks";


export const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
    const postId = route.params.postId;
    const {posts, fetchNextPage,hasNextPage } = usePostCommentList(postId);
    const [message, setMessage] = useState('');
    const {bottom} = useAppSafeArea();

    const renderPostComment: ListRenderItem<PostComment> = ({item}) => {
        return (
            <PostCommentItem  postComment={item}/>
        )
    }

    const sendMessage = () => {

    }

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
          <TextMessage
            placeholder="Adicione um comentário"
            onPressSend={sendMessage}
            value={message}
            onChangeText={setMessage}
          />
        </Box>
      </ScreenComponent>
    )
}