import { BlogCategories } from "@prisma/client";
import MDEditor from "@uiw/react-md-editor";
import { Session } from "next-auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type FormState = {
	title: string;
	description: string;
	descriptionURL: string;
	categoryId: number;
};

const initial_content_state = "**Hello world!!!**";
const initial_form_state = {
	title: "",
	description: "",
	descriptionURL: "",
	categoryId: 0,
};


function CreateBlog() {
	const [user, setUser] = useState<Session["user"]>();
	const [formState, setFormState] = useState<FormState>(initial_form_state);
	const [markDownValue, setMarkDownValue] = useState<string | undefined>(initial_content_state);
	const [availableCategories, setAvailableCategories] = useState<BlogCategories[]>();
	const storedUser = localStorage.getItem("user");

	useEffect(() => {
		const getCategories = async () => {
			const res = await fetch("api/blogCategories/getAllCategories", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setAvailableCategories(data.data);
		};
		getCategories();
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const onFormChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const publishBlog = async (e: FormEvent) => {
		const request = {
			title: formState.title,
			content: markDownValue,
			description: formState.description,
			descriptionURL: formState.descriptionURL,
			categoryId: Number(formState.categoryId),
			userId: Number(user?.id),
		};

		const res = await fetch("api/blog", {
			method: "POST",
			body: JSON.stringify(request),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();
	};

	const setInitialForm = () => {
		setFormState(initial_form_state);
		setMarkDownValue(initial_content_state);
	}

	return (
		<div className="flex flex-col w-full ">
			<h2 className="text-4xl font-bold">Create Blog</h2>
			<form
				onSubmit={publishBlog}
				className="bg-white flex flex-col gap-4 rounded w-full text-black  p-2 m-1">
				<div className="flex flex-col gap-4 ">
					<div className="flex flex-col w-full">
						<label className="font-bold" htmlFor="title">
							Title:
						</label>
						<input
							onChange={onFormChange}
							className="border rounded p-1"
							type="text"
							name="title"
							id="title"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label className="font-bold" htmlFor="description">
							Description:
						</label>
						<textarea
							onChange={onFormChange}
							className="border rounded p-1"
							name="description"
							id="description"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label className="font-bold" htmlFor="descriptionURL">
							Description Url (will change to file upload):
						</label>
						<input
							onChange={onFormChange}
							className="border rounded p-1"
							type="text"
							name="descriptionURL"
							id="descriptionURL"
						/>
					</div>
				</div>
				<MDEditor height={700} value={markDownValue} onChange={setMarkDownValue} />
				<div className="flex flex-col w-full">
					<label className="font-bold" htmlFor="categoryId">
						Category:
					</label>
					<select
						name="categoryId"
						id="categoryId"
						onChange={onFormChange}
						className="py-2 border rounded w-max">
						<option value="" disabled selected>
							Select
						</option>
						{availableCategories?.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<button className="bg-green-500 rounded p-2 text-white text-2xl font-bold">
					Publish
				</button>
			</form>
		</div>
	);
}

export default CreateBlog;
