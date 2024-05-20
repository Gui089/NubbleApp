import React, { useEffect, useState } from "react";

import {  PostItem, ScreenComponent } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { FlatList } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { HomeHeader } from "./Components/HomeHeader";
import { Post } from "src/domain/Post/postTypes";
import { HomeEmpty } from "./Components/HomeEmpty";
import { usePostList } from "@domain";

export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const {posts, error, loading, refetch} = usePostList()

    const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
        return (
            <PostItem post={item}/>
        );
    }


    return (
        <ScreenComponent style={{paddingBottom:0, paddingHorizontal:0, paddingTop:0}}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{flex: posts.length === 0 ? 1 : undefined}}
                ListHeaderComponent={HomeHeader}
                ListEmptyComponent={<HomeEmpty error={error} loading={loading} reload={refetch}/>}
                />
        </ScreenComponent>
    );
}