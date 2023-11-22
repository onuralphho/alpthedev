"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FormValues {
	username: string;
	password: string;
}

function SignInForm() {
	const router = useRouter();
	const validateForm = (values: FormValues) => {
		const errors: typeof values = {
			username: "",
			password: "",
		};
		if (!values.username) {
			errors.username = "Required";
		}
		if (!values.password) {
			errors.password = "Required";
		}
		if (errors.password.length > 0 || errors.username.length > 0) {
			return errors;
		}
	};

	return (
		<Formik
			initialValues={{ username: "", password: "" } as FormValues}
			validate={validateForm}
			onSubmit={async (values) => {
				const signInData = await signIn("credentials", {
					username: values.username,
					password: values.password,
					redirect: false,
				});
				router.push("/admin");
			}}>
			{({ isSubmitting, handleSubmit }) => (
				<Form
					onSubmit={(e: any) => {
						e.preventDefault();
						handleSubmit();
					}}
					className="flex flex-col gap-2 w-full bg-white p-4 rounded-lg text-lg">
					<h2>Contact me for account creation</h2>
					<label>
						<Field
							className=" border w-full rounded-lg  p-2"
							id="username"
							type="username"
							name="username"
							placeholder="Username"
						/>
						<ErrorMessage className="text-red-500" name="username" component="div" />
					</label>
					<label>
						<Field
							className=" border w-full rounded-lg p-2"
							id="password"
							type="password"
							name="password"
							placeholder="Password"
						/>
						<ErrorMessage className="text-red-500" name="password" component="div" />
					</label>
					<button
						className="bg-purple-500 p-2 text-white rounded-lg disabled:bg-slate-600"
						type="submit"
						disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default SignInForm;
