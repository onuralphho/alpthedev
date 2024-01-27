import SignInForm from "@/components/blogs/sign-in/SignInForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

async function SignIn() {
	const session = await getServerSession(authOptions);

	if (session?.user.role === "ADMIN") {
		redirect("/admin");
	}

	if (session?.user.role === "USER") {
		redirect("/blog");
	}

	return (
		<div className=" h-[100svh] overflow-hidden ">
			<Image width={1920} height={1080}  src="/assets/storm-background.gif" className="absolute z-[-1] top-0 h-full w-full object-cover" alt="storm" />
			<div className="flex justify-end items-center rounded-tl-lg h-full ">
				<SignInForm />
			</div>
		</div>
	);
}

export default SignIn;
