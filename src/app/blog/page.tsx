import React from "react";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
import BlogCategoriesSide from "@/components/blogs/BlogCatagoriesSide";
import prisma from "@/lib/db";
import BlogSearchInput from "@/components/blogs/BlogSearchInput";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "https://onuralpthedev.vercel.app/blog" },
	title: "Blog",
	description:
		"Explore the dynamic world of web development through the lens of a skilled web developer. Dive into a curated collection of projects, tutorials, and insights that showcase expertise in front-end and back-end technologies. Stay updated on the latest trends, tools, and best practices, and witness the artistry of turning ideas into seamless digital experiences. Discover the creativity, innovation, and passion behind each line of code. Elevate your understanding of web development with a showcase that celebrates the craft of turning concepts into captivating online realities.",
	verification: {
		google: "google-site-verification=H5KCqVTa4IoEfC6gAUiy5g352hkeGiyAzXOEe9M2xEI",
	},
};

async function Blog() {
	const blogs = await prisma.blog.findMany({
		include: {
			category: true,
		},
	});
	const blogCatagories = await prisma.blogCategories.findMany();
	return (
		<div className="h-screen pt-20 p-5 lg:p-10 lg:pt-20 space-y-2  bg-white text-black overflow-hidden">
			<div className="flex justify-end">
				<BlogSearchInput />
			</div>
			<section className="max-sm:flex max-sm:gap-4 max-sm:flex-col  sm:grid grid-cols-12 lg:grid-cols-4 gap-2 h-full">
				<BlogCategoriesSide blogCategories={blogCatagories} />
				<BlogsWrapper blogs={blogs} />
			</section>
		</div>
	);
}

export default Blog;
