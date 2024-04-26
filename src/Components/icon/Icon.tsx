import React from "react";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ThemeColors } from "../../theme/Theme";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import { BellIcon } from "../../assets/icons/BellIcon";
import { BellOnIcon } from "../../assets/icons/BelllOnIcon";
import { BookmarkFillIcon } from "../../assets/icons/BookmarkFillIcon";
import { BookmarkIcon } from "../../assets/icons/BookmarkIcon";
import { CameraIcon } from "../../assets/icons/CameraIcon";
import { ChatIcon } from "../../assets/icons/ChatIcon";
import { ChatOnIcon } from "../../assets/icons/ChatOnIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import { ChevronRightIcon } from "../../assets/icons/ChevronRightIcon";
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { FlashOffIcon } from "../../assets/icons/FlashOffIcon";
import { FlashOnIcon } from "../../assets/icons/FlashOnIcon";
import { HeartFillIcon } from "../../assets/icons/HeartFillIcon";
import { HeartIcon } from "../../assets/icons/HeartIcon";
import { HomeFillIcon } from "../../assets/icons/HomeFillIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { MessageIcon } from "../../assets/icons/MessageIcon";
import { NewPostIcon } from "../../assets/icons/NewPostIcon";
import { ProfileFillIcon } from "../../assets/icons/ProfileFillIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { Pressable } from "react-native";

export interface IconBase {
    size?:number;
    color?: string;
}

interface Props {
    name: IconNames;
    color?: ThemeColors;
    size?: number;
    onPress?: () => void;
}

export function Icon({name, color = 'backgroundContrast', size, onPress} : Props) {
    const { colors } = useAppTheme();
    const IconSvg = iconRegistry[name];

    if(onPress) {
        return (
            <Pressable hitSlop={10} onPress={onPress}>
                <IconSvg color={colors[color]} size={size}/>
            </Pressable>
        )
    }


    return (
        <IconSvg color={colors[color]} size={size}/>
    )
}

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon,
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,
    bellIcon: BellIcon,
    bellOn: BellOnIcon,
    bookMarkFill: BookmarkFillIcon,
    bookMark: BookmarkIcon,
    camera: CameraIcon,
    chat: ChatIcon,
    chatOn: ChatOnIcon,
    check: CheckIcon,
    chevron: ChevronRightIcon,
    comment: CommentIcon,
    flashOff: FlashOffIcon,
    flashOn: FlashOnIcon,
    heartFill: HeartFillIcon,
    heat: HeartIcon,
    homeFill: HomeFillIcon,
    home: HomeIcon,
    message: MessageIcon,
    newPost: NewPostIcon,
    profileFill: ProfileFillIcon,
    profile: ProfileIcon,
    search: SearchIcon,
    settings: SettingsIcon,
    trash: TrashIcon
}

type IconType = typeof iconRegistry;

type IconNames = keyof IconType;