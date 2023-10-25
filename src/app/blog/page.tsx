import React from "react";
import { PrismaClient } from "@prisma/client";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
const prisma = new PrismaClient();

async function Blog() {
	const blogs = await prisma.blog.findMany();
	

	return (
		<div className="pt-20 p-5 lg:p-10 lg:pt-20 min-h-screen bg-gradient-to-b from-[#00d0ff8c]">
			<BlogsWrapper blogs={blogs} />
		</div>
	);
}

export default Blog;
