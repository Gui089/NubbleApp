import React, { useEffect, useState } from "react";

import { Box, ScreenComponent, Text } from "@Components";
import { AppTabScreenProps } from "src/routes/navigationTypes";
import { Post, postService } from "@domain";
import { FlatList } from "react-native-gesture-handler";
import { Dimensions, Image, ListRenderItemInfo } from "react-native";



export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {

    const [posts, setPosts] = useState<Post[]>([]);

    const renderItem = ({item}: ListRenderItemInfo<Post>) => {
        return (
            <Box mb="s24">
                <Box flexDirection="row">
                    <Image style={{width:32, height:32}} source={{uri: item.author.profileURL}}/>
                    <Text>{item.author.userName}</Text>
                </Box>
                    <Image 
                    style={{width: Dimensions.get('screen').width, height:300}} source={{uri: item.imageURL}}/>
            </Box>
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