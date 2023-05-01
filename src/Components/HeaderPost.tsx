import { DotsThree } from "phosphor-react";

import { Avatar } from "./Avatar";
import { UserProps  } from "./Post";


interface HeaderProps extends UserProps {
    location?: string | null;
    size?: number;
    _onClick?: () => void;
}

export function Header({ author, location, size = 32, _onClick }: HeaderProps) {
    return (
        <header className="flex items-center gap-3 px-3 p-2 border-b-[1px] border-zinc-300">
            <Avatar
                src={author._avatar}
                alt={`Foto de ${author.username}`}
                size={size}
            />

            <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold">{author.username}</span>
                {location && <span className="text-sm font-normal">{location}</span>}
            </div>

            <button className="outline-none ml-auto" onClick={_onClick}>
                <DotsThree 
                    weight="bold"
                />
            </button>
        </header>
    )
}