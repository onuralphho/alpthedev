import SignInForm from "@/components/blogs/sign-in/SignInForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/providers/SessionProvider";

async function SignIn() {
	const session = await getServerSession(authOptions);

	if (session?.user.role === "ADMIN") {
		redirect("/admin");
	}

	if (session?.user.role === "USER") {
		redirect("/blog");
	}

	return (
		<div className="flex justify-end pt-20 p-5 lg:p-10 lg:pt-20 min-h-screen bg-black ">
			<div className="">
				<SignInForm />
			</div>
		</div>
	);
}

export default SignIn;
