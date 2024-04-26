import React, { useState } from "react";
import { Box } from "../Box/Box";
import { TextInput, TextInputProps } from "../TextInput/TextInput";
import { Icon } from "../icon/Icon";

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

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