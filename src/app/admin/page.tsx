import SignOutButton from "@/components/interface/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from 'next/navigation'
import { UserRoles } from "@/constants/RoleEnum";
async function Admin() {
	const session = await getServerSession(authOptions);
	if(session?.user.role !== UserRoles.ADMIN){
		redirect("/blog/sign-in")
	}

	return (
		<div className="pt-20 text-4xl text-white flex gap-4">
			{session?.user.name}
			<SignOutButton/>
		</div>
	);
}

export default Admin;
