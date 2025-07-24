import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
        name: 'Услуги',
        id: 'services'
    },
    {
        name: 'Обо мне',
        id: '1'
    },
    {
        name: 'Работы',
        id: '12'
    },
    {
        name: 'Контакты',
        id: '13'
    },
];


export const projects = [
    {
        id: 1,
        name: "Лендинг для Splyt",
        description:
            "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
        href: "",
        image: "/assets/MyProjects/Awwards/awwardPreview.png",
        bgImage: "/assets/backgrounds/blanket.jpg",

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
            "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
        href: "",
        image: "/assets/MyProjects/Orders/ordersPreview.png",
        bgImage: "/assets/backgrounds/curtains.jpg",
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
            "An e-commerce platform for Apple products and accessories with deals and category filtering.",
        href: "",
        image: "/assets/MyProjects/Mojito/mojitoPreview.png",
        bgImage: "/assets/backgrounds/map.jpg",
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
            "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
        href: "",
        image: "/assets/MyProjects/Travel/travelPreview.png",
        bgImage: "/assets/backgrounds/poster.jpg",
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
            "A curated collection of designer home decor items, including furniture and artisan vases.",
        href: "",
        image: "/assets/MyProjects/Brainwave/brainwavePreview.png",
        bgImage: "/assets/backgrounds/table.jpg",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
        ],
    }
];
export default socials;