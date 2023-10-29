import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import React from "react";

async function Admin() {
	const session = await getServerSession(authOptions);
	return <div className="pt-20 text-4xl text-white ">{session?.user.username}aaa</div>;
}

export default Admin;
