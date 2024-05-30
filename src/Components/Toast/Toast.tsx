import { Box, BoxProps, Icon, Text } from "@Components"
import { Dimensions } from "react-native"


export const Toast = () => {
    return (
        <Box 
            top={100}
            {...$boxStyle}
            >
                <Icon color="success" name="checkRound"/>
            <Text  style={{flexShrink:1}} preset="paragraphMedium" bold ml="s16">
                Toast Component 
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
    maxWidth: Dimensions.get('screen').width = 250
} 