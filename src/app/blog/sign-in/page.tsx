import SignInForm from "@/components/blogs/sign-in/SignInForm";
import React from "react";

function SignIn() {
	return (
		<div className="flex justify-center items-center pt-20 p-5 lg:p-10 lg:pt-20 min-h-screen bg-gradient-to-b from-[#ff8c0076]">
			<div className="">
				<SignInForm />
			</div>
		</div>
	);
}

export default SignIn;
