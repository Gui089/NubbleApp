import React from "react";

import { IconProps } from "@Components";

import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export type RootStackParamList = {
    LoginScreen: undefined,
    SignUpScreen: undefined,
    SuccessScreen : {
        title: string,
        description: string,
        icon: Pick<IconProps, 'name' | 'color'>
    },
    ForgotPasswordScreen: {
        title: string,
        description: string,
        labelInput: string,
        placeholderInput: string
    },
    PostCommentScreen: {
        postId: number,
        postAuthorId: number
    }
}


export function Router() {

    const userAuthentic = true;

    return (
        <NavigationContainer>
                { userAuthentic ? (
                    <AppStack />
                ) : (
                    <AuthStack />
                    ) 
                }
        </NavigationContainer>
    )
}