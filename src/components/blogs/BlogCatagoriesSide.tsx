"use client";
import { type BlogCategories } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
type Props = {
	blogCategories: BlogCategories[];
};

function BlogCatagoriesSide({ blogCategories }: Props) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const activeCategory = searchParams.get("category");
	const { data: session } = useSession();

	return (
		<aside className="flex flex-col gap-2  sm:border-r sm:pr-2  ">
			<div className="flex flex-col gap-2 border-b py-4">
				<h1 className="text-4xl font-semibold">Welcome,</h1>
				<div className="text-xl">
					{session ? (
						<div className="flex gap-2 items-end flex-wrap">
							<span>{session.user.username}</span>{" "}
							<button
								onClick={() => {
									signOut();
								}}
								className="btn text-sm border rounded-lg text-white bg-purple-500 transition-colors p-2">
								Sign Out
							</button>
						</div>
					) : (
						<div className="flex gap-2 items-end flex-wrap">
							<span>Guest</span>
							<Link
								className="btn text-sm border rounded-lg text-white bg-purple-500 transition-colors p-2"
								href={"blog/sign-in"}>
								Sign In
							</Link>
						</div>
					)}
				</div>
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

					<li
						onClick={() => {
							router.push(`/blog`);
						}}
						className={`bg-red-100 p-2 rounded cursor-pointer `}>
						Clear
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default BlogCatagoriesSide;
