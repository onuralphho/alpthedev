import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserRoles } from "@/constants/RoleEnum";

export const GET = async (req: Request) => {
	try {
		const session = await getServerSession(authOptions);
		if (session?.user.role !== UserRoles.ADMIN) {
			return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 });
		}

		const { searchParams } = new URL(req.url);
		const skip = parseInt(searchParams.get("skip") as string);
		const take = parseInt(searchParams.get("take") as string);

		const data = await prisma.user.findMany({
			skip: skip,
			take: take,
			include: {
				blogs: true,
			},
		});
		return NextResponse.json({ message: "Success", success: true, data }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error while getting users", success: false, error },
			{ status: 400 }
		);
	}
};

export const PUT = async (req: Request) => {
	if (false) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

	try {
		const { id, displayName, username, role } = await req.json();
		const data = await prisma.user.update({
			where: { id: id },
			data: { username: username, displayName: displayName, role: role },
		});
		return NextResponse.json({ message: "Success", success: true, data }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error while updating user", success: false, error },
			{ status: 400 }
		);
	}
};

export const DELETE = async (req: Request) => {
	try {
		const { id } = await req.json();
		const data = await prisma.user.delete({
			where: { id: id },
		});
		return NextResponse.json({ message: "Success", success: true, data }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error while deleting user", success: false, error },
			{ status: 400 }
		);
	}
};
