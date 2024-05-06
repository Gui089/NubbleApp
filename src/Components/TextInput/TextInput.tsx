import React, { ReactElement, ReactNode, useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle} from "react-native";
import { Box, BoxProps } from "@Components";
import { $fontFamily, $fontText, Text } from "../Text/Text";
import { useAppTheme } from "@hooks";

export interface TextInputProps extends RNTextInputProps {
    label:string;
    errorMessage?: string;
    RightComponent?: ReactElement;
}

export function TextInput({label,errorMessage,RightComponent, ...rnTextInputProps}: TextInputProps) {

    const {colors} = useAppTheme()
    const inputRef = useRef<RNTextInput>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    }

    const $textInputContainer: BoxProps = {
        flexDirection:'row',
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
                    autoCapitalize="none"
                    ref={inputRef}
                    placeholderTextColor={colors.gray2}
                    style={$textInputStyle}
                    {...rnTextInputProps} />

                    { RightComponent && 
                    <Box justifyContent="center" marginLeft="s16">
                        {RightComponent}
                    </Box>}
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
    flexGrow:1,
    flexShrink:1,
    padding:0,
    fontFamily: $fontFamily.regular,
    ...$fontText
} 
