import { Avatar } from '@/Components/Avatar';
import { Nav } from '@/Components/Nav';
import Image from 'next/image';
import { House, PlusCircle, Bell, MessengerLogo, MagnifyingGlass, Compass, List, Heart, MonitorPlay } from 'phosphor-react';

import logoInstagram from "../../public/Instagram_logo.png";
import logoTipo from "../../public/logoInsta.png";
import reels from "../../public/Reels.svg";
import Home from './Home';
import { useEffect, useState } from 'react';

// import

export default function Index() {
  const [width, setWidth] = useState<number>(0);
  const svgReels = <svg aria-label="Reels" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="28" role="img" viewBox="0 0 24 24" width="28"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })

    return () => {
      window.removeEventListener('reize', () => null)
    }
  }, [])
  return (
    <div className='flex h-screen max-[767px]:flex-col-reverse'>
      <div className="flex flex-col justify-start bg-white h-full p-6 pb-5 pr-7 gap-3 border-r-[1px] border-gray-200 max-w-[335px] w-60 2xl:w-full max-[1239px]:w-fit max-[767px]:h-fit max-[767px]:flex-row max-[767px]:!max-w-full max-[767px]:w-full max-[767px]:p-0 max-[767px]:py-1 max-[767px]:border-l-0 max-[767px]:border-t-[1px]">
        <div className='pl-2 max-[767px]:hidden max-[767px]:invisible'>
          <Image 
            src={width >= 1225 ? logoInstagram : logoTipo}
            alt='Logo'
            width={width > 1239 ? 100 : 24}
            height={width > 1239 ? 100 : 24}
            className='my-2'
          />
        </div>

        <div className='max-[767px]:flex max-[767px]:w-full'>
          <Nav name="Página inicial" Icon={House}/>
          <Nav name="Buscar" Icon={MagnifyingGlass}/>
          <Nav name="Explorar" Icon={Compass} className='flex items-center gap-3 p-3 pl-2 my-1 outline-none w-full rounded-2xl hover:bg-zinc-50 max-[767px]:hidden max-[767px]:invisible'/>
          <Nav name="Reels" Icon={MonitorPlay}/>
          <Nav name="Mensagens" Icon={MessengerLogo}/>
          <Nav name="Notificações" Icon={Heart} className='flex items-center gap-3 p-3 pl-2 my-1 outline-none w-full rounded-2xl hover:bg-zinc-50 max-[767px]:hidden max-[767px]:invisible'/>
          <Nav name="Criar" Icon={PlusCircle} className='flex items-center gap-3 p-3 pl-2 my-1 outline-none w-full rounded-2xl hover:bg-zinc-50 max-[767px]:hidden max-[767px]:invisible'/>

          <div className='flex gap-3 items-center p-3 pl-2 max-[767px]:w-full max-[767px]:justify-center max-[767px]:p-0'>
            <Avatar 
              src='https://github.com/Skinzin.png'
              alt='Foto de'
              size={26}
            />
            <span className='max-[1239px]:hidden max-[1239px]:invisible'>Perfil</span>
          </div>
        </div>


        <Nav name="Mais" Icon={List} className='flex items-center gap-3 p-3 pl-2 my-1 outline-none w-full rounded-2xl hover:bg-zinc-50 mt-auto max-[767px]:invisible max-[767px]:hidden'/>
      </div>

      <Home />
    </div>
  )
}
