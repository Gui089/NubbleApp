import { TextMessage } from "@Components";
import { usePostCommentCreate } from "@domain";
import { useState } from "react";
import { Keyboard } from "react-native";


interface Props {
    postId: number;
}
export const PostCommentTextMessage = ({postId}: Props) => {

    const [message, setMessage] = useState('');
    const {createComment} = usePostCommentCreate(postId);

    const sendMessage = async () => {
        await createComment(message);
        setMessage('');
        Keyboard.dismiss();
    }

    return (
        <TextMessage
            placeholder="Adicione um comentário"
            onPressSend={sendMessage}
            value={message}
            onChangeText={setMessage}
          />
    )
}