import Image from "next/image"
export default function PromoteImage({ url, fileName, alt, width, height }: any) {
    return (
        <Image src={url ?? `../../../public/${fileName}`} alt={alt} width={width} height={height} />
    )
}
