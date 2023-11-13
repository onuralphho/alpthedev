"use client";
import React from "react";
import { type Blog } from "@prisma/client";
import BlogCard from "./BlogCard";
type Props = {
	blogs: Blog[];
};

export default function BlogsWrapper({ blogs }: Props) {

	return (
		<div className="col-span-full sm:col-span-8 md:col-span-9 lg:col-span-3 grid grid-cols-1 p-2 lg:grid-cols-2 overflow-auto max-h-screen  w-full gap-5">
			{blogs
				.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
				.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
		</div>
	);
}
