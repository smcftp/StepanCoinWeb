import Link from 'next/link';

export default function Achievements() {
    return (
        <section className="flex flex-col gap-3 p-6 xs:px-[58px] lg:px-[116px] lg:py-[58px]">
            <h2>Достижения за <span className="text-orange font-bold">16 часов</span> — новый <span className="text-orange font-bold">ГЕМ</span></h2>
            <div className="border-2 border-sulu rounded-15 xs:rounded-[30px] px-5 py-25px md:px-10 md:py-[35px]
             flex flex-col gap-[5px] text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
                <ul className="ul-short-gap ">
                    <li><span className="text-orange font-bold">200K+</span> капитализация за первые <span className="text-orange font-bold">3</span> часа </li>
                    <Link href="https://dexscreener.com/ton/eqdkwf6zxepdwa1_vkiqagnhckc9oyoq4vrutyxvu2rjjpu7" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                        <li>ТОП <span className="text-orange font-bold">10</span> на DexScreen</li>
                    </Link>
                    <li>Имеем <span className="text-orange font-bold">280+</span> холдеров $STEPAN COIN</li>
                    {/* <li>Зарейдили СНГ и США стримеров</li> */}
                    {/* <li>Сожгли 60 миллионов токенов</li> */}
                    {/* <li>Создали NFT-коллекцию</li> */}
                    <li>Заблокировали <span className="text-orange font-bold">600М</span> токенов</li>
                    {/* <li>Заблокировали 600М токенов девом + 13М заблокировано холдерами</li> */}
                    <Link href="https://t.me/stepancoin_helperbot" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                        <li>Сделали <span className="text-orange font-bold underline">бота-помощника</span> для покупки нашего токена</li>
                    </Link>
                    {/* <li>Сделали бота с актуальным курсом $AGENTPI</li> */}
                    <Link href="https://t.me/StepanCoinCheckInBot" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                        <li>Создали <span className="text-orange font-bold underline">мини-аппку</span> STEPAN COIN</li>
                    </Link>
                    {/* <li>Начали делать игру в WebApp</li> */}
                </ul>
                <span>...а также верефикация токена<span className="text-sulu font-bold"> уже в процессе</span></span>
            </div>
        </section>
    )
}
