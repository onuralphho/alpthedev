"use client";
import React from "react";

type Props = {
	changeTab: (tab: string) => void;
};

const MENU_DATA = [
	{ label: "Users", id: "users" },
	{ label: "Create Blog", id: "createBlog" },
];

function Menu({ changeTab }: Props) {
	return (
		<div className="bg-[#e8e8e8] rounded-r p-1 w-80 h-full">
			<ul className="space-y-1">
				{MENU_DATA.map((item) => (
					<li
						key={item.id}
						onClick={() => {
							changeTab(item.id);
						}}
						className="p-2 rounded cursor-pointer bg-black hover:bg-black/80 transition-colors">
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Menu;
