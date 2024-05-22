import React from "react";

import { Box } from "@Components";
import { Post } from "@domain";

import { PostHeader } from "./Components/PostHeader";
import { PostImage } from "./Components/PostImage";
import { PostActions } from "./Components/PostActions";
import { PostBottom } from "./Components/PostBottom";

interface Props {
    post: Post;
}
export const PostItem = ({post}: Props) => {
    return (
        <Box paddingHorizontal="s24" mb="s24">
            <PostHeader author={post.author}/>
            <PostImage imageURL={post.imageURL}/>
            <PostActions commentCount={post.commentCount} favoriteCount={post.favoriteCount} reactionCount={post.reactionCount}/>
            <PostBottom 
                author={post.author} 
                commentCount={post.commentCount} 
                text={post.text} 
                id={post.id}
                />
        </Box>
    )
}