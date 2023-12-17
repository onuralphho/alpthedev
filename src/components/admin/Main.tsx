"use client";
import React, { useState } from "react";
import UserTable from "./UserTable";
import Menu from "./Menu";

function Main() {
	const [activeTab, setActiveTab] = useState<string>("users");

	const changeTab = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<section className="min-h-screen">
			<div className="flex gap-4">
				<Menu changeTab={changeTab} />
				{activeTab === "users" && (
					<div className="flex flex-col w-full">
						<h2 className="text-4xl font-bold">Users</h2>
						<div className="bg-white rounded w-full text-black p-2">
							<UserTable />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Main;
