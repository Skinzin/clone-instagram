


interface MoreProps {
    _onClick?: () => void;
}

export function More({ _onClick }: MoreProps) {
    return (
        <>
            <div className="bg-zinc-800 bg-opacity-60 w-full h-full absolute top-0 right-0 z-[1]">
                <div className="flex items-center justify-center w-full h-full">
                    <ul className="flex flex-col justify-center max-w-md w-full bg-white rounded-xl">
                        <li className="text-center text-sm text-red-500 font-bold p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Denunciar</button>
                        </li>
                        <li className="text-center text-sm text-red-500 font-bold p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Deixar se seguir</button>
                        </li>
                        <li className="text-center text-sm p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Adicionar aos favoritos</button>
                        </li>
                        <li className="text-center text-sm p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Ir para a publicação</button>
                        </li>
                        <li className="text-center text-sm p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Compartilhar em</button>
                        </li>
                        <li className="text-center text-sm p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Copiar link</button>
                        </li>
                        <li className="text-center text-sm p-3 border-b-[1px] w-full">
                            <button onClick={_onClick}>Incorporar</button>
                        </li>
                        <li className="text-center text-sm p-3 w-full">
                            <button onClick={_onClick}>Cancelar</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}