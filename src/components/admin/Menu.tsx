"use client";
import React from "react";
import ValidateIsAdmin from "./ValidateIsAdmin";
import { UserRoles } from "@/constants/RoleEnum";
import { useSession } from "next-auth/react";
import { FaUsers, FaHome } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

type Props = {
	changeTab: (tab: string) => void;
};
type MenuDataType = {
	label: string;
	id: string;
	type: string;
	icon: string;
};

const MENU_DATA: MenuDataType[] = [
	{ label: "Users", id: "users", type: UserRoles.ADMIN, icon: "users_icon" },
	{ label: "Create Blog", id: "createBlog", type: UserRoles.USER, icon: "blog_icon" },
];
function Menu({ changeTab }: Props) {
	const { data: session } = useSession();

	const getIcon = (icon: string) => {
		switch (icon) {
			case "users_icon":
				return <FaUsers />;
			case "blog_icon":
				return <IoDocumentSharp />;
			case "home_icon":
				return <FaHome />;
			default:
				return null;
		}
	};

	return (
		<div className="flex flex-col gap-2 bg-slate-800  p-1 w-80 min-h-screen">
			<div className="flex gap-2 items-center text-white">
				<Link href={"/blog"} className="btn bg-red-500 text-xl flex justify-center items-center rounded-full p-1"><IoIosArrowBack /></Link>
				<h1 className=" text-xl ">
					<span className="text-2xl">Welcome,</span> {session?.user.name}
				</h1>
			</div>
			<ul className="sticky top-1 space-y-1">
				<li
					onClick={() => {
						changeTab("");
					}}
					className="p-2 rounded cursor-pointer bg-white text-slate-800 hover:bg-slate-300  transition-colors">
					<div className="flex items-center gap-2">
						{getIcon("home_icon")}
						Home
					</div>
				</li>
				{MENU_DATA.map((item) => {
					if (item.type === UserRoles.ADMIN) {
						return (
							<ValidateIsAdmin key={item.id}>
								<li
									onClick={() => {
										changeTab(item.id);
									}}
									className="p-2 rounded cursor-pointer bg-white text-slate-800 hover:bg-slate-300 transition-colors">
									<div className="flex items-center gap-2">
										{getIcon(item.icon)}
										{item.label}
									</div>
								</li>
							</ValidateIsAdmin>
						);
					} else {
						return (
							<li
								key={item.id}
								onClick={() => {
									changeTab(item.id);
								}}
								className="p-2 rounded cursor-pointer bg-white text-slate-800 hover:bg-slate-300 transition-colors">
								<div className="flex items-center gap-2">
									{getIcon(item.icon)}
									{item.label}
								</div>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
}

export default Menu;
