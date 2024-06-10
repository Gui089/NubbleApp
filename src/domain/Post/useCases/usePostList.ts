
import { Post } from "../postTypes"
import { postService } from "../postService"
import { QueryKeys, usePaginetedList } from "@infra";



export const usePostList = () => {

    return usePaginetedList<Post>([QueryKeys.PostList],postService.getList);
}