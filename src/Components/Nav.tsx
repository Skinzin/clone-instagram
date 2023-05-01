import { IconProps } from "phosphor-react";
import { HTMLAttributes, useEffect, useState } from "react"

import Image from "next/image";
import { useRouter } from "next/router";

interface NavProps extends HTMLAttributes<HTMLButtonElement> {
    name: string;
    Icon?: React.FC<IconProps>;
    src?: string;
}

export function Nav({ name, Icon, src, ...rest }: NavProps) {
    const [width, setWidth] = useState<number>(0);
    const [current, setCurrent] = useState<boolean>(false);
    const router = useRouter();


    useEffect(() => {
        window.addEventListener('resize', () => {
          setWidth(window.innerWidth);
        })
    
        return () => {
          window.removeEventListener('reize', () => null)
        }
    }, [])

    return (
        <button className="flex items-center gap-3 p-3 pl-2 my-1 outline-none w-full rounded-2xl hover:bg-zinc-50 max-[767px]:justify-center max-[767px]:p-0 " {...rest} onClick={(e) => {e.preventDefault(); router.push("oi")}}>
            {Icon && <Icon size={width <= 767 ? 24 : 28} />}
            {src && <Image src={src} alt="emoji" />}
            <span className="max-[1239px]:hidden max-[1239px]:invisible">{name}</span>
        </button>
    )
}