import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Box } from "../../Box/Box";
import { TextInput, TextInputProps } from "../../TextInput/TextInput";

export function FormTextInput<FormType extends FieldValues>(
    {
        control, 
        name, 
        rules, 
        ...textInputPros}: TextInputProps & UseControllerProps<FormType>){
    return (
        <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field, fieldState}) => (
                    <Box marginBottom="s24">
                    <TextInput
                        value={field.value} 
                        onChangeText={field.onChange}
                        errorMessage={fieldState.error?.message}
                        {...textInputPros}
                    />
                </Box>
                )}
            />
    )
}