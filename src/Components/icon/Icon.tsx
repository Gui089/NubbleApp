import React from "react";
import { EyeOnIcon } from "../../assets/icons/EyeOnIcon";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";

interface Props {
    name: IconNames;
}

export function Icon({name} : Props) {
    
    const IconSvg = iconRegistry[name];

    return (
        <IconSvg />
    )
}

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon
}

type IconType = typeof iconRegistry;

type IconNames = keyof IconType;