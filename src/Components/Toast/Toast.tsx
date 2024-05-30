import { Box, BoxProps, Icon, Text } from "@Components"
import { useToast } from "@services"
import { useEffect } from "react";
import { Dimensions } from "react-native"


export const Toast = () => {

    const {toast, hiddenToast} = useToast();

    useEffect(() => {
        if(toast) {
            setTimeout(() => {
                hiddenToast();
            },2000)
        }
    },[toast, hiddenToast])

    if(!toast) {
        return null;
    }

    return (
        <Box 
            top={100}
            {...$boxStyle}
            >
                <Icon color="success" name="checkRound"/>
            <Text  style={{flexShrink:1}} preset="paragraphMedium" bold ml="s16">
                {toast.message}
            </Text>
        </Box>
    )
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
    maxWidth: Dimensions.get('screen').width * 0.9
} 