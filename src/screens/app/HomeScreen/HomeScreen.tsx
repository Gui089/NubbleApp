import React, { useRef } from "react";

import {  PostItem, ScreenComponent } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { FlatList, RefreshControl } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { HomeHeader } from "./Components/HomeHeader";
import { Post } from "src/domain/Post/postTypes";
import { HomeEmpty } from "./Components/HomeEmpty";
import { usePostList } from "@domain";
import { useScrollToTop } from "@react-navigation/native";

export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const flatListRef = useRef<FlatList<Post>>(null);
    useScrollToTop(flatListRef);

    const {posts, error, loading, refresh, fetchNextPage} = usePostList()

    const renderItem = ({ item }: ListRenderItemInfo<Post>) => {
        return (
            <PostItem post={item}/>
        );
    }


    return (
        <ScreenComponent style={{paddingBottom:0, paddingHorizontal:0, paddingTop:0}}>
            <FlatList 
                ref={flatListRef}
                showsVerticalScrollIndicator={false}
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.1}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh} />
                }
                style={{flex: posts.length === 0 ? 1 : undefined}}
                ListHeaderComponent={HomeHeader}
                ListEmptyComponent={<HomeEmpty error={error} loading={loading} reload={refresh}/>}
                />
        </ScreenComponent>
    );
}