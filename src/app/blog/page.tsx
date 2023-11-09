import React from "react";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
import prisma from "@/lib/db";

async function Blog() {
	const blogs = await prisma.blog.findMany();
		return (
			<div className="pt-20 p-5 lg:p-10 lg:pt-20 min-h-screen bg-white text-black">
				
				<BlogsWrapper blogs={blogs} />
				
			</div>
		);
}

export default Blog;
