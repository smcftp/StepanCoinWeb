export default function Achievements() {
    return (
        <section className="flex flex-col gap-3 p-6 xs:px-[58px] lg:px-[116px] lg:py-[58px]">
            <h2>Достижения за <span className="text-orange font-bold">16 часов</span> — новый <span className="text-orange font-bold">ГЕМ</span></h2>
            <div className="border-2 border-sulu rounded-15 xs:rounded-[30px] px-5 py-25px md:px-10 md:py-[35px]
             flex flex-col gap-[5px] text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
                <ul className="ul-short-gap ">
                    <li>Имеем 280+ холдеров $STEPAN COIN</li>
                    <li>ТОП 10 на DexScreen</li>
                    {/* <li>Зарейдили СНГ и США стримеров</li> */}
                    {/* <li>Сожгли 60 миллионов токенов</li> */}
                    {/* <li>Создали NFT-коллекцию</li> */}
                    <li>Заблокировали 600М токенов</li>
                    {/* <li>Заблокировали 600М токенов девом + 13М заблокировано холдерами</li> */}
                    <li>Сделали бота-помощника для покупки нашего токена</li>
                    {/* <li>Сделали бота с актуальным курсом $AGENTPI</li> */}
                    <li>Создали мини-аппку STEPAN COIN</li>
                    {/* <li>Начали делать игру в WebApp</li> */}
                </ul>
                <span>...а также верефикация токена<span className="text-sulu font-bold"> уже в процессе</span></span>
            </div>
        </section>
    )
}
