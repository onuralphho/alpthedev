import React from "react";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
import BlogCategoriesSide from "@/components/blogs/BlogCatagoriesSide";
import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: `${process.env.NEXT_PUBLIC_URL}blog` },
	title: "Blog",
	description:
		"Explore the dynamic world of web development through the lens of a skilled web developer. Dive into a curated collection of projects, tutorials, and insights that showcase expertise in front-end and back-end technologies. Stay updated on the latest trends, tools, and best practices, and witness the artistry of turning ideas into seamless digital experiences. Discover the creativity, innovation, and passion behind each line of code. Elevate your understanding of web development with a showcase that celebrates the craft of turning concepts into captivating online realities.",
	verification: {
		google: "google-site-verification=H5KCqVTa4IoEfC6gAUiy5g352hkeGiyAzXOEe9M2xEI",
	},
};

async function Blog({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const blogs = await prisma.blog.findMany({
		where: {
			title: {
				contains: searchParams?.search as string,
			},
			category: {
				name: {
					contains: searchParams?.category as string,
				},
			},
		},

		include: {
			category: true,
			user: true,
		},
	});

	const blogCatagories = await prisma.blogCategories.findMany();
	return (
		<div className="min-h-screen pt-20 p-5 lg:p-10 lg:pt-20 bg-white text-black ">
			<div className="container max-w-4xl mx-auto flex gap-2 max-sm:flex-col">
				<BlogCategoriesSide blogCategories={blogCatagories} />
				<BlogsWrapper blogs={blogs} />
			</div>
		</div>
	);
}

export default Blog;
