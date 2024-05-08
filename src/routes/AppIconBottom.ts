import { IconProps } from "@Components";
import { AppTabBottomTabParams } from "@routes";


export const AppIconBottom: Record<keyof AppTabBottomTabParams, {
    label: string;
    icon: {
        focused: IconProps['name'],
        onFocused: IconProps['name']
    };
}> = {
    HomeScreen: {
        label:'Início',
        icon: {
            focused: 'homeFill',
            onFocused: 'home'
        },
    },
    NewPostScreen: {
        label: 'Novo post',
        icon:{
            focused: 'newPost',
            onFocused:'newPost'
        },
    },
    FavoriteScreen: {
        label: 'Favoritos',
        icon:{
            focused: 'bookMarkFill',
            onFocused: 'bookMark'
        },
    },
    MyProfileScreen: {
        label: 'Meu perfil',
        icon:{
            focused: 'profileFill',
            onFocused: 'profile'
        }
    }
}