import React, { useEffect, useState } from "react";

import {  PostItem, ScreenComponent } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { postService } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItemInfo } from "react-native";
import { HomeHeader } from "./Components/HomeHeader";
import { Post } from "src/domain/Post/postTypes";


export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const [posts, setPosts] = useState<Post[]>([]);

    const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
        return (
            <PostItem post={item}/>
        )
    }

    useEffect(() => {
        postService.getList().then(( list ) => setPosts(list));
    }, []);

    return (
        <ScreenComponent style={{paddingBottom:0, paddingHorizontal:0, paddingTop:0}}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListHeaderComponent={HomeHeader}
                />
        </ScreenComponent>
    )
}