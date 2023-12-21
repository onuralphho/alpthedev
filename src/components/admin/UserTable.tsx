"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { type User, Blog, Role } from "@prisma/client";
import { MdDeleteForever, MdSave } from "react-icons/md";
import { useAlertContext } from "@/providers/AlertProvider";
import { sleep } from "@/tools/sleep";
import { UserRoles } from "@/constants/RoleEnum";
import Pagination from "./Pagination";

type UserWithBlogs = User & {
	blogs: Blog[];
};

const USER_TABLE_COLUMNS = [
	{ name: "id", width: "3" },
	{ name: "username", width: "20" },
	{ name: "display name", width: "10" },
	{ name: "role", width: "10" },
	{ name: "blog count", width: "10" },
	{ name: "actions", width: "5" },
];

function UserTable() {
	const alertCtx = useAlertContext();
	const [tableFreeSpace, setTableFreeSpace] = useState<number>(0);
	const [userData, setUserData] = useState<UserWithBlogs[] | null>();
	const [dbUserData, setDbUserData] = useState<UserWithBlogs[] | null>();
	const [totalCount, setTotalCount] = useState(0);
	const [pagination, setPagination] = useState({
		skip: 0,
		take: 10,
	});
	const roles = Object.keys(UserRoles);

	const dataChangeHandler = (e: ChangeEvent<HTMLInputElement>, userId: number) => {
		const { name, value } = e.target;
		const editedData = userData?.map((item) =>
			item.id === userId && name ? { ...item, [name]: value } : item
		);

		setUserData(editedData);
	};

	const dropDownChangeHandler = (e: ChangeEvent<HTMLSelectElement>, userId: number) => {
		const { name, value } = e.target;
		const editedData = userData?.map((item) =>
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
		const data = await res.json();

		if (data.success) {
			setDbUserData(userData);
			alertCtx?.setAlert({ shown: true, type: data.message });
			await sleep(2000);
			alertCtx?.setAlert({ shown: false, type: data.message });
		}
	};

	const deleteUser = async (user: UserWithBlogs) => {
		const res = await fetch("api/user", {
			method: "DELETE",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await res.json();

		if (data.success) {
			const newData = userData?.filter((x) => x.id !== user.id);
			setUserData(newData);

			alertCtx?.setAlert({ shown: true, type: data.message });
			await sleep(2000);
			alertCtx?.setAlert({ shown: false, type: data.message });
		} else {
			alertCtx?.setAlert({ shown: true, type: data.message });
			await sleep(2000);
			alertCtx?.setAlert({ shown: false, type: data.message });
		}
	};

	useEffect(() => {
		const fetchUser = async () => {
			const res = await fetch(`api/user?skip=${pagination.skip}&take=${pagination.take}`);
			const data = await res.json();
			setUserData(data.data.users);
			setDbUserData(data.data.users);
			setTotalCount(data.data.totalCount);

			const freeSpaceCalc = 430 - data.data.users.length * 43;
			setTableFreeSpace(freeSpaceCalc);
		};
		fetchUser();
	}, [pagination]);

	return (
		<>
			<table className="w-full text-center rounded border overflow-y-auto h-[500px]">
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
					{userData?.map((user) => (
						<tr
							style={{ height: "10px", overflowY: "auto" }}
							key={user.id}
							className="">
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
									className={`w-full p-2 ${
										dbUserData?.find((x) => x.id === user.id)?.username !==
											user.username && "bg-yellow-400"
									}`}
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
									className={`w-full p-2 ${
										dbUserData?.find((x) => x.id === user.id)?.displayName !==
											user.displayName && "bg-yellow-400"
									}`}
									name="displayName"
									type="text"
									value={user.displayName ?? ""}
								/>
							</td>
							<td className="border">
								<select
									onChange={(e) => {
										dropDownChangeHandler(e, user.id);
									}}
									className={`w-full p-2 ${
										dbUserData?.find((x) => x.id === user.id)?.role !==
											user.role && "bg-yellow-400"
									}`}
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
									<button
										onClick={() => {
											deleteUser(user);
										}}
										className="bg-red-500 hover:bg-red-700 transition-all text-white p-1 rounded">
										<MdDeleteForever className="w-6 h-6" />
									</button>
								</div>
							</td>
						</tr>
					))}
					<tr
						style={{
							height: `${tableFreeSpace}px`,
							display: tableFreeSpace > 0 ? "block" : "none",
						}}></tr>
				</tbody>
				<tfoot>
					{userData && (
						<tr>
							<td className="flex gap-2 m-2 ">
								<Pagination
									itemsPerPage={pagination.take}
									totalCount={totalCount}
									goToPage={(pageNum: number) => {
										setPagination((prev) => ({
											skip: (pageNum - 1) * prev.take,
											take: prev.take,
										}));
									}}
								/>
							</td>
						</tr>
					)}
				</tfoot>
			</table>
		</>
	);
}

export default UserTable;
