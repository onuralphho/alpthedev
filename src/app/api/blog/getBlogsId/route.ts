import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const GET = async () => {
	try {
		const data = await prisma.blog.findMany({
			orderBy: { createdAt: "desc" },
			select: { id: true },
		});
		return NextResponse.json({ message: "Success", data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error while posting", error }, { status: 400 });
	}
};
