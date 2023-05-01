import { IconProps } from "phosphor-react";
import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    name: string | null
    icon?: React.FC<IconProps>
    elementIcon?: React.ReactNode
}

export default function Button({ name, icon: Icon, elementIcon, ...rest}: ButtonProps) {
    return (
        <button className="outline-none" {...rest}>
            {name}
            {Icon && <Icon size={22} /> }
            {elementIcon && elementIcon}
        </button>
    )
}