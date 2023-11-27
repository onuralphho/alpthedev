"use client";
import React, { useEffect, useState } from "react";
import { type BlogCategories } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { Session } from "next-auth";
import Link from "next/link";
type Props = {
	blogCategories: BlogCategories[];
};

function BlogCatagoriesSide({ blogCategories }: Props) {
	const [user, setUser] = useState<Session["user"]>();

	const router = useRouter();
	const searchParams = useSearchParams();
	const activeCategory = searchParams.get("category");

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<aside className="flex flex-col gap-2  sm:border-r sm:pr-2  ">
			<div className="flex flex-col gap-2 border-b py-4">
				<h1 className="text-4xl font-semibold">Welcome,</h1>
				<span className="text-xl">
					{user ? (
						user.name
					) : (
						<span>
							Guest{" "}
							<Link
								className="text-sm border rounded text-purple-500 border-purple-500 hover:bg-purple-50 transition-colors p-2"
								href={"blog/sign-in"}>
								Sign In
							</Link>
						</span>
					)}
				</span>
			</div>
			<div className="sticky top-20 max-sm:hidden">
				<ul className="space-y-2">
					{blogCategories.map((category) => (
						<li
							onClick={() => {
								router.push(`?category=${category.name}`);
							}}
							className={`bg-gray-200 p-2 rounded cursor-pointer ${
								activeCategory === category.name && "bg-purple-200"
							}`}
							key={category.id}>
							{category.name}
						</li>
					))}
					<li>
					<li
							onClick={() => {
								router.push(`/blog`);
							}}
							className={`bg-red-100 p-2 rounded cursor-pointer `}
							>
							Clear
						</li>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default BlogCatagoriesSide;
