import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export const POST =async (req:Request) => {
    try {
        const {content,title} = await req.json();
        const data = await prisma.blog.create({data:{content,title}});
        return NextResponse.json({message:"Succes",data},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"Error while posting",error},{status:400})
    }
}