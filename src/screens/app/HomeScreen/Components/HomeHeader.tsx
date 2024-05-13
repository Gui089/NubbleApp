import React from "react";
import { Box, BoxProps, Icon } from "@Components";
import { useAppSafeArea } from "@hooks";
import { SimpleLogo } from "../../../../brand/SimpleLogo";

export const HomeHeader = () => {

    const {top} = useAppSafeArea();

    return (
        <Box
            {...$wrapper}
            style={{padding: top}}
            >
           {/*  <Box 
                backgroundColor="carrotSecondary" 
                width={70} 
                height={16} /> */}
            <SimpleLogo width={70}/>
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
    flexDirection:"row",
    justifyContent:"space-between"
}
