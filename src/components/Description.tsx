import Link from "next/link";

export default function Description() {
    return (
        <section className="p-6 xs:px-[58px] lg:px-[116px] lg:py-[58px] xl:px-[220px] flex flex-col gap-1.5 xs:gap-6">
            <div className="py-8 xs:py-4 sm:py-14 md:py-[50px] lg:py-4 content-center
             text-[13px] xs:text-xl md:text-[32px] lg:text-[40px] 
             leading-4 xs:leading-7 md:leading-[42px] lg:leading-[53px]
             ">
                <p className="font-medium">
                    <span className="text-sulu">STEPAN COIN</span> — это не просто крипта.
                </p>
                <span className="text-secondary">Это 
                    настоящая возможность войти в мир 
                    криптовалют без рисков, недопониманий
                    и страхов. Здесь все прозрачно: ты точно знаешь, кто стоит за проектом, куда идут
                    средства, и что будет дальше. Я делаю всё
                    максимально понятно без заумных слов и мутных схем.
                </span>
            </div>
            <Link href={'https://www.blum.io/ru'} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer"
                    className="rounded-15 border-3 border-sulu py-4 px-[30px] w-full xs:w-fit hover:bg-sulu
                    hover:shadow-btn transition-all duration-250 ease-out text-center text-sm xs:text-base mx-auto">
                    Купить токен на Blum
                </a>
            </Link>
        </section>
    )
}