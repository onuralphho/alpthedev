import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const PUT = async (req:Request) => {
	if (false) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

	try {
		const { id, displayName, username, role } = await req.json();
		const data = await prisma.user.update({
			where: { id: id },
			data: { username: username, displayName: displayName, role: role },
		});
		return NextResponse.json({ message: "Success",success:true, data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error while updating blog",success:false, error }, { status: 400 });
}
};
