'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './emblaDouble.module.css'
import clsx from 'clsx'

type PropType = {
    slides: {name:string, role: string, link: string}[]
    options?: EmblaOptionsType
}

const EmblaDoubleCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options)

    return (

        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((data, index) => (
                        <div className={styles.embla__slide} key={`slide-${index}`}>
                            <div className={clsx(styles.embla__slide__number, 'text-[9px] leading-3 md:text-2xl md:leading-8 p-2.5 md:p-7')}>
                                <div className='flex flex-col'>
                                    <p>{data.name}</p>
                                    <p>{data.role}</p>
                                </div>
                                <p className='text-sulu'>{data.link}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaDoubleCarousel
