import { Box, BoxProps, Icon, IconProps, Text } from "@Components"
import { Toast, useToast } from "@services"
import { Dimensions } from "react-native";
import { ToastType, ToastPosition} from '@services';
import React from "react";

interface Props {
    toast: Toast;
}
export const ToastContent = ({toast}: Props) => {
    const position:ToastPosition = toast?.position || 'bottom';
    const type:ToastType = toast?.type || 'success';

    return (
        <Box 
            {...$boxStyle} style={[{[position]: 100}]}
            >
                <Icon {...mapTypeIcon[type]}/>
            <Text  style={{flexShrink:1}} preset="paragraphMedium" bold ml="s16">
                {toast?.message}
            </Text>
        </Box>
    )
}

const mapTypeIcon: Record<ToastType, IconProps> = {
    success: {
        color:'success',
        name:'checkRound'
    },
    error: {
        color:'error',
        name:'errorRound'
    }
}

const $boxStyle: BoxProps = {
    position:"absolute",
    backgroundColor:"background", 
    alignSelf:"center",
    flexDirection:"row",
    alignItems:"center",
    padding:"s16",
    borderRadius:"s16",
    opacity:0.95,
    bottom:100,
    maxWidth: Dimensions.get('screen').width * 0.9
} 