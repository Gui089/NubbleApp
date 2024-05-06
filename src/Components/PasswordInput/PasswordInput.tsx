import React, { useState } from "react";
import { 
    TextInput,
    TextInputProps,
    Box,
    Icon
} from "@Components";


export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props : PasswordInputProps) {

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

    const toggleSecureTextEntry = () => setIsSecureTextEntry(prev => !prev);

    return (
        <Box marginBottom="s40">
                <TextInput 
                secureTextEntry={isSecureTextEntry}
                {...props}
                RightComponent={
                        <Icon 
                            onPress={toggleSecureTextEntry}
                            color='gray2' 
                            name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'} />
                }
                />
            </Box>
    )
}