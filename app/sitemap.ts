// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hamim-protfolio.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/#projects',
      lastModified: new Date(),
    },
     {
      url: 'https://hamim-protfolio.vercel.app/#about',
      lastModified: new Date(),
    },
     {
      url: 'https://yourdomain.com/#education',
      lastModified: new Date(),
    }
  ]
}