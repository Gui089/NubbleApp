import { PageAPI } from "@api";
import { PostApi } from "./postTypes";


async function getList(): Promise<PageAPI<PostApi>> {

    let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
        Authorization:
        'Bearer Ng.liYF1q8O-hUmAvDI5xgh_Bz6iJcDzhSKf1yfCe4_BoipBkaUovBsx9mhBUsN',
    },
    });

    let data: PageAPI<PostApi> = await response.json();
    console.log('FETCH DATA:', data); 

    return data;
}

export const postApi = {
    getList,
};