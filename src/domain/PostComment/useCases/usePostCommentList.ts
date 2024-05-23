
import { usePaginetedList } from "@domain";
import { postCommentService } from "../postCommentService";


export function usePostCommentList(postId: number) {

    const getList = (page: number) => {
        return postCommentService.getList(postId, page);
    }
    return usePaginetedList(getList);
}