/** 
 * @description funcao para a adaptar o postApi para o post service 
 */

import { Post, PostApi } from "./postTypes"

const toPost = (postAPI: PostApi): Post => {
    return {
        id: postAPI.id.toString(),
        text: postAPI.text,
        author: {
            profileURL: postAPI.user.profile_url,
            name: postAPI.user.full_name,
            userName: postAPI.user.username,
        },
        imageURL: postAPI.image_url,
        reactionCount: parseInt(postAPI.meta.like_count, 10),
        commentCount: parseInt(postAPI.meta.comments_count, 10),
        favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
    }
}

export const postAdapter = {toPost}