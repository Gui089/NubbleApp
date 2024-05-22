
import { Post } from "../postTypes"
import { postService } from "../postService"
import { usePaginetedList } from "@domain";



export const usePostList = () => {

    return usePaginetedList<Post>(postService.getList);
}