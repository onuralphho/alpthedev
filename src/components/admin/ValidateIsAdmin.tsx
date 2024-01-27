import React from "react";
import { useSession } from "next-auth/react";
import { UserRoles } from "@/constants/RoleEnum";
type Props = {
	children: React.ReactNode;
};

function ValidateIsAdmin({ children }: Props) {
	const { data: session } = useSession();

	if (session?.user.role === UserRoles.ADMIN) {
		return children;
	} else {
		return null;
	}
}

export default ValidateIsAdmin;
