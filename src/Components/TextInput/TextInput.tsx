import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle} from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { $fontFamily, $fontText, Text } from "../Text/Text";
import { useAppTheme } from "../../hooks/useAppTheme";

interface TextInputProps extends RNTextInputProps {
    label:string;
    errorMessage?: string;
}

export function TextInput({label,errorMessage, ...rnTextInputProps}: TextInputProps) {

    const {colors} = useAppTheme()
    const inputRef = useRef<RNTextInput>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    }

    const $textInputContainer: BoxProps = {
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? 'error' : 'gray4',
        padding:'s16',
        borderRadius:'s12'
    }

    return (
        <Pressable onPress={focusInput}>
        <Box>
            <Text 
                bold 
                marginBottom="s4" 
                preset="paragraphMedium"
                >
                    {label}
                </Text>

            <Box {...$textInputContainer}>
                <RNTextInput 
                    ref={inputRef}
                    placeholderTextColor={colors.gray2}
                    style={$textInputStyle}
                    {...rnTextInputProps} />
            </Box>
            {errorMessage && <Text 
                preset="paragraphSmall" 
                bold 
                color="error">
                {errorMessage}
            </Text>}
        </Box>
        </Pressable>
    )
}

const $textInputStyle: TextStyle = {
    padding:0,
    fontFamily: $fontFamily.regular,
    ...$fontText
} 
