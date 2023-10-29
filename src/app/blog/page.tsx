import React from "react";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

async function Blog() {
	const session = await getServerSession(authOptions);
	const blogs = await prisma.blog.findMany();
	
	if (blogs.length === 0) {
		return (
			<div className="pt-20 p-5 lg:p-10 lg:pt-20 min-h-screen bg-gradient-to-b from-[#ff8c0076]">
				Loading...
			</div>
		);
	} else {
		return (
			<div className="pt-20 p-5 lg:p-10 lg:pt-20 min-h-screen bg-gradient-to-b from-[#ff8c0076]">
				<h1>{session?.user.username}</h1>
				<BlogsWrapper blogs={blogs} />
				
			</div>
		);
	}
}

export default Blog;
