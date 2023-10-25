import React from "react";
import type { Blog } from "@prisma/client";
import Link from "next/link";
type Props = {
	blog: Blog;
};

function BlogCard({ blog }: Props) {
	return (
		<Link href={"/blog/" + blog.id + "-" + blog.title}>
			<article className="flex flex-col justify-between bg-white/10 border-0 border-t border-l h-[200px] border-white/30 text-white/90 p-4 rounded-lg backdrop-blur-sm ">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl">{blog.title}</h2>
					<p>{blog.content}</p>
				</div>
				<span className="text-xs self-end">
					{blog.createdAt.toISOString().split("T")[0]}
				</span>
			</article>
		</Link>
	);
}

export default BlogCard;
