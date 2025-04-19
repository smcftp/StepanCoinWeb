import EmblaDoubleCarousel from "./EmblaCarousel/EmblaDoubleCarousel";

const slides = [
    {
        name: "Stepan",
        role: 'CEO',
        link: "@STEPA4KEEN"
    },
]

export default function Team() {

    return (
        <section className="flex flex-col px-6 xs:px-[58px] lg:py-[58px] lg:px-[116px] gap-12">
            <div className="flex flex-col gap-3 items-center">
                <h2 className="text-center">Создатель проекта</h2>
                <div className="w-full flex justify-center">
                    <EmblaDoubleCarousel slides={slides} />
                </div>
            </div>
            {/* <div className="flex flex-col gap-3">
                <h2 className="text-start text-2xl">Активные участники</h2>
                <div>
                    <EmblaDoubleCarousel slides={slides} />
                </div>
            </div> */}
        </section>
    )
}
