'use client' // Указывает что это клиентский компонент (Next.js)

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel' // Тип для опций карусели
import useEmblaCarousel from 'embla-carousel-react' // Хук для создания карусели
import styles from './emblaDouble.module.css' // CSS модуль со стилями
import clsx from 'clsx' // Утилита для условных классов
import Link from 'next/link' // Компонент ссылки из Next.js

// Тип для пропсов компонента
type PropType = {
    slides: {name:string, role: string, link: string}[] // Массив слайдов с данными
    options?: EmblaOptionsType // Необязательные опции для карусели
}

// Основной компонент карусели
const EmblaDoubleCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props // Деструктуризация пропсов
    const [emblaRef] = useEmblaCarousel(options) // Инициализация карусели с опциями

    // Функция для создания Telegram ссылки из username
    const createTelegramLink = (username: string) => {
        // Удаляем @ если он есть в начале
        const cleanUsername = username.startsWith('@') ? username.substring(1) : username;
        return `https://t.me/${cleanUsername}`; // Формируем полную ссылку на профиль
    };

    return (
        // Основной контейнер карусели
        <div className={styles.embla}>
            {/* Видимая область карусели с ref для хука useEmblaCarousel */}
            <div className={styles.embla__viewport} ref={emblaRef}>
                {/* Контейнер для всех слайдов */}
                <div className={styles.embla__container}>
                    {/* Маппинг по массиву слайдов */}
                    {slides.map((data, index) => (
                        // Отдельный слайд с уникальным ключом
                        <div className={styles.embla__slide} key={`slide-${index}`}>
                            {/* Контейнер для содержимого слайда с адаптивными размерами и отступами */}
                            <div className={clsx(styles.embla__slide__number, 'text-[9px] leading-3 md:text-2xl md:leading-8 p-2.5 md:p-7')}>
                                {/* Блок с информацией о человеке */}
                                <div className='flex flex-col'>
                                    <p>{data.name}</p> {/* Имя человека */}
                                    <p>{data.role}</p> {/* Должность/роль человека */}
                                </div>
                                {/* Кликабельная ссылка на профиль в Telegram */}
                                <Link 
                                    href={createTelegramLink(data.link)} // URL-адрес для перехода
                                    target="_blank" // Открывает в новой вкладке
                                    rel="noopener noreferrer" // Безопасность при открытии внешних ссылок
                                    className='text-sulu hover:underline cursor-pointer transition-all' // Стили ссылки
                                >
                                    {data.link} {/* Текст ссылки (username в Telegram) */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaDoubleCarousel // Экспорт компонента
