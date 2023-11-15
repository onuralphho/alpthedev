"use client";
import React, { useEffect, useState } from "react";
import { BlogCategories, type Blog } from "@prisma/client";
import BlogCard from "./BlogCard";
import { useSearchParams } from "next/navigation";

type BlogsWithCategory = Blog & {
	category: BlogCategories;
};

type Props = {
	blogs: BlogsWithCategory[];
};

export default function BlogsWrapper({ blogs }: Props) {
	const searchParams = useSearchParams();
	const categoryFilter = searchParams.get("category");
	const searchFilter = searchParams.get("search");
	const [filteredBlogs, setFilteredBlogs] = useState(blogs);

	const filterHandler = () => {
		let filteredResult = blogs;

		if (categoryFilter) {
			filteredResult = filteredResult.filter((blog) => blog.category.name === categoryFilter);
		}

		if (searchFilter) {
			filteredResult = filteredResult.filter(
				(blog) =>
					blog.title.toLowerCase().includes(searchFilter) ||
					blog.description.toLowerCase().includes(searchFilter)
			);
		}

		setFilteredBlogs(filteredResult);
	};

	useEffect(() => {
		filterHandler();
	}, [categoryFilter, searchFilter]);

	return (
		<div className="col-span-full sm:col-span-8 md:col-span-9 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 overflow-auto max-h-screen w-full gap-5 p-2 mb-10">
			{filteredBlogs
				.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
				.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
		</div>
	);
}
