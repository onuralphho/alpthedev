"use client";
import React from "react";
import { type Blog } from "@prisma/client";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";
type Props = {
	blogs: Blog[];
};

export default function BlogsWrapper({ blogs }: Props) {
	const router = useRouter();
	
	

	return (
		<div className="flex flex-col items-center w-full gap-5">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
}
