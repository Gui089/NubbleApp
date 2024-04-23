import React from "react";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ThemeColors } from "../../theme/Theme";

export interface IconBase {
    size?:number;
    color?: string;
}

interface Props {
    name: IconNames;
    color?: ThemeColors;
    size?: number;
}

export function Icon({name, color = 'backgroundContrast', size} : Props) {
    const { colors } = useAppTheme();
    const IconSvg = iconRegistry[name];

    return (
        <IconSvg color={colors[color]} size={size}/>
    )
}

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon
}

type IconType = typeof iconRegistry;

type IconNames = keyof IconType;