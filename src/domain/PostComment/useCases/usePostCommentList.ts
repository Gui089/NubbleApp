

import { QueryKeys, usePaginetedList } from "@infra";
import { postCommentService } from "../postCommentService";


export function usePostCommentList(postId: number) {

    const getList = (page: number) => {
        return postCommentService.getList(postId, page);
    }
    return usePaginetedList([QueryKeys.PostList],getList);
}