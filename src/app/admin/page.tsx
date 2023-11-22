import SignOutButton from "@/components/interface/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";
import { UserRoles } from "@/constants/RoleEnum";
import prisma from "@/lib/db";
import UserTable from "@/components/admin/UserTable";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin",
	robots: { index: false, nocache: true, follow: false },
};

async function Admin() {
	const session = await getServerSession(authOptions);
		if (session?.user.role !== UserRoles.ADMIN) {
		redirect("/blog");
	}
	const users = await prisma.user.findMany({
		include: {
			blogs: true,
		},
	});

	return (
		<div className="pt-20 p-5 text-white gap-4">
			<section className="flex justify-between">
				<h1 className="text-4xl">ADMIN</h1>
				<div className="flex gap-5 items-end">
					{session?.user.name}
					<SignOutButton session={session} />
				</div>
			</section>
			<section>
				<div className="flex flex-col">
					<h2>Users</h2>
					<div className="bg-white rounded w-full text-black p-2">
						<UserTable users={users} />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Admin;
