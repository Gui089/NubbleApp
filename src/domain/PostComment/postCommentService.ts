import { Page } from "src/types/Post";

import { apiAdapter } from "@api";
import { PostComment } from "./postCommentTypes";
import { postCommentAdapter } from "./postCommentAdapter";
import { postCommentApi } from "./postCommentApi";


async function getList(postId:number,page: number):Promise<Page<PostComment>> {
    const postCommentPageApi = await postCommentApi.getList(postId, {page, per_page:10});

    return {
        data: postCommentPageApi.data.map(postCommentAdapter.toPostComment),
        meta: apiAdapter.toMetaDataPage(postCommentPageApi.meta)
    }
}

async function create(postId: number, message: string): Promise<PostComment> {
    const postCommentAPI = await postCommentApi.create(postId, message);

    return postCommentAdapter.toPostComment(postCommentAPI);

}

export const postCommentService = {
    getList,
    create
};