import {defineConfig} from 'vitepress'
import {enConfig} from "./en";
import {ruConfig} from "./ru";
import {sharedConfig} from "./shared";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ...sharedConfig,

    locales: {
        root: {label: 'English', lang: 'en-US', link: '/', ...enConfig},
        ru: {
            label: 'Русский',
            lang: 'ru-RU', link: '/ru/', ...ruConfig
        },
    },
})
