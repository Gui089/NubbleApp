import React from "react";

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import { 
    PasswordInput,
    PasswordInputProps,
    Box } from "@Components";

export function FormPasswordTextInput<FromPasswordType extends FieldValues>({
    control,
    name,
    rules,
    ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FromPasswordType>) {
    return (
        <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field, fieldState}) => (
                    <Box marginBottom='s20'>
                        <PasswordInput
                            errorMessage={fieldState.error?.message}
                            value={field.value}
                            onChangeText={field.onChange}
                            {...passwordInputProps}
                        />
                    </Box>
                )}
                /> 
    )
}