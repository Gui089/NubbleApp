
import { postAdapter } from "./postAdapter";
import { postApi } from "./postApi";
import { Post } from "./postTypes";

async function getList():Promise<Post[]> {
    const postPageApi = await postApi.getList();

    return postPageApi.data.map(postAdapter.toPost);
}

export const postService = {
    getList,
};