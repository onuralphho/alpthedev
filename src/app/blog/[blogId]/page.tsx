import prisma from "@/lib/db";
import React from "react";
import profilePicture from "@/assets/profile.jpg";
import { Metadata } from "next";

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
				canonical: `${process.env.NEXTAUTH_URL}blog/${blog.id}`,
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
		<div className=" bg-white text-black min-h-screen py-20">
			<div className="max-w-3xl mx-auto p-4 space-y-4">
				<h1 className="text-7xl font-extrabold">{blogDetails?.title}</h1>
				<div className="flex items-center gap-2">
					<img
						src={profilePicture.src}
						alt="Author's profile picture"
						className="w-16 aspec rounded-full"
					/>
					<span className="text-lg  font-semibold">Onuralp</span>
				</div>
				<img
					src={blogDetails?.descriptionURL}
					alt={blogDetails?.description}
					className="rounded-lg md:h-80 w-full object-cover "
				/>
				<div
					className="text-xl"
					dangerouslySetInnerHTML={{
						__html: blogDetails?.content ?? "<div>Bir Hata Oluştu...</div>",
					}}></div>
			</div>
		</div>
	);
}

export default BlogDetails;
