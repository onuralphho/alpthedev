"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { type User, Blog, Role } from "@prisma/client";
import { MdDeleteForever, MdSave } from "react-icons/md";
import { useAlertContext } from "@/providers/AlertProvider";
import { sleep } from "@/tools/sleep";
import AlertBox from "../AlertBox";
import { UserRoles } from "@/constants/RoleEnum";

type UserWithBlogs = User & {
	blogs: Blog[];
};

type Props = {
	users: UserWithBlogs[];
};

const USER_TABLE_COLUMNS = [
	{ name: "id", width: "3" },
	{ name: "username", width: "20" },
	{ name: "display name", width: "10" },
	{ name: "role", width: "10" },
	{ name: "blog count", width: "10" },
	{ name: "actions", width: "5" },
];

function UserTable({ users }: Props) {
	const alertCtx = useAlertContext();
	const [userData, setUserData] = useState(users);
	const roles = Object.keys(UserRoles);

	const dataChangeHandler = (e: ChangeEvent<HTMLInputElement>, userId: number) => {
		const { name, value } = e.target;
		const editedData = userData.map((item) =>
			item.id === userId && name ? { ...item, [name]: value } : item
		);

		setUserData(editedData);
	};

	const dropDownChangeHandler = (e: ChangeEvent<HTMLSelectElement>, userId: number) => {
		const { name, value } = e.target;
		const editedData = userData.map((item) =>
			item.id === userId && name ? { ...item, [name]: value } : item
		);

		setUserData(editedData);
	};

	const saveChanges = async (updatedUserData: UserWithBlogs) => {
		const res = await fetch("api/user", {
			method: "PUT",
			body: JSON.stringify(updatedUserData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		1;
		const data = await res.json();

		if (data.success) {
			alertCtx?.setAlert({ shown: true, type: data.message });
			await sleep(2000);
			alertCtx?.setAlert({ shown: false, type: data.message });
		} else {
			alertCtx?.setAlert({ shown: true, type: data.message });
			await sleep(2000);
			alertCtx?.setAlert({ shown: false, type: data.message });
		}
	};

	return (
		<>
			<AlertBox
				message={alertCtx?.alert.type}
				isShown={alertCtx?.alert.shown}
				closeBox={alertCtx?.setAlert}
			/>
			<table className="w-full text-center rounded border">
				<thead className="border table-fixed">
					<tr className="font-bold">
						{USER_TABLE_COLUMNS.map((column, index) => (
							<td
								style={{ width: `${column.width}%` }}
								className="border"
								key={index}>
								{column.name.toUpperCase()}
							</td>
						))}
					</tr>
				</thead>
				<tbody className="">
					{userData
						.sort((a, b) => a.id - b.id)
						.map((user) => (
							<tr key={user.id} className="">
								<td className="border">
									<input
										onChange={(e) => {
											dataChangeHandler(e, user.id);
										}}
										className="w-full p-2"
										disabled
										name="id"
										type="text"
										value={user.id}
									/>
								</td>
								<td className="border">
									<input
										onChange={(e) => {
											dataChangeHandler(e, user.id);
										}}
										className="w-full p-2"
										name="username"
										type="text"
										value={user.username}
									/>
								</td>
								<td className="border">
									<input
										onChange={(e) => {
											dataChangeHandler(e, user.id);
										}}
										className="w-full p-2"
										name="displayName"
										type="text"
										value={user.displayName ?? ""}
									/>
								</td>
								<td className="border">
									{/* <input
									onChange={(e) => {
										dataChangeHandler(e, user.id);
									}}
									className="w-full p-2"
									name="role"
									type="text"
									value={user.role}
								/> */}
									<select
										onChange={(e) => {
											dropDownChangeHandler(e, user.id);
										}}
										className="w-full p-2"
										name="role"
										value={user.role}
										id="">
										{roles.map((role, index) => (
											<option key={index} value={role}>
												{role}
											</option>
										))}
									</select>
								</td>
								<td className="border">
									<input
										onChange={(e) => {
											dataChangeHandler(e, user.id);
										}}
										className="w-full p-2"
										disabled
										name="role"
										type="text"
										value={user.blogs.length}
									/>
								</td>
								<td className="border">
									<div className="flex gap-2 w-full justify-center">
										<button
											onClick={() => {
												saveChanges(user);
											}}
											className="bg-green-500 hover:bg-green-700 transition-all text-white p-1 rounded">
											<MdSave className="w-6 h-6" />
										</button>
										<button className="bg-red-500 hover:bg-red-700 transition-all text-white p-1 rounded">
											<MdDeleteForever className="w-6 h-6" />
										</button>
									</div>
								</td>
							</tr>
						))}
				</tbody>
				<tfoot></tfoot>
			</table>
		</>
	);
}

export default UserTable;
