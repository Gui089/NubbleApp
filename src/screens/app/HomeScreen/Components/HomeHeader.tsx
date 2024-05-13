import { Box, BoxProps, Icon } from "@Components";
import { useAppSafeArea } from "@hooks";
import React from "react";

export const HomeHeader = () => {

    const {top} = useAppSafeArea();

    return (
        <Box
            {...$wrapper}
            style={{padding: top}}
            >
            <Box 
                backgroundColor="carrotSecondary" 
                width={70} 
                height={16} />

            <Box flexDirection="row">
                <Box mr="s24">
                    <Icon name="search" />
                </Box>
                <Box mr="s24">
                    <Icon name="bellIcon" />
                </Box>
                    <Icon name="comment" />
            </Box>
        </Box>
    )
}

const $wrapper: BoxProps = {
    backgroundColor:"carrotSecondaryLight",
    flexDirection:"row",
    justifyContent:"space-between"
}