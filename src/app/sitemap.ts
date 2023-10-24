import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap{
	return [
		{
			url: "https://onuralpthedev.vercel.app",
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 1,
		},
	]
}