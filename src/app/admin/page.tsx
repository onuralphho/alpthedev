import SignOutButton from "@/components/interface/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Main from "@/components/admin/Main";

export const metadata: Metadata = {
	title: "Admin",
	robots: { index: false, nocache: true, follow: false },
};

async function Admin() {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) {
		redirect("/404");
	}

	//?:TODO: istatistik ekle
	return (
		<div className=" bg-slate-50 space-y-2  gap-4">
			<Main />
		</div>
	);
}

export default Admin;
