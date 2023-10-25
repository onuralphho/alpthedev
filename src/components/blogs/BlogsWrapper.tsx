"use client";
import React from "react";
import type { Blog } from "@prisma/client";
import BlogCard from "./BlogCard";
type Props = {
	blogs: Blog[];
};

export default function BlogsWrapper({ blogs }: Props) {
	return (
		<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
}
