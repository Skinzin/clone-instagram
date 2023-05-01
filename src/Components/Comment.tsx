import { Smiley } from "phosphor-react";
import { HTMLProps } from "react";


interface CommentProps extends HTMLProps<HTMLTextAreaElement> {
    _hasComment?: boolean;
}

export function Comment({ _hasComment, ...rest }: CommentProps) {
    return (
        <>
            <button type="button" className="py-1 pr-3">
                <Smiley size={24} />
            </button>

            <textarea
                placeholder="Adicionar um comentário..."
                className="w-full outline-none resize-none text-sm"
                
                {...rest}
            />

            <button>
                <span className={`${_hasComment ? "text-sky-600" : "text-sky-200"} text-sm font-semibold`}>Publicar</span>
            </button>
        </>
    )
}