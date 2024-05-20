import { PageAPI, PageParams } from "@api";
import { PostApi } from "./postTypes";
import { api } from "@api";

async function getList(params?: PageParams): Promise<PageAPI<PostApi>> {
    const response = await api.get<PageAPI<PostApi>>('user/post', {
        params,
    });
    
    return response.data;
}

export const postApi = {
    getList,
};