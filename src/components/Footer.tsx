import Link from "next/link";

export default function Footer(){
    return (
        <footer className="py-[58px] px-6 flex flex-col gap-6 sm:py-6 sm:px-[58px] lg:py-[58px] lg:px-[116px]">
            <div className="flex flex-col gap-5 text-xs leading-3 xs:text-sm xs:leading-5">
                <p className="font-medium text-xl text-sulu xs:text-[40px]">STEPAN COIN</p>
                Этот сайт полностью юмористический и пародийный. Он не предназначен для реальных финансовых транзакций и не предназначен для введения в заблуждение или обмана. Все упомянутые услуги и продукты являются вымышленными и не существуют. Сайт создан исключительно в развлекательных и пародийных целях. Мы ничего не продаём и не предоставляем реальных финансовых услуг. Пожалуйста, относитесь к контенту с юмором и не воспринимайте его серьёзно. Спасибо за понимание!
            </div>
            <div className="flex flex-col gap-6 text-xs sm:text-base sm:gap-4 sm:flex-row-reverse sm:justify-between">
                <div className="flex gap-3 w-full sm:w-fit">
                    <Link href="https://t.me/+dVyZCdOh6KYwMjky" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">TELEGRAM</a>
                    </Link>
                    <Link href="https://www.twitch.tv/stepan_coin_official" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">TWITCH</a>
                    </Link>
                    {/* <Link href="https://x.com/AgentPi_OFF">X</Link> */}
                </div>
                <p className="whitespace-nowrap">© 2025 STEPAN COIN</p>
            </div>
        </footer>
    )
}