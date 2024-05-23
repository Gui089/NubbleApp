import { Box, ProfileAvatar, Text } from "@Components";
import { Post } from "@domain";
import React from "react";
import { Image } from "react-native";



type PostHeaderProps = Pick<Post, 'author'>
export const PostHeader = ({author}: PostHeaderProps) => {
    return(
        <Box mb="s16" flexDirection="row">
            <ProfileAvatar proFileUrl={author.profileURL} />
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