"use client";
import { signOut } from "next-auth/react";

function SignOutButton() {
	return (
		<button
			onClick={() => {
				signOut({ callbackUrl: "/blog/sign-in" });
			}}
			className="border p-2 rounded-lg">
			Sign Out
		</button>
	);
}

export default SignOutButton;
