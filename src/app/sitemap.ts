import prisma from "@/lib/db";

export default async function sitemap() {
	const baseUrl = "https://onuralpthedev.vercel.app";

	const blogs = await prisma.blog.findMany({
		orderBy: { createdAt: "desc" },
		select: { id: true, updatedAt: true },
	});
	const blogsUrl =
		blogs?.map((post) => {
			return {
				url: `${baseUrl}/blog/${post.id}`,
				lastModified: post.updatedAt,
			};
		}) ?? [];

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
		},
		...blogsUrl,
	];
}
