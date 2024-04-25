import React from "react";
import { Box } from "../Box/Box";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";

interface Props {
    children: React.ReactNode;
}

export function ScreenComponent({children}: Props) {

    const {top} = useAppSafeArea();

    return (
        <Box paddingHorizontal="s24" style={{padding: top}}>
            {children}
        </Box>
    )
}