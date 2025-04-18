import Image from "next/image";
import { Fragment } from "react";

export default function Markets() {
    return (
        <div className="py-[58px] px-6 flex flex-col gap-6">
            <h2 className="text-[36px] xs:text-[48px] lg:text-[64px] leading-[48px] xs:leading-[64px] lg:leading-[85px]">Биржи на которых мы есть</h2>
            <div className="w-full overflow-hidden whitespace-nowrap relative">
                <div className="flex animate-scroll [&>img]:h-[26px] [&>img]:w-auto [&>img]:mr-3">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <Fragment key={`market-${index}`} >
                            <Image src='/okx.webp' alt="OKX" width={854} height={256} />
                            <Image src='/blum.webp' alt="Blum" width={226} height={170} />
                            <Image src='/stonfi.webp' alt="Stonfi" width={283} height={64} />
                            <Image src='/dexscreener.webp' alt="DexScreener" width={300} height={300} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}