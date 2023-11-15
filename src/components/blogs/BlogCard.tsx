import React from "react";
import type { Blog } from "@prisma/client";
import Link from "next/link";
type Props = {
	blog: Blog;
};

function BlogCard({ blog }: Props) {
	return (
		<Link className="h-max" href={"/blog/" + blog.id}>
			<article className="flex flex-col justify-between border rounded-lg backdrop-blur-sm overflow-hidden">
				<img src={blog.descriptionURL} alt={blog.title} />
				<div className="flex flex-col p-2">
					<div className="flex flex-col">
						<h2 className="text-2xl font-bold">{blog.title}</h2>
						<p className="text-base">{blog.description}</p>
					</div>
					<span className="text-xs self-end">
						{blog.createdAt.toISOString().split("T")[0]}
					</span>
				</div>
			</article>
		</Link>
	);
}

export default BlogCard;
