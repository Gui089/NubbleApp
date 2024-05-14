import { PageAPI } from "@api";
import { PostApi } from "./postTypes";


async function getList(): Promise<PageAPI<PostApi>> {

    let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
        Authorization:
        'Bearer NA.oaFGnUyqf4jQgGrB7wgI5SXYQMC9BGGXtjKsh3Jow7rwekCz2w7H444EDQy0',
    },
    });

    let data: PageAPI<PostApi> = await response.json();
    console.log('FETCH DATA:', data); 

    return data;
}

export const postApi = {
    getList,
};