import clsx from "clsx"
import Image from "next/image"

type Props = {
    inverted?: boolean
    role: string
    wallet: string
    amount: number
}


function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

export default function WalletCard({ inverted, role, wallet, amount }: Props) {

    return (
        <div className={clsx("rounded-3xl py-[19px] px-10 sm:py-6 sm:px-[56px] md:rounded-[48px] md:px-[35px] lg:px-[49px] border-2 flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[13px]", 
        inverted ? 'border-orange' : 'border-sulu')}>
            <div className={clsx("rounded-[26px] py-[7px] px-[15px] text-[15px] bg-[#1FA49F0D] w-fit sm:text-xl lg:text-2xl ",
                'text-sulu')}>
                {role}
            </div>
            <p className={clsx("overflow-hidden text-ellipsis whitespace-nowrap text-[15px] sm:text-xl lg:text-2xl font-medium",
                inverted ? "text-sulu" : 'text-orange'
            )}>{wallet}</p>
            <div className="flex gap-[7px] items-end">
                <Image src={inverted ? "/bullet.svg" : '/bullet2.svg'} alt="Tokens" className="sm:w-12 sm:h-12" width={27} height={27}/>   
                <p className="text-xl sm:text-[32px] lg:text-[36px] font-medium leading-[27px] sm:leading-[43px] lg:leading-[48px]">{formatNumber(amount)}</p>
                <span className={clsx("text-sm sm:text-base lg:text-xl font-medium leading-[19px] sm:leading-[21px] lg:leading-[27px]",'text-sulu')}>tokens</span> 
            </div>
        </div>
    )
}