import SignInForm from "@/components/blogs/sign-in/SignInForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

async function SignIn() {
	const session = await getServerSession(authOptions);

	if (session?.user.role === "ADMIN") {
		redirect("/admin");
	}

	if (session?.user.role === "USER") {
		redirect("/blog");
	}

	return (
		<div className="flex justify-end pt-56  max-h-screen overflow-hidden ">
			<img src="https://stormandsky.com/gif/11.gif" className="absolute z-[-1] top-0 h-full w-full object-cover" alt="storm" />
			<div className=" rounded-tl-lg min-h-screen">
				<SignInForm />
			</div>
		</div>
	);
}

export default SignIn;
