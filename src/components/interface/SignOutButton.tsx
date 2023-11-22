"use client";
import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

function SignOutButton({ session }: { session: Session }) {
	useEffect(() => {
		if (session) {
			localStorage.setItem("user", JSON.stringify(session.user));
		}
	}, []);

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
