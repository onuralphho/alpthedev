import React from "react";
import { type BlogCategories } from "@prisma/client";
type Props = {
	blogCategories: BlogCategories[];
};

function BlogCatagoriesSide({ blogCategories }: Props) {
	return (
		<aside className="col-span-full sm:col-span-4 md:col-span-3 lg:col-span-1 ">
			<ul className="space-y-2">
				{blogCategories.map((category) => (
					<li className="bg-purple-100 p-2 rounded " key={category.id}>{category.name}</li>
				))}
			</ul>
		</aside>
	);
}

export default BlogCatagoriesSide;
