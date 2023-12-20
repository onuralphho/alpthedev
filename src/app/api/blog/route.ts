import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const POST = async (req: Request) => {
	try {
		const { content, title, description, descriptionURL, userId, categoryId } =
			await req.json();
		const data = await prisma.blog.create({
			data: { content, title, userId, description, descriptionURL, categoryId },
		});
		return NextResponse.json({ message: "Success", data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error while posting", error }, { status: 400 });
	}
};
