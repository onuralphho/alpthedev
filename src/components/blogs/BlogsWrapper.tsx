"use client";
import React, { useEffect, useState } from "react";
import { BlogCategories, type Blog, User } from "@prisma/client";
import BlogCard from "./BlogCard";
import { useSearchParams } from "next/navigation";
import BlogSearchInput from "./BlogSearchInput";
import { BlogsWithCategoryAndUser } from "@/@types/entityTypes";


type Props = {
	blogs: BlogsWithCategoryAndUser[];
};

export default function BlogsWrapper({ blogs }: Props) {
	const searchParams = useSearchParams();
	const categoryFilter = searchParams.get("category");
	const searchFilter = searchParams.get("search");
	const [filteredBlogs, setFilteredBlogs] = useState(blogs);



	return (
		<section className="w-full flex flex-col gap-2 ">
			<div className=" flex justify-end bg-white z-10">
				<BlogSearchInput />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12   w-full gap-2 mb-10">
				{blogs.length > 0 ? blogs
					.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
					.map((blog,index) => (
						<BlogCard key={blog.id} blog={blog} index={index} />
					)) : <div className="col-span-12 flex  justify-center">No content found..</div>}
			</div>
		</section>
	);
}
