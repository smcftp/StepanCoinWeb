import EmblaDoubleCarousel from "./EmblaCarousel/EmblaDoubleCarousel";

const slides = [
    {
        name: "Alex Tsvirko",
        role: 'CEO',
        link: "@AIex_Ads"
    },
    {
        name: "Ivan Tikhonov",
        role: 'Web-Developer',
        link: "@yunhurts"
    },
    {
        name: "Ilya Kazhdan",
        role: 'Moderator',
        link: "@ninekmmrtvar"
    },
    {
        name: "Egor Kostenko",
        role: 'Moderator',
        link: "@eg_boch"
    },
]

export default function Team() {

    return (
        <section className="flex flex-col px-6 xs:px-[58px] lg:py-[58px] lg:px-[116px] gap-12">
            <div className="flex flex-col gap-3">
                <h3 className="text-start">Наша команда</h3>
                <div>
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