import { Page } from "src/types/Post";

import { apiAdapter } from "@api";
import { PostComment } from "./postCommentTypes";
import { postCommentApi } from "./postCommentApi";
import { postCommentAdapter } from "./postCommentAdapter";


async function getList(postId:number,page: number):Promise<Page<PostComment>> {
    const postCommentPageApi = await postCommentApi.getList(postId, {page, per_page:10});

    return {
        data: postCommentPageApi.data.map(postCommentAdapter.toPostComment),
        meta: apiAdapter.toMetaDataPage(postCommentPageApi.meta)
    }
}

export const postCommentService = {
    getList,
};