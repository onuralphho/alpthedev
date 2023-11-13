import React from "react";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
import BlogCategoriesSide from "@/components/blogs/BlogCatagoriesSide";
import prisma from "@/lib/db";

async function Blog() {
	const blogs = await prisma.blog.findMany();
	const blogCatagories = await prisma.blogCategories.findMany();
	return (
		<div className="h-screen pt-20 p-5 lg:p-10 lg:pt-20  bg-white text-black">
			<section className="grid grid-cols-12 lg:grid-cols-4 gap-2 h-full">
				<BlogCategoriesSide blogCategories={blogCatagories} />
				<BlogsWrapper blogs={blogs} />
			</section>
		</div>
	);
}

export default Blog;
