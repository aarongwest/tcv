import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aaronwe.st/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://aaronwe.st/portfolio', changeFrequency: 'monthly', priority: 0.8 },
  ]
}
