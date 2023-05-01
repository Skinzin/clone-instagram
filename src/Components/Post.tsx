import { FormEvent, useEffect, useState } from "react";
import { BookmarkSimple, ChatCircle, DotsThree, Heart, PaperPlaneTilt, Smiley, X } from "phosphor-react";
import Image from "next/image";
import moment from "moment";
import "moment/locale/pt-br";

import { Avatar } from "./Avatar";
import Button from "./Button";
import { Header } from "./HeaderPost";
import { ModalPost } from "./ModalPost";
import { More } from "./More";
import { Comment } from "./Comment";


export interface UserProps {
    author: { 
        id: number;
        nickname: string | null;
        username: string;
        _avatar: string;
    }
}

export interface CommentsProps extends UserProps {
    id: number;
    message: string;
    _createdAt: string;
}

export interface PostProps extends UserProps {
    location?: string | null;
    _images: string;
    _title: string | null;
    _following?: boolean;
    _liked?: boolean;
    _saved?:  boolean;
    _amountOfLikes: number;
    _comments: CommentsProps[];
    _createdAt: string;
}


export function Post({ author, location, _images, _title, _following, _liked, _saved, _amountOfLikes, _comments, _createdAt }: PostProps) {
    const [liked, setLiked] = useState<boolean>(false);
    const [amountLiked, setAmountLiked] = useState<number>(_amountOfLikes);
    const [saved, setSaved] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');
    const [listComments, setListComments] = useState<CommentsProps[]>(_comments);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

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

    function handleLiked() {
        setLiked(!liked);

        if(!liked) {
            setAmountLiked(amountLiked + 1);
        } else {
            setAmountLiked(amountLiked - 1);
        }
    }

    function handleSaved() {
        setSaved(!saved)
    }

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if(event.key == "Escape") {
                setShowModal(false);
                setShowMore(false);
            }
        }
        
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    
    }, [])

    return (
        <>
            {showMore && (<More _onClick={() => setShowMore(false)}/>)}
            {showModal && (
                <ModalPost
                    author={author}
                    _amountOfLikes={amountLiked}
                    _comments={listComments}
                    _createdAt={_createdAt}
                    _images={_images}
                    _title={_title}
                    _following={_following}
                    _liked={liked}
                    _saved={saved}
                    location={location}
                    _onClose={() => setShowModal(false)}
                    _onMore={() => setShowMore(true)}
                />
            )}
            <div className="max-[767px]:flex max-[767px]:justify-center">
                <div className="bg-white h-fit w-[420px] rounded-lg border-[1px] border-zinc-300 mt-4 max-[767px]:border-none">
                    <Header 
                        author={author}
                        location={location}
                        _onClick={() => setShowMore(true)}
                    />

                    <div>
                        <Image 
                            src={_images}
                            alt="Post"
                            width={420}
                            height={1}
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                maxHeight: "1350px"
                            }}
                            
                        />
                    </div>

                    <div className="pt-1 gap-2">
                        <div className="px-3 flex gap-2 pb-2">
                            <Button 
                                name={null}
                                elementIcon={<Heart size={26} color={liked ? "red" : "black"} weight={liked ? "fill" : "regular"}/>}
                                onClick={handleLiked}
                            />
                            <Button 
                                name={null}
                                elementIcon={<ChatCircle size={26}/>}
                                onClick={() => setShowModal(true)}
                            />
                            <Button 
                                name={null}
                                elementIcon={<PaperPlaneTilt size={26}/>}
                            />

                            <Button 
                                name={null}
                                elementIcon={<BookmarkSimple size={26} weight={saved ? "fill" : "regular"}/>}
                                className="ml-auto"
                                onClick={() => setSaved(!saved)}
                            />
                        </div>

                        <div className="px-3 mb-1">
                            {_amountOfLikes > 0 && <span className="text-sm font-semibold">{amountLiked} Curtidas</span>}
                        </div>
                        <div className="px-3">
                            {_title && (
                                <div className="flex items-center">
                                    <span className="font-semibold text-sm h-fit">{author.username}</span>
                                    <span className="font-normal text-sm">&nbsp;</span>
                                    <span className="text-ellipsis overflow-hidden whitespace-nowrap text-justify">{_title}</span>
                                </div>
                            )}

                            {listComments.length > 0 && (
                                <button onClick={() => setShowModal(true)}>
                                    <span className="text-sm text-zinc-500">{listComments.length == 1 ? `Ver ${listComments.length} comentário.` : `Ver todos os ${listComments.length} comentários.`}</span>
                                </button>
                            )}

                            <div>
                                <span className="text-zinc-500 text-xs">{moment(_createdAt).startOf('hour').fromNow().toLocaleUpperCase()}</span>
                            </div>
                        </div>
                        <form method="POST" onSubmit={handleSubmit} className="flex items-center border-t-[1px] border-zinc-300 w-full m-0 px-4 py-1">
                            <Comment 
                                value={comment}
                                onChange={(m) => setComment(m.currentTarget.value)}
                                _hasComment={comment ? true : false}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}