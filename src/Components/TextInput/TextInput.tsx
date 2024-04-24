import React from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps} from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

interface TextInputProps extends RNTextInputProps {
    label:string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
    return (
        <Box>
            <Text bold marginBottom="s4" preset="paragraphMedium">{label}</Text>

            <Box {...$textInputContainer}>
                <RNTextInput style={{borderWidth:1, height:50}} {...rnTextInputProps} />
            </Box>
        </Box>
    )
}

const $textInputContainer: BoxProps = {
    borderWidth:1,
    padding:'s16',
    borderColor:'gray4',
    borderRadius:'s12'
}