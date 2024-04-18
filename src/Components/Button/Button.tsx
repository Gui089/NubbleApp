import React from "react";
import { Text } from "../Text/Text";
import { Box } from "../Box/Box";

interface ButtonProps {
    title: string;
}

export function Button(props: ButtonProps){

    return (
        <Box
            backgroundColor="buttonPrimary"
            paddingHorizontal="s12"
            /* style={{
            backgroundColor: colors.greenPrimary,
            height: 50, 
            borderRadius: 16, 
            alignItems:'center', 
            justifyContent:'center'
            }} */>
            <Text preset="paragraphMedium" style={{color:'white'}} bold>{props.title}</Text>
        </Box>
    )
}

