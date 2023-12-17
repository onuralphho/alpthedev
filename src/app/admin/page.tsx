import SignOutButton from "@/components/interface/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";
import { UserRoles } from "@/constants/RoleEnum";
import prisma from "@/lib/db";
import UserTable from "@/components/admin/UserTable";
import { Metadata } from "next";
import Main from "@/components/admin/Main";

export const metadata: Metadata = {
	title: "Admin",
	robots: { index: false, nocache: true, follow: false },
};

async function Admin() {
	const session = await getServerSession(authOptions);
	if (session?.user.role !== UserRoles.ADMIN) {
		redirect("/blog");
	}

	return (
		<div className="pt-20 p-5 text-white gap-4">
			<section className="flex justify-between">
				<h1 className="text-4xl">ADMIN</h1>
				<div className="flex gap-5 items-end">
					{session?.user.name}
					<SignOutButton session={session} />
				</div>
			</section>
			<Main />
		</div>
	);
}

export default Admin;
