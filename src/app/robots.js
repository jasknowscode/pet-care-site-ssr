import { MetadataRoute } from 'next'

export default function robots() {
    return {
        rules: [
        {
            userAgent: 'Googlebot',
            allow: '/',
        },
        {
            userAgent: ['Applebot', 'Bingbot'],
            disallow: ['/'],
        },
    ],
    sitemap: 'https://parkswalks.com/sitemap.js',
    }
}