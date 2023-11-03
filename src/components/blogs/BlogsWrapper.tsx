"use client";
import React from "react";
import { type Blog } from "@prisma/client";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
type Props = {
	blogs: Blog[];
};

export default async function BlogsWrapper({ blogs }: Props) {
	const router = useRouter();
	const session = await getServerSession(authOptions);
	const create = async () => {
		await fetch(`/api/blog`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: "Test",
				title: "Test Title",
				userId: Number(session?.user.id),
			} as Blog),
		});

		router.refresh();
	};

	return (
		<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
			<button
				className="bg-white/80 rounded-lg h-[200px]"
				onClick={create}>
				Test
			</button>
		</div>
	);
}
