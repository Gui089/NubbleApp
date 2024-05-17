import React, { useEffect, useState } from "react";

import {  PostItem, ScreenComponent } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { postService } from "@domain";
import { FlatList } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { HomeHeader } from "./Components/HomeHeader";
import { Post } from "src/domain/Post/postTypes";
import { HomeEmpty } from "./Components/HomeEmpty";


export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] =  useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchData =  async () => {
        try {
            setLoading(true);
            const list = await postService.getList();
            setPosts(list);
        }catch (error) {
            console.log('ERROR:', error);
        } finally {
            setLoading(false);
        }
    }

    const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
        return (
            <PostItem post={item}/>
        );
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScreenComponent style={{paddingBottom:0, paddingHorizontal:0, paddingTop:0}}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{flex: posts.length === 0 ? 1 : undefined}}
                ListHeaderComponent={HomeHeader}
                ListEmptyComponent={<HomeEmpty error={error} loading={loading} reload={fetchData}/>}
                />
        </ScreenComponent>
    );
}