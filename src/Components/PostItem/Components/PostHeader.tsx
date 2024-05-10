import { Box, Text } from "@Components";
import { Post } from "@domain";
import React from "react";
import { Image } from "react-native";


type PostHeaderProps = Pick<Post, 'author'>
export const PostHeader = ({author}: PostHeaderProps) => {
    return(
        <Box mb="s16" flexDirection="row">
                <Image style={{width:32, height:32, borderRadius:12}} 
                source={{uri: author.profileURL}}/>
            <Text 
                ml="s12" 
                semiBold 
                preset="paragraphMedium"
                >
                {author.userName}
            </Text>
        </Box>
    )
}