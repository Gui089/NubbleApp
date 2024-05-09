import React, { useEffect, useState } from "react";

import { ScreenComponent, Text } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { Post, postService } from "@domain";


export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        postService.getList().then(( list ) => setPosts(list));
    })

    return (
        <ScreenComponent>
            {posts.map(post => <Text>{post.text}</Text>)}
        </ScreenComponent>
    )
}