export default async function sitemap(){
	const baseUrl = "https://onuralpthedev.vercel.app"
	
	return [
		{url: baseUrl, lastModified: new Date()},
	]
}