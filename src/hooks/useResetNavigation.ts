import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../routes/Routes";


export const useResetNavigation = () => {
    const navigation = useNavigation();

    const resetNavigation = (params: RootStackParamList['SuccessScreen']) => {
        navigation.reset({
            index:1,
            routes:[
                {
                    name:'LoginScreen'
                },
                {
                    name:'SuccessScreen',
                    params,
                }
            ]
        })
    }

    return {resetNavigation};
}