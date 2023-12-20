"use client";
import React, { useState } from "react";
import UserTable from "./UserTable";
import Menu from "./Menu";
import Users from "./Tabs/Users";
import CreateBlog from "./Tabs/CreateBlog";

function Main() {
	const [activeTab, setActiveTab] = useState<string>("users");

	const changeTab = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<section className="min-h-screen ">
			<div className="flex gap-4 h-full">
				<Menu changeTab={changeTab} />
				<div className="p-4 w-full">
					{activeTab === "users" && <Users />}
					{activeTab === "createBlog" && <CreateBlog />}
				</div>
			</div>
		</section>
	);
}

export default Main;
