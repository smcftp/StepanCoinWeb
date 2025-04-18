import Image from "next/image";

export default function Stickers() {
    return (
        <section className="h-[518px] sm:h-[616px]  w-full relative flex flex-col justify-center">
            <div className="h-[100px] xs:h-[187px] md:h-[334px] w-full rounded-full bg-sulu opacity-20 blur-[56px]"></div>
            <h2 className="text-[36px] xs:text-[48px] lg:text-[64px] leading-[48px] xs:leading-[64px] lg:leading-[85px]
             absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 xs:px-[116px]  w-full">
            Наш <span className="text-sulu">стикерпак</span> уже доступен в Телеграме!
            </h2>
            <Image src='/sc_st_2.svg' alt="Sticker 1" width={140} height={140} className="absolute top-4 left-4 xs:scale-125 sm:scale-[2] sm:top-14 sm:left-20"/>
            <Image src='/sc_st_5.png' alt="Sticker 2" width={140} height={140} className="absolute top-4 right-4 xs:scale-125 sm:scale-[2] sm:top-14 sm:right-20"/>
            <Image src='/sc_st_6.png' alt="Sticker 3" width={140} height={140} className="absolute bottom-4 right-4 xs:scale-125 sm:scale-[2] sm:bottom-14 sm:right-20"/>
            <Image src='/sc_st_4.png' alt="Sticker 4" width={140} height={140} className="absolute bottom-4 left-4 xs:scale-125 sm:scale-[2] sm:bottom-14 sm:left-20"/>
        </section>
    )
}
