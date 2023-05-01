import Image from "next/image";
import { X } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";

import { Header } from "./HeaderPost";
import { CommentsProps, Post, PostProps } from "./Post";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface ModalProps extends PostProps {
    _onClose?: () => void;
    _onMore?: () => void;
}

export function ModalPost({ author, location, _images, _title, _following, _liked, _saved, _amountOfLikes, _comments, _createdAt, _onClose, _onMore}: ModalProps) {
    const [liked, setLiked] = useState<boolean>(_liked || false);
    const [amountLiked, setAmountLiked] = useState<number>(_amountOfLikes);
    const [saved, setSaved] = useState<boolean>(_saved || false);
    const [comment, setComment] = useState<string>('');
    const [listComments, setListComments] = useState<CommentsProps[]>(_comments);


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(listComments)

        setListComments([...listComments, {
            id: listComments.length + 1,
            message: comment,
            author: {
                id: 1,
                nickname: "Skinzin",
                username: "Vinicius Costa",
                _avatar: "https://github.com/Skinzin.png",
            },
            _createdAt: String(moment())
        }])
        setComment('')
    } 

    return (
        <>
            <div className="bg-zinc-800 bg-opacity-60 w-full h-full absolute top-0 right-0" >
                <div className="flex items-center justify-center relative w-full h-full" >
                    <button onClick={_onClose} className="absolute top-2 right-6 p-2 outline-none">
                        <X size={24} color="white" weight="bold"/>
                    </button>

                    <div className="flex content-center mx-auto bg-white max-w-[calc(100% - 128px)] h-fit ">
                        <div className="flex content-center bg-black h-full max-h-[450px]">
                            <Image 
                                src={_images}
                                alt="Post"
                                width={420}
                                height={1}
                                style={{
                                    width: "100%",
                                    objectFit: "contain",
                                    maxHeight: "1350px"
                                }}
                            />
                        </div>
                        <div className="flex flex-col max-w-lg w-full h-auto">
                            <Header
                                author={author} 
                                _onClick={_onMore}
                            />

                            <div className="flex items-center gap-3 px-3 py-2 pb-4">
                                <Avatar 
                                    src={author._avatar}
                                    alt={`Foto de ${author.nickname}`}
                                />

                                <div className="flex flex-col justify-between relative">
                                    {_title && (
                                        <div className="flex items-start">
                                            <span className="font-semibold text-sm">{author.username}</span>
                                            <span className="font-normal text-sm">&nbsp;</span>
                                            <span className="text-sm">{_title}</span>
                                        </div>
                                    )}

                                    <span className="text-zinc-500 text-[10px]">{moment(_createdAt).fromNow().toLocaleUpperCase()}</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                {listComments.length > 0 && listComments.map(({author, message, _createdAt}, i) => {
                                    return(
                                        <div className="flex items-center gap-3 px-3  pb-4" key={i}>
                                            <Avatar 
                                                src={author._avatar}
                                                alt={`Foto de ${author.nickname}`}
                                                className="p-[2px] border-[1px] border-zinc-300"
                                            />

                                            <div className="flex flex-col justify-between relative">
                                                {_title && (
                                                    <div className="flex items-start">
                                                        <span className="font-semibold text-sm">{author.nickname}</span>
                                                        <span className="font-normal text-sm">&nbsp;</span>
                                                        <span className="text-sm">{message}</span>
                                                    </div>
                                                )}

                                                <span className="text-zinc-500 text-[10px]">{moment(_createdAt).fromNow().toLocaleUpperCase()}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                                <form method="POST" onSubmit={handleSubmit} className="flex items-center mt-auto border-t-[1px] border-zinc-300 w-full m-0 px-4 py-1">
                                    <Comment 
                                        value={comment}
                                        onChange={(m) => setComment(m.currentTarget.value)}
                                        _hasComment={comment ? true : false}
                                    />
                                </form>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}