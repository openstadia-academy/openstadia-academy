import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'

export const META_URL = 'https://academy.openstadia.com/'
export const META_TITLE = 'OS Academy'
export const META_DESCRIPTION =
    'Learn development from the experts'

export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: META_DESCRIPTION,
    head: [
        ['meta', {property: 'og:url', content: META_URL}],
        ['meta', {property: 'og:description', content: META_DESCRIPTION}],
        ['meta', {property: 'twitter:url', content: META_URL}],
        ['meta', {property: 'twitter:title', content: META_TITLE}],
        ['meta', {property: 'twitter:description', content: META_DESCRIPTION}],
    ],

    themeConfig: {
        nav: [
            {
                text: 'Задания',
                link: '/ru/tasks/',
                activeMatch: '^/ru/tasks/',
            },
            {
                text: 'Видео',
                link: '/ru/videos/',
                activeMatch: '^/ru/videos/',
            },
        ],

        sidebar: {
            '/ru/videos/': [
                {
                    text: 'Видео',
                    items: [
                        {text: 'Видео 1', link: '/ru/videos/'},
                        {text: 'Видео 2', link: '/ru/videos/video-2.html'},
                    ],
                },
            ],
            // catch-all fallback
            '/ru/tasks/': [
                {
                    text: 'Задания',
                    items: [
                        {
                            text: 'Подготовка',
                            link: '/ru/tasks/',
                        },
                        {
                            text: 'Задание 1',
                            link: '/ru/tasks/task-1.html',
                        },
                        {
                            text: 'Задание 2',
                            link: '/ru/tasks/task-2.html',
                        },
                        {
                            text: 'Задание 3',
                            link: '/ru/tasks/task-3.html',
                        },
                        {
                            text: 'Задание 4',
                            link: '/ru/tasks/task-4.html',
                        },
                    ],
                },
            ],
        },
    },
}
