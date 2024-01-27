"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
interface FormValues {
	username: string;
	password: string;
	formError: string;
}

function SignInForm() {

	const router = useRouter();
	const validateForm = (values: FormValues) => {
		const errors: typeof values = {
			username: "",
			password: "",
			formError: "",
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

	const submitFormHandler = async (
		values: FormValues,
		{ setFieldError }: FormikHelpers<FormValues>
	) => {
		const signInData = await signIn("credentials", {
			username: values.username,
			password: values.password,
			redirect: false,
		});
		if (!signInData?.ok) {
			setFieldError("formError", "Invalid username or password");
			return;
		}

		router.push("/admin");
	};

	return (
		<Formik
			initialValues={{ username: "", password: "", formError: "" } as FormValues}
			validate={validateForm}
			onSubmit={submitFormHandler}>
			{({ isSubmitting, handleSubmit }) => (
				<Form
					onSubmit={(e: any) => {
						e.preventDefault();
						handleSubmit();
					}}
					className="flex flex-col gap-2 w-full bg-white p-4 rounded-l-lg text-lg">
					<h2>Contact me for account creation</h2>
					<label>
						<Field
							className=" border w-full rounded-lg  p-2"
							id="username"
							type="username"
							name="username"
							placeholder="Username"
						/>
						<ErrorMessage
							className="text-red-500 text-sm"
							name="username"
							component="div"
						/>
					</label>
					<label>
						<Field
							className=" border w-full rounded-lg p-2"
							id="password"
							type="password"
							name="password"
							placeholder="Password"
						/>
						<ErrorMessage
							className="text-red-500 text-sm"
							name="password"
							component="div"
						/>
					</label>
					<button
						className="btn bg-purple-500 p-2 text-white rounded-lg"
						type="submit"
						disabled={isSubmitting}>
						Submit
					</button>
					<ErrorMessage className="text-red-500" name="formError" component="div" />
				</Form>
			)}
		</Formik>
	);
}

export default SignInForm;
