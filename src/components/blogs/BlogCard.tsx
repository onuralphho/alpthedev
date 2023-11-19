"use client"
import React from "react";
import type { Blog } from "@prisma/client";
import Link from "next/link";
import { BlogsWithCategoryAndUser } from "@/@types/entityTypes";
import { dateformatter } from "@/lib/dateformatter";

type Props = {
	blog: BlogsWithCategoryAndUser;
	index: number;
};

function BlogCard({ blog, index }: Props) {
	return (
		<Link className={`col-span-12 }`} href={"/blog/" + blog.id}>
			<article className="h-full flex flex-col border-b   backdrop-blur-sm overflow-hidden">
				<div className="flex items-center gap-2">
					<img
						className="w-9 aspect-square rounded-full"
						src="https://budget-app-ivory-two.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdjmonktf8%2Fimage%2Fupload%2Fv1700429176%2Fbudget-images%2Fhkqp3mdcwhq8ibrfm186.webp&w=384&q=75"
						alt=""
					/>
					<span>{blog.user.displayName} |</span>
					<span>{dateformatter(blog.createdAt)}</span>
				</div>
				<div className="h-full flex justify-between">
					<div className="flex flex-col w-full h-full p-2">
						<div className="flex flex-col">
							<h2 className="text-2xl font-bold">{blog.title}</h2>
							<p className="text-base">{blog.description}</p>
						</div>
						<div className="flex justify-around text-xs self-end mt-auto"></div>
					</div>
					<div className="h-36 flex flex-col justify-center">
						<img
							className=" h-1/2 object-cover rounded "
							src={blog.descriptionURL}
							alt={blog.title}
						/>
					</div>
				</div>
			</article>
		</Link>
	);
}

export default BlogCard;
