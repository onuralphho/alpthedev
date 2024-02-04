import React from "react";
import UserTable from "../UserTable";

function Users() {
	return (
		<div className="flex flex-col w-full  h-full">
			<h2 className="text-4xl font-bold">Users</h2>
			<div className=" h-full rounded w-full text-black p-2">
				<UserTable />
			</div>
		</div>
	);
}

export default Users;
