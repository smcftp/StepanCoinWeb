import Spline from "@splinetool/react-spline";
import Image from 'next/image';

export default function SplineScene() {
    return (
        <div className="h-screen w-screen pointer-events-none relative">
            {/* Главный контейнер с адаптивным позиционированием */}
            <div className="absolute 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                md:top-[40%] md:-translate-y-[40%] 
                lg:top-[25%] lg:-translate-y-[25%] 
                xl:top-[25%] xl:-translate-y-[25%] 
                flex flex-col gap-1 text-center w-full items-center">
                
                {/* Первое SVG изображение (правый верхний угол) */}
                <div className="absolute 
                    right-[2vw] top-[-8vh]
                    xs:right-[4vw] xs:top-[-10vh]
                    sm:right-[6vw] sm:top-[-20vh]
                    md:right-[10vw] md:top-[-22vh]
                    lg:right-[15vw] lg:top-[-15vh]
                    xl:right-[20vw] xl:top-[-15vh]
                    z-0">
                    <Image
                        src="/Rectangle (4).svg"
                        alt="Rectangle 4 Icon"
                        width={600}
                        height={600}
                        className="w-[32vw] h-[32vw] 
                        xs:w-[30vw] xs:h-[30vw] 
                        sm:w-[35vw] sm:h-[35vw] 
                        md:w-[32vw] md:h-[32vw] 
                        lg:w-[22vw] lg:h-[22vw] 
                        max-w-[550px] min-w-[160px]"
                    />
                </div>
                
                {/* Второе SVG изображение (левый нижний угол) */}
                <div className="absolute
                    left-[2vw] bottom-[-8vh]
                    xs:left-[4vw] xs:bottom-[-10vh]
                    sm:left-[6vw] sm:bottom-[-20vh]
                    md:left-[8vw] md:bottom-[-22vh]
                    lg:left-[10vw] lg:bottom-[-15vh]
                    xl:left-[12vw] xl:bottom-[-15vh]
                    z-0">
                    <Image
                        src="/Rectangle (3).svg"
                        alt="Rectangle 3 Icon"
                        width={400}
                        height={400}
                        className="w-[28vw] h-[28vw] 
                        xs:w-[25vw] xs:h-[25vw] 
                        sm:w-[30vw] sm:h-[30vw] 
                        md:w-[28vw] md:h-[28vw] 
                        lg:w-[18vw] lg:h-[18vw] 
                        max-w-[450px] min-w-[120px]"
                    />
                </div>
                
                {/* Надпись */}
                <div className="relative z-10">
                    <p className="text-[7px] xs:text-xs sm:text-base font-medium">
                        КОМФОРТНЫЙ КРИПТОСТАРТ С STEPAN COIN & BLUM:<br className="xs:hidden" /> ТВОЙ ЛЕГКИЙ ВХОД В МИР БУДУЩЕГО!
                    </p>
                    <h1 className="flex flex-col h-[170px] xs:text-[130px] sm:text-[170px] text-[#F36520] leading-none font-extrabold">
                        <span>STEPAN</span>
                        <span>COIN</span>
                    </h1>
                </div>
            </div>
            
            {/* Скролл-индикатор в нижней части экрана */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <Image
                    src="/SCROLL.svg"
                    alt="Scroll Icon"
                    width={20}
                    height={40}
                    className="w-[20px] h-[40px] xs:w-[25px] xs:h-[50px] sm:w-[30px] sm:h-[60px]"
                />
                <p className="text-[10px] xs:text-[12px] sm:text-[14px] font-medium tracking-widest mt-2">
                    СКРОЛЛ
                </p>
            </div>
            
            {/* <Spline
                scene="https://prod.spline.design/fvRNms5EppbFr72U/scene.splinecode"
            /> */}
        </div>
    )
}