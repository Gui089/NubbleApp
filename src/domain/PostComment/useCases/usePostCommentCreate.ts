

import { MutationOptions, QueryKeys } from "@infra";
import { PostComment } from "../postCommentTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCommentService } from "../postCommentService";


export const usePostCommentCreate = (
    postId: number, 
    options?: MutationOptions<PostComment>) => {

    const queryClient = useQueryClient();

    const {mutate, isLoading, isError} = useMutation<PostComment, unknown, {message: string}>({
        mutationFn: ({message}) => postCommentService.create(postId, message),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                    queryKey: [QueryKeys.PostCommentList, postId],
                }
            );
            if(options?.onSuccess) {
                options.onSuccess(data);
            }
        },
    });
    
    const createComment= async (message: string) => {
        await mutate({message});
    }

    return {
        createComment,
        isLoading,
        isError
    }
}