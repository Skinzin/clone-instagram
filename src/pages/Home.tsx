import Image from "next/image";
import { useEffect, useState } from "react";

import { Avatar } from "@/Components/Avatar";
import { Post } from "@/Components/Post";
import { Stories } from "@/Components/Stories";
import users from "../../api/users.json";
import logoInstagram from "../../public/Instagram_logo.png";
import { Nav } from "@/Components/Nav";
import { Heart, PlusCircle } from "phosphor-react";

export function Home() {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
          setWidth(window.innerWidth);
        })
    
        return () => {
          window.removeEventListener('reize', () => null)
        }
    }, [])
    return (
        <>
            <div className="flex justify-center overflow-auto w-full max-[767px]:block">
                <header className="hidden invisible max-[767px]:visible max-[767px]:flex max-[767px]:bg-white max-[767px]:justify-between max-[767px]:px-4 max-[767px]:border-b-[1px] max-[767px]:border-zinc-300">
                    <Image 
                        src={logoInstagram}
                        alt='Logo'
                        width={100}
                        height={100}
                        className='my-0'
                    />

                    <div className="flex gap-3">
                        <Nav 
                            name="Criar"
                            Icon={PlusCircle}
                            
                        />
                        <Nav 
                            name="Notificação"
                            Icon={Heart}
                        />
                    </div>
                </header>
                <div>
                    <div className="flex overflow-auto gap-4 mx-auto mt-6 bg-white w-[420px] rounded-lg border-[1px] border-zinc-300 p-4 max-[767px]:bg-transparent max-[767px]:border-none max-[767px]:w-full max-[767px]:m-0">
                        {users.map(user => {
                            return user.stories?.map(storie => {
                                return (
                                    <Stories
                                        author={user.author}
                                        stories={storie}
                                        key={storie.id}
                                    />
                                )
                            })
                        })}
                    </div>
                    <div className='flex flex-col justify-center max-[767px]:bg-white max-[767px]:border-t-[1px] max-[767px]:border-zinc-300'>
                        {users.map(user => {
                            return user.posts.map(({_images, _title, _amountOfLikes, _comments }, i) => {
                                return <Post 
                                key={i}
                                author={user.author}
                                _images={_images}
                                _title={_title}
                                _createdAt={"2023-04-22T17:55:17.000Z"}
                                _amountOfLikes={_amountOfLikes}
                                _comments={_comments}
                            />
                            })
                        })}
                    </div>
                </div>
                <div className="ml-8 pt-8 max-w-xs w-full max-[999px]:hidden">
                    <div className="flex items-center my-4">
                        <Avatar
                            src="https://github.com/Skinzin.png"
                            alt="Imagem de Skinzin"
                            size={56}
                            className="mr-4"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">skinzin</span>
                            <span className="text-zinc-500">Vinicius Costa</span>
                        </div>
                        <button className="ml-auto text-sky-500 font-semibold text-xs">Mudar</button>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex mb-4">
                            <span className="text-zinc-500 font-semibold text-sm">Sugestões para você</span>
                            <button className="ml-auto text-xs font-semibold">Ver tudo</button>
                        </div>

                        <div className="flex items-center my-1">
                            <Avatar 
                                src="https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/2fbbdcb50ff8388ec2c6723c6385fb84_4490115586020920921.png"
                                alt="Imagem de Yanqing"
                                size={32}
                                className="mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Yanqinq</span>
                                <span className="text-zinc-500 text-sm">Seguido(a) por natashaoficial</span>
                            </div>
                            <button className="ml-auto text-sky-500 font-semibold text-xs">Mudar</button>
                        </div>
                        <div className="flex items-center my-1">
                            <Avatar 
                                src="https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/9c766b0feb6256141c1ec7afcd3dff35_6990891585355987615.png"
                                alt="Imagem de Bailu"
                                size={32}
                                className="mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Bailu</span>
                                <span className="text-zinc-500 text-sm">Seguido(a) por natashaoficial</span>
                            </div>
                            <button className="ml-auto text-sky-500 font-semibold text-xs">Mudar</button>
                        </div>
                        <div className="flex items-center my-1">
                            <Avatar 
                                src="https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/34ed53d517bff61c71243b3ef9985a2a_9011443874790929649.png"
                                alt="Imagem de Sunshang"
                                size={32}
                                className="mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Yanqinq</span>
                                <span className="text-zinc-500 text-sm">Seguido(a) por 7demarco</span>
                            </div>
                            <button className="ml-auto text-sky-500 font-semibold text-xs">Mudar</button>
                        </div>
                        <div className="flex items-center my-1">
                            <Avatar 
                                src="https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/22823e36686017767fa0310dd44d2eb4_115117260001571580.png"
                                alt="Imagem de Hook"
                                size={32}
                                className="mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Hook</span>
                                <span className="text-zinc-500 text-sm">Seguido(a) por natashaoficial</span>
                            </div>
                            <button className="ml-auto text-sky-500 font-semibold text-xs">Mudar</button>
                        </div>
                        <div className="flex items-center my-1">
                            <Avatar 
                                src="https://upload-static.hoyoverse.com/hoyowiki/2023/02/21/36ac7d1e87145434d0617a511066a3db_1713347165320581354.png"
                                alt="Imagem de Clara"
                                size={32}
                                className="mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Clara</span>
                                <span className="text-zinc-500 text-sm">Seguido(a) por natashaoficial</span>
                            </div>
                            <button className="ml-auto text-sky-500 font-semibold text-xs">Mudar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

