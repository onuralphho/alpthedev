"use client";
import React, { ChangeEvent, useState } from "react";
import { type User } from "@prisma/client";

type Props = {
	users: User[];
};

const USER_TABLE_COLUMNS = [
	{ name: "id", width: "3" },
	{ name: "username", width: "20" },
	{ name: "display name", width: "10" },
	{ name: "role", width: "10" },
	{ name: "blog count", width: "10" },
];

function UserTable({ users }: Props) {
	const [userData, setUserData] = useState(users);
	const dataChangeHandler = (
		e: ChangeEvent<HTMLInputElement>,
		userId: number
	) => {
		const { name, value } = e.target;
		const editedData = userData.map((item) =>
			item.id === userId && name ? { ...item, [name]: value } : item
		);

		setUserData(editedData);
	};

	return (
		<table className="w-full text-center rounded border">
			<thead className="border">
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
			<tbody>
				{userData.map((user) => (
					<tr key={user.id} className="border">
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
							<input
								onChange={(e) => {
									dataChangeHandler(e, user.id);
								}}
								className="w-full p-2"
								name="role"
								type="text"
								value={user.role}
							/>
						</td>
						<td className="border">{""}</td>
					</tr>
				))}
			</tbody>
			<tfoot></tfoot>
		</table>
	);
}

export default UserTable;
