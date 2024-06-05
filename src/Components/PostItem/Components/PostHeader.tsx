import { Box, ProfileAvatar, Text } from "@Components";
import { Post } from "@domain";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";


type PostHeaderProps = Pick<Post, 'author'>
export const PostHeader = ({author}: PostHeaderProps) => {

    const navigation = useNavigation();

    function navigateToProfile() {
        navigation.navigate('ProfileScreen', {userId: author.id});
    }

    return(
        <Pressable onPress={navigateToProfile}>
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
        </Pressable>
    )
}