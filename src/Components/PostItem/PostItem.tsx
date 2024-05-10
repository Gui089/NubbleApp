import React from "react";

import { Box } from "@Components";
import { Post } from "@domain";

import { Dimensions, Image } from "react-native";
import { PostHeader } from "./Components/PostHeader";
import { PostImage } from "./Components/PostImage";

interface Props {
    post: Post;
}
export const PostItem = ({post}: Props) => {
    return (
        <Box mb="s24">
            <PostHeader author={post.author}/>
            <PostImage imageURL={post.imageURL}/>
        </Box>
    )
}