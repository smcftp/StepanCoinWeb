import Image from "next/image";
import Link from "next/link";

export default function SocNetCard({src, alt, href}: {src: string, alt: string, href: string}) {
    return (
        <Link 
            href={href} 
            className="rounded-[11px] flex px-2.5 gap-2 items-center aspect-96/37
            min-w-[96px] xs:min-w-[100px] sm:min-w-[204px] lg:min-w-[272px] sm:px-5  bg-no-repeat 
            text-[9px] leading-3 sm:text-lg sm:leading-6 md:text-2xl md:leading-8 border-2 border-sulu"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image className="sm:w-12 sm:h-12 md:w-16 md:h-16" src={src} alt={alt} width={24} height={24} />
            {alt}
        </Link>
    )
}