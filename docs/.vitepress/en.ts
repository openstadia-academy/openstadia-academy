import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'

export const META_URL = 'https://academy.openstadia.com/'
export const META_TITLE = 'OS Academy'
export const META_DESCRIPTION =
    'Learn development from the experts'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
                text: 'Tasks',
                link: '/tasks/',
                activeMatch: '^/tasks/',
            },
            {
                text: 'Videos',
                link: '/videos/',
                activeMatch: '^/videos/',
            },
        ],

        sidebar: {
            '/videos/': [
                {
                    text: 'Videos',
                    items: [
                        {text: 'Video 1', link: '/videos/'},
                        {text: 'Video 2', link: '/videos/video-2.html'},
                    ],
                },
            ],
            '/tasks/': [
                {
                    text: 'Tasks',
                    items: [
                        {
                            text: 'Preparation',
                            link: '/tasks/',
                        },
                        {
                            text: 'Task 1',
                            link: '/tasks/task-1.html',
                        },
                        {
                            text: 'Task 2',
                            link: '/tasks/task-2.html',
                        },
                        {
                            text: 'Task 3',
                            link: '/tasks/task-3.html',
                        },
                        {
                            text: 'Task 4',
                            link: '/tasks/task-4.html',
                        },
                    ],
                },
            ],
        },
    },
}
