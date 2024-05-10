import React, { useEffect, useState } from "react";

import {  PostItem, ScreenComponent } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { Post, postService } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItemInfo } from "react-native";


export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const [posts, setPosts] = useState<Post[]>([]);

    const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
        return (
            <PostItem post={item}/>
        )
    }

    useEffect(() => {
        postService.getList().then(( list ) => setPosts(list));
    })

    return (
        <ScreenComponent>
            <FlatList 
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                />
        </ScreenComponent>
    )
}