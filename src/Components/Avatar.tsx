import Image, { ImageProps } from "next/image";


interface AvatarProps extends ImageProps {
    diretory?: string;
    size?: number;
}

export function Avatar({ diretory, size = 32, ...rest }: AvatarProps) {
    return (
        <>
            <Image 
                width={size}
                height={size}
                style={{
                    borderRadius: "100%",
                    width: size,
                    height: size,
                    objectFit: "cover"
                }}
                {...rest}
            />
        </>
    )
}