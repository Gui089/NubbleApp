import { PageAPI } from "@api";
import { PostApi } from "./postTypes";
import { api } from "@api";

async function getList(): Promise<PageAPI<PostApi>> {
    const response = await api.get<PageAPI<PostApi>>('user/post');
    /* console.log(response.data.data); */
    
    return response.data;
}

export const postApi = {
    getList,
};