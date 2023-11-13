import prisma from "@/lib/db";
import React from "react";
import profilePicture from "@/assets/profile.jpg";

async function BlogDetails({ params }: { params: { blogId: string } }) {
	const blogDetails = await prisma.blog.findUnique({ where: { id: Number(params.blogId) } });
	return <div className=" bg-white text-black min-h-screen py-20">
    <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-7xl font-extrabold">{blogDetails?.title}</h1>
        <div className="flex items-center gap-2">
            <img src={profilePicture.src} alt="Author's profile picture" className="w-16 aspec rounded-full" />
            <span className="text-lg  font-semibold">Onuralp</span>
        </div>
        <div className="text-xl" dangerouslySetInnerHTML={{__html:blogDetails?.content ?? "<div>Bir Hata Oluştu...</div>"}}></div>
    </div>
  </div>;
}

export default BlogDetails;
