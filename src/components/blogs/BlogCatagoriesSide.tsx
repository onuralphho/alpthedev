"use client"
import React from "react";
import { type BlogCategories } from "@prisma/client";
import { useRouter,useSearchParams } from "next/navigation";
type Props = {
	blogCategories: BlogCategories[];
};

function BlogCatagoriesSide({ blogCategories }: Props) {
	const router = useRouter()
	const searchParams = useSearchParams();
	const activeCategory = searchParams.get("category")

	return (
		<aside className="col-span-full sm:col-span-4 md:col-span-3 lg:col-span-1 space-y-2 sm:border-r pr-4 ">
			<h2 className="text-2xl">Categories</h2>
			<ul className="space-y-2">
				{blogCategories.map((category) => (
					<li onClick={() => {
						router.push(`?category=${category.name}`)
					}} className={`bg-gray-200 p-2 rounded cursor-pointer ${activeCategory === category.name && "bg-purple-200"}`} key={category.id}>{category.name}</li>
				))}
			</ul>
		</aside>
	);
}

export default BlogCatagoriesSide;
