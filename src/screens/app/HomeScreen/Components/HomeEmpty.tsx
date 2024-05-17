import { ActivityIndicator, Box, Button, Text } from "@Components";
import React from "react";

interface Props {
    error:  boolean;
    loading: boolean;
    reload: () => void;
}
export const HomeEmpty = ({error, loading, reload}: Props) => {
    let component = (
        <Text 
            preset="paragraphMedium" 
            bold
            >Não há publicações para exibir
        </Text>
    )
    if(loading) {
        component = (
            <ActivityIndicator color="greenPrimary"/>
        );
    }
    if(error) {
        <>
            <Text>Algo deu errado!</Text>
            <Button preset="outline" title="Recarregar"/>
        </>
    }
    
    return (
        <Box>
            {component}
        </Box>
    )
}