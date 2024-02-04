"use client";
import { signOut } from "next-auth/react";

function SignOutButton() {
	return (
		<button
			onClick={() => {
				signOut({ callbackUrl: "/blog/sign-in" });
			}}
			className="btn bg-slate-800 text-white border p-2 rounded-lg">
			Sign Out
		</button>
	);
}

export default SignOutButton;
