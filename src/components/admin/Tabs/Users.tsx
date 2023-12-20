import React from "react";
import UserTable from "../UserTable";

function Users() {
	return (
		<div className="flex flex-col w-full ">
			<h2 className="text-4xl font-bold">Users</h2>
			<div className="bg-white rounded w-full text-black p-2">
				<UserTable />
			</div>
		</div>
	);
}

export default Users;
