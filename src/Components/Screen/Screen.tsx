import React from "react";
import { Box } from "../Box/Box";

interface Props {
    children: React.ReactNode;
}

export function ScreenComponent({children}: Props) {
    return (
        <Box paddingHorizontal="s24">
            {children}
        </Box>
    )
}