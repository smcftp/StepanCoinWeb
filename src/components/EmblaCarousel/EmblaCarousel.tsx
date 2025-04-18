'use client'

import React, { useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'
import styles from './embla.module.css'
import clsx from 'clsx'
import Image from 'next/image'

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    // Настройка зацикленной карусели
    const carouselOptions = { ...options, loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions)
    
    // Реф для контейнера карусели
    const carouselContainerRef = useRef<HTMLDivElement>(null)

    // Хук для управления индикаторами (точками) навигации
    const { selectedIndex } =
        useDotButton(emblaApi)

    // Хук для управления кнопками навигации (стрелками)
    const {
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        // Основной контейнер карусели
        <div className='relative px-6' ref={carouselContainerRef}>
            {/* КНОПКИ НАВИГАЦИИ: точно выровненные по центру контейнера и смещены вниз */}
            <div className='absolute left-0 right-0 top-0 bottom-0 pointer-events-none'>
                <div className='relative w-full h-full'>
                    {/* Левая кнопка выровнена по центру контейнера и опущена вниз */}
                    <button className='absolute top-1/2 left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 z-30 pointer-events-auto 
                                      translate-y-[-2px] xs:translate-y-[-3px] sm:translate-y-[-4px] md:translate-y-[-5px] lg:translate-y-[-6px]'>
                        <Image 
                            className='w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' 
                            width={40} 
                            height={40} 
                            src="/arrow.svg" 
                            alt='Arrow left'
                            onClick={onPrevButtonClick} 
                        />
                    </button>
                    
                    {/* Правая кнопка выровнена по центру контейнера и опущена вниз */}
                    <button className='absolute top-1/2 right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 z-30 pointer-events-auto
                                      translate-y-[-2px] xs:translate-y-[-3px] sm:translate-y-[-4px] md:translate-y-[-5px] lg:translate-y-[-6px]'>
                        <Image 
                            className='w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rotate-180' 
                            width={40} 
                            height={40} 
                            src="/arrow.svg" 
                            alt='Arrow right'
                            onClick={onNextButtonClick} 
                        />
                    </button>
                </div>
            </div>

            {/* КОНТЕЙНЕР ЗНАЧКОВ ПРОГРЕССА */}
            <div className='flex gap-0.5 items-center mx-auto w-fit mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6'>
                {/* SVG значки для всех слайдов, кроме последнего */}
                {slides.slice(0,-1).map((_, index) => (
                    <svg className='w-4 h-3 xs:w-5 xs:h-4 sm:w-[41px] sm:h-[23px] md:w-[45px] md:h-[25px] lg:w-[50px] lg:h-7' key={`prg-${index}`} width="23" height="13" viewBox="0 0 23 13" fill="none">
                        {/* Элемент SVG, меняющий цвет в зависимости от текущего слайда */}
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.65943 0.600098C6.13888 0.600098 6.52756 0.988775 6.52756 1.46823V5.17322L9.73613 3.3207C10.1513 3.08097 10.6823 3.22323 10.922 3.63845C11.1618 4.05366 11.0195 4.58461 10.6043 4.82434L7.39561 6.67692L10.6043 8.52951C11.0195 8.76924 11.1618 9.30018 10.922 9.7154C10.6823 10.1306 10.1513 10.2729 9.73613 10.0331L6.52756 8.18063V11.8858C6.52756 12.3653 6.13888 12.754 5.65943 12.754C5.17997 12.754 4.79129 12.3653 4.79129 11.8858V8.18057L1.58263 10.0331C1.16741 10.2729 0.636466 10.1306 0.396732 9.7154C0.156998 9.30018 0.299257 8.76924 0.714476 8.52951L3.92315 6.67692L0.714476 4.82434C0.299257 4.58461 0.156998 4.05366 0.396732 3.63845C0.636466 3.22323 1.16741 3.08097 1.58263 3.3207L4.79129 5.17328V1.46823C4.79129 0.988775 5.17997 0.600098 5.65943 0.600098Z" fill={selectedIndex + 1 > index ? '#F36520' : '#424242'} />
                        <path d="M13.209 6.677H21.8903" stroke={selectedIndex + 1 > index ? '#F36520' : '#424242'} strokeWidth="1.3022" strokeLinecap="round" />
                    </svg>
                ))}
                {/* SVG значок для последнего слайда */}
                <svg className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.12085 0.600098C6.60031 0.600098 6.98899 0.988775 6.98899 1.46823V5.17322L10.1976 3.3207C10.6128 3.08097 11.1437 3.22323 11.3834 3.63845C11.6232 4.05366 11.4809 4.58461 11.0657 4.82434L7.85703 6.67692L11.0657 8.52951C11.4809 8.76924 11.6232 9.30018 11.3834 9.7154C11.1437 10.1306 10.6128 10.2729 10.1976 10.0331L6.98899 8.18063V11.8858C6.98899 12.3653 6.60031 12.754 6.12085 12.754C5.64139 12.754 5.25272 12.3653 5.25272 11.8858V8.18057L2.04405 10.0331C1.62884 10.2729 1.09789 10.1306 0.858158 9.7154C0.618424 9.30018 0.760683 8.76924 1.1759 8.52951L4.38457 6.67692L1.1759 4.82434C0.760683 4.58461 0.618424 4.05366 0.858158 3.63845C1.09789 3.22323 1.62884 3.08097 2.04405 3.3207L5.25272 5.17328V1.46823C5.25272 0.988775 5.64139 0.600098 6.12085 0.600098Z" fill={selectedIndex + 1 === slides.length ? '#F36520' : '#424242'} />
                </svg>
            </div>

            {/* ГЛАВНЫЙ КОНТЕЙНЕР КАРУСЕЛИ */}
            <div className={styles.embla}>
                {/* Область просмотра карусели - здесь происходит скроллинг */}
                <div className={styles.embla__viewport} ref={emblaRef}>
                    {/* Контейнер слайдов - здесь происходит анимация перемещения */}
                    <div className={styles.embla__container}>
                        {/* Маппинг по слайдам и создание элемента для каждого слайда */}
                        {slides.map((str, index) => (
                            <div className={styles.embla__slide} key={`slide-${index}`}>
                                {/* КОНТЕЙНЕР ТЕКСТА СЛАЙДА - УЛУЧШЕННАЯ АДАПТИВНОСТЬ */}
                                <div className={clsx(styles.embla__slide__number, 
                                    /* Базовые стили для всех устройств */
                                    'rounded-[18px] border border-sulu overflow-hidden text-center flex items-center justify-center',
                                    
                                    /* Автоматическое масштабирование текста */
                                    'text-[10px] xs:text-[12px] sm:text-[16px] md:text-[22px] lg:text-[28px] xl:text-[32px]',
                                    'leading-tight xs:leading-snug sm:leading-normal md:leading-relaxed lg:leading-relaxed',
                                    
                                    /* Адаптивные отступы для разных экранов */
                                    'py-2 px-3 xs:py-3 xs:px-4 sm:py-4 sm:px-6 md:py-5 md:px-8 lg:py-6 lg:px-10',
                                    'xs:border-2',
                                    
                                    /* Адаптивное скругление углов */
                                    'rounded-[18px] xs:rounded-[25px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[48px]',
                                    
                                    /* Адаптивная минимальная высота и ширина */
                                    'min-h-[40px] min-w-[140px]',
                                    'xs:min-h-[60px] xs:min-w-[180px]',
                                    'sm:min-h-[80px] sm:min-w-[250px]',
                                    'md:min-h-[100px] md:min-w-[350px]',
                                    'lg:min-h-[120px] lg:min-w-[450px]',
                                    'xl:min-h-[134px] xl:min-w-[540px]',
                                    
                                    /* Адаптивная максимальная ширина (% от ширины экрана) */
                                    'w-auto h-auto', 
                                    'max-w-[calc(100vw-80px)] xs:max-w-[calc(100vw-100px)] sm:max-w-[calc(100vw-140px)] md:max-w-[calc(100vw-180px)] lg:max-w-[calc(100vw-220px)]',
                                    
                                    /* Переносы текста */
                                    'break-words hyphens-auto whitespace-normal'
                                )}>{str}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
