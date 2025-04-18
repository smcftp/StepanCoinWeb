export default function Achievements() {
    return (
        <section className="flex flex-col gap-3 p-6 xs:px-[58px] lg:px-[116px] lg:py-[58px]">
            <h2>Достижения за <span className="text-orange">два дня</span></h2>
            <div className="border-2 border-sulu rounded-15 xs:rounded-[30px] px-5 py-25px md:px-10 md:py-[35px]
             flex flex-col gap-[5px] text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
                <ul className="ul-short-gap ">
                    <li>Имеем 800 холдеров $AGENTPI</li>
                    <li>ТОП 1 на DexScreen</li>
                    <li>Зарейдили СНГ и США стримеров</li>
                    <li>Сожгли 60 миллионов токенов</li>
                    <li>Создали NFT-коллекцию</li>
                    <li>Заблокировали 250М токенов + 13М заблокировано холдерами</li>
                    <li>Сделали бота-помощника для покупки нашего токена</li>
                    <li>Сделали бота с актуальным курсом $AGENTPI</li>
                    <li>Начали делать игру в WebApp</li>
                </ul>
                <span>...а также верфицировали токен за <span className="text-sulu">4 дня!</span></span>
            </div>
        </section>
    )
}