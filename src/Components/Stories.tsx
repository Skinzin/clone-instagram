import { Avatar } from "./Avatar";
import { PostProps, UserProps } from "./Post";


export interface StoriesProps extends UserProps{
    stories: {
        id: number;
        location?: string | null;
        _images: string;
        _liked?: boolean;
        _createdAt: string;
        _visualized: boolean
    }
}

export function Stories({ author, stories }: StoriesProps) {
    return (
        <>
            <div className="w-fit">
                <Avatar
                    src={author._avatar}
                    alt={`Foto de ${author.username}`}
                    size={56}
                    className="p-[2px] border-[1px] border-zinc-300 max-w-none object-cover"
                />
                <p className="text-ellipsis overflow-hidden max-w-[74px] text-xs text-center">{author.username}</p>
            </div>
        </>
    )
}