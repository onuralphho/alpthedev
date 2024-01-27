"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import Users from "./Tabs/Users";
import CreateBlog from "./Tabs/CreateBlog";
import ValidateIsAdmin from "./ValidateIsAdmin";
import SignOutButton from "../interface/SignOutButton";
import { useSession } from "next-auth/react";
function Main() {
	const { data: session } = useSession();
	const [activeTab, setActiveTab] = useState<string>("");

	const changeTab = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<>
			<section className="min-h-screen ">
				<div className="flex gap-4 h-full">
					<Menu changeTab={changeTab} />
					<div className="flex flex-col p-4 w-full">
						<section className="flex justify-end p-2">
							<div className="flex gap-5 items-end">
								{session?.user.name}
								<SignOutButton />
							</div>
						</section>
						{activeTab === "users" && (
							<ValidateIsAdmin>
								<Users />
							</ValidateIsAdmin>
						)}
						{activeTab === "createBlog" && <CreateBlog />}
					</div>
				</div>
			</section>
		</>
	);
}

export default Main;
