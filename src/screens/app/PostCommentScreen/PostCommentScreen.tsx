import React from "react";
import { Box, ScreenComponent, Text } from "@Components";
import { AppScreenProps } from "src/routes/navigationTypes";

export const PostCommentScreen = ({route}: AppScreenProps<'PostCommentScreen'>) => {
    return (
        <ScreenComponent title="Comentários" changeGoBack>
            <Box>
                <Text>Tela de Comentarios</Text>
            </Box>
        </ScreenComponent>
    )
}