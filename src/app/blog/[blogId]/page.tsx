import prisma from "@/lib/db";
import React, { Suspense } from "react";
import profilePicture from "@/assets/profile.jpg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import "highlight.js/styles/github.css";

export async function generateMetadata({ params }: { params: { blogId: string } }) {
	try {
		const blog = await prisma.blog.findUnique({
			where: { id: Number(params.blogId) },
			select: { id: true, title: true, description: true },
		});
		if (!blog)
			return {
				title: "Not Found",
				description: "The page you are looking for does not exist.",
			};

		return {
			title: blog.title,
			description: blog.description,
			alternates: {
				canonical: `${process.env.NEXT_PUBLIC_URL}blog/${blog.id}`,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			title: "Not Found",
			description: "The page you are looking for does not exist.",
		};
	}
}
async function BlogDetails({ params }: { params: { blogId: string } }) {
	const blogDetails = await prisma.blog.findUnique({ where: { id: Number(params.blogId) } });
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className=" min-h-screen py-20">
				<div className="max-w-3xl mx-auto p-4 space-y-4">
					<h1 className="text-3xl lg:text-5xl xl:text-7xl font-extrabold">
						{blogDetails?.title}
					</h1>
					<div className="flex sticky top-0 p-2 items-center gap-2 bg-white">
						<img
							src={profilePicture.src}
							alt="Author's profile picture"
							className="w-14 aspec rounded-full"
						/>
						<span className="text-lg  font-semibold">Onuralp</span>
					</div>
					<img
						src={blogDetails?.descriptionURL}
						alt={blogDetails?.description}
						className="rounded-lg md:h-80 w-full object-cover "
					/>
	
					<Markdown
						className="markdown-body"
						rehypePlugins={[rehypeSanitize,rehypeHighlight]}
						remarkPlugins={[remarkGfm]}>
						{blogDetails?.content}
					</Markdown>
				</div>
			</div>
		</Suspense>
	);
}

export default BlogDetails;
