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
		<div className="bg-white rounded p-2 w-80 h-screen">
			<ul className="space-y-2">
				{MENU_DATA.map((item) => (
					<li
						key={item.id}
						onClick={() => {
							changeTab(item.id);
						}}
						className="p-2 rounded cursor-pointer bg-black">
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Menu;
