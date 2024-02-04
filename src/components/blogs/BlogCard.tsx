"use client"
import React from "react";
import Link from "next/link";
import { BlogsWithCategoryAndUser } from "@/@types/entityTypes";
import { dateformatter } from "@/lib/dateformatter";
import profilePicture from "@/assets/profile.jpg";
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
						src={profilePicture.src}
						alt="Profile picture"
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
