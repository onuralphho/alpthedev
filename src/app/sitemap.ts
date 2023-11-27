import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap{
	return [
		{
			url: "https://onuralpthedev.vercel.app",
			lastModified: new Date(),
		},
		{
			url: "https://onuralpthedev.vercel.app/blog",
			lastModified: new Date(),
		},
		{
			url: "https://onuralpthedev.vercel.app/blog/14",
			lastModified: new Date(),
		},
	]
}