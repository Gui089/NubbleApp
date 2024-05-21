
import { Page } from "src/types/Post";
import { postAdapter } from "./postAdapter";
import { postApi } from "./postApi";
import { Post } from "./postTypes";
import { apiAdapter } from "@api";


async function getList(page: number):Promise<Page<Post>> {
    const postPageApi = await postApi.getList({page, per_page: 10});

    return {
        data: postPageApi.data.map(postAdapter.toPost),
        meta: apiAdapter.toMetaDataPage(postPageApi.meta)
    }
}

export const postService = {
    getList,
};