import {defineConfig} from "vitepress";

export const sharedConfig = defineConfig({
    title: "OpenStadia Academy",
    description: "Learn development from the experts",
    base: '/openstadia-academy/',

    themeConfig: {
        logo: '/logo.svg',

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/openstadia-academy',
            },
        ],

        footer: {
            copyright: 'Copyright (c) 2023 OpenStadia Academy',
        },
    },
})
