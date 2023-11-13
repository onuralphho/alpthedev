import React from "react";
import type { Blog } from "@prisma/client";
import Link from "next/link";
type Props = {
	blog: Blog;
};

function BlogCard({ blog }: Props) {
	return (
		<Link className="min-w-[500pxe]" href={"/blog/" + blog.id}>
			<article className="flex flex-col justify-between border h-[200px]  p-4 rounded-lg backdrop-blur-sm ">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl">{blog.title}</h2>
					<p>{blog.description}</p>
				</div>
				<span className="text-xs self-end">
					{blog.createdAt.toISOString().split("T")[0]}
				</span>
			</article>
		</Link>
	);
}

export default BlogCard;
