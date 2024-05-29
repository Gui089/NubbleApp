

import { MutationOptions, useMutation } from "@infra";
import { postCommentService } from "../postCommentService"
import { PostComment } from "../postCommentTypes";


export const usePostCommentCreate = (postId: number, options?: MutationOptions<PostComment>) => {

    const {mutate} = useMutation<{message: string}, PostComment>(({message}) => 
        postCommentService.create(postId, message),
        options);
    
    const createComment= async (message: string) => {
        await mutate({message});
        
    }

    return {
        createComment,
    }
}