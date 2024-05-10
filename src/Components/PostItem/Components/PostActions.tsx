
import { Box, Icon, IconProps, Text, TouchableOpacityBox } from "@Components";
import { Post } from "@domain";
import React from "react";

type PostActionsProps = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>
export const PostActions = ({commentCount, favoriteCount, reactionCount}: PostActionsProps) => {

    function likePost() {
        //TODO: implement
    }

    function commentPost() {
        //TODO: implement
    }

    function favoritePost() {
        //TODO: implement
    }

    return (
        <Box flexDirection="row" mt="s16">
            <Item
            onPress={likePost}
            market
            icon={{
                default: 'heat',
                marked: 'heartFill'
            }}
            text={reactionCount}
            />

        <Item
            onPress={commentPost}
            market={false}
            icon={{
                default: 'comment',
                marked: 'comment'
            }}
            text={commentCount}
            />

        <Item
            onPress={favoritePost}
            market
            icon={{
                default: 'bookMark',
                marked: 'bookMarkFill'
            }}
            text={favoriteCount}
            />
        </Box>
    )
}

interface ItemProps {
    onPress: () => void;
    market: boolean;
    icon: {
        default: IconProps['name'],
        marked: IconProps['name']
    };
    text: number;
}
const Item = ({onPress, icon, text, market}: ItemProps) => {

    return (
    <TouchableOpacityBox 
        flexDirection="row"
        alignItems="center"
        onPress={onPress}
        ml="s24"
        >
        <Icon color={market ? 'market' : undefined} name={ market ? icon.marked : icon.default} />
        { text > 0 && (<Text ml="s4" bold preset="paragraphSmall">
            {text}
        </Text>)}
    </TouchableOpacityBox>
    )

}