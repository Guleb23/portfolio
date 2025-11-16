import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const allFiles = import.meta.glob(
    '/public/assets/MyProjects/*/slides/*.{png,jpg,jpeg,webp}',
    { eager: false, as: 'raw' }
);

const generatePathForImages = (projName) => {
    return Object.keys(allFiles)
        .filter(path => path.includes(`/MyProjects/${projName}/slides/`))
        .map(path => path.replace('/public', ''));
};


const socials = [
    {
        link: "https://github.com/Guleb23",
        icon: <FaTelegram size={28} />
    },
    {
        link: "https://github.com/Guleb23",
        icon: <FaGithub size={28} />
    },
    {
        link: "https://leetcode.com/u/Glebus288/",
        icon: <SiLeetcode size={28} />
    },
];

export const servicesData = [
    {
        title: "FullStack разработка",
        description:
            "Ваш бизнес заслуживает быстрого, безопасного и перспективного цифрового фундамента. Я разрабатываю индивидуальные веб-приложения с чистой архитектурой, оптимизированными базами данных и бесшовной интеграцией, обеспечивая надежность на каждом уровне.",
        items: [
            {
                title: "Разработка сервера",
                description: "(REST/GraphQL API, Микросервисы, Системы аутентификации)",
            },
            {
                title: "Интерфейс",
                description: "(React, Java Script, Интерактивный UI/UX)",
            },
            {
                title: "Базы данных",
                description: "(Оптимизация SQL/NoSQL, Масштабируемые структуры)",
            },
        ],
    },
    {
        title: "DevOps & Cloud Solutions",
        description:
            "Развертывание ПО не должно быть риском. Я автоматизирую инфраструктуру, обеспечиваю безопасность и использую облачные платформы (AWS/Azure), чтобы ваше приложение работало стабильно — 24/7, в любом масштабе.",
        items: [
            {
                title: "CI/CD Pipelines",
                description: "(GitHub Actions, Docker, Kubernetes)",
            },
            {
                title: "Server Management",
                description: "(Linux, Nginx, Балансировка нагрузки)",
            },
            {
                title: "Performance Tuning",
                description: "(Кэширование, Сжатие, Lighthouse 90+ баллов)",
            },
        ],
    },
    {
        title: "Безопасность & оптимизация",
        description:
            "Медленные или взломанные приложения разрушают доверие. Я укрепляю безопасность (защита от XSS/SQL-инъекций, OAuth) и оптимизирую узкие места, чтобы ваше приложение оставалось быстрым, безопасным и масштабируемым по мере роста.",
        items: [
            {
                title: "Code Audits",
                description: "(Рефакторинг, Устранение технического долга)",
            },
            {
                title: "Pen Testing",
                description: "(Проверка на уязвимости)",
            },
            {
                title: "SEO Tech Stack",
                description: "(SSR, Метаданные, Структурированные данные)",
            },
        ],
    },
    {
        title: "Веб & мобильные приложения",
        description:
            "Неудобный интерфейс может погубить даже лучшие идеи. Я создаю адаптивные, идеально точные веб- и мобильные приложения (React Native), которые нравятся пользователям — объединяя дизайн и функциональность.",
        items: [
            {
                title: "Cross-Platform Apps",
                description: "(Единая кодовая база для iOS/Android/Web)",
            },
            {
                title: "PWAs",
                description: "(Оффлайн-режим, Push-уведомления)",
            },
            {
                title: "E-Commerce",
                description: "(Процесс оплаты, Платежные шлюзы, API инвентаризации)",
            },
        ],
    },
];
export const navLinks = [
    {
        name: 'Главная',
        id: 'hero'
    },
    {
        name: 'Работы',
        id: 'works'
    },
    {
        name: 'Контакты',
        id: 'contact'
    },
];


export const projects = [
    {
        id: 1,
        name: "Лендинг для Splyt",
        description:
            "Современный одностраничник с яркими анимациями и адаптивным дизайном. Реализована насыщенная анимация через GSAP, плавные переходы и интерактив. Чистый интерфейс на Tailwind CSS, компонентная структура на React. Идеально работает на всех устройствах",
        href: "https://awwars.vercel.app/",
        image: "/assets/MyProjects/Awwards/awwardPreview.png",
        images: generatePathForImages("Awwards"),
        bgImage: "/assets/backgrounds/blanket.jpg",

        git: "https://github.com/Guleb23/awwars",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "GSAP" }
        ],
    },
    {
        id: 2,
        name: "Система учета продуктов",
        description:
            "Полноценное CRUD-приложение с нуля: сервер на ASP.NET Core с Minimal API и EF Core, реализована бизнес-логика покупок, продаж, скидок и управления товаром.На фронте — адаптивный интерфейс со сменой темы, диаграммами и удобной навигацией. Использован Chakra UI для быстрой и стильной верстки",
        href: "",
        image: "/assets/MyProjects/Orders/ordersPreview.png",
        images: generatePathForImages("Orders"),
        bgImage: "/assets/backgrounds/curtains.jpg",
        git: "https://github.com/Guleb23/Web-application-for-sales-accounting-master--1-",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Chakra UI" },
            { id: 3, name: "ASP.NET CORE" },
            { id: 4, name: "EF CORE" },
            { id: 5, name: "Minimal API" },
        ],
    },
    {
        id: 3,
        name: "Лендинг для бара",
        description:
            "Атмосферный лендинг с анимацией — создан для привлечения гостей и передачи вайба заведения.Эффекты на GSAP добавляют динамики, адаптивный дизайн идеально смотрится на всех устройствах. Tailwind CSS обеспечил быстрый и чистый UI, а React — модульность и масштабируемость",
        href: "https://mojito-smoky.vercel.app/",
        image: "/assets/MyProjects/Mojito/mojitoPreview.png",
        images: generatePathForImages("Mojito"),
        bgImage: "/assets/backgrounds/map.jpg",
        git: "https://github.com/Guleb23/mojito",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "GSAP" }
        ],
    },
    {
        id: 4,
        name: "Веб-приложение для путешествий",
        description:
            "Функциональное приложение для планирования маршрутов. Реализована регистрация и авторизация с использованием access/refresh токенов и хешированием паролей.Пользователи могут создавать маршруты по точкам с расчётом времени и отображением на карте (Leaflet) в реальном времени.Есть общая лента маршрутов с возможностью делиться поездками, реализована пагинация",
        href: "",
        image: "/assets/MyProjects/Travel/travelPreview.png",
        images: generatePathForImages("Travel"),

        bgImage: "/assets/backgrounds/poster.jpg",
        git: "https://github.com/Guleb23/ApiForTravel",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "ASP.NET CORE" },
            { id: 4, name: "EF CORE" },
            { id: 5, name: "Minimal API" },
            { id: 6, name: "Leaflet API" },
        ],
    },
    {
        id: 5,
        name: "Brainvawe лендинг",
        description:
            "Современный лендинг с чистым и минималистичным дизайном. Выполнен на React с использованием Tailwind CSS для быстрой адаптивной вёрстки. Акцент на типографику, структуру и визуальную подачу. Подходит для презентации digital-продукта или IT-сервиса",
        href: "https://brain-wave-smoky.vercel.app/",
        image: "/assets/MyProjects/Brainwave/brainwavePreview.png",
        images: generatePathForImages("Brainwave"),
        bgImage: "/assets/backgrounds/table.jpg",
        git: "https://github.com/Guleb23/brainWave",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
        ],
    }
];
export default socials;