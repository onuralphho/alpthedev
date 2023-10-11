import { ImageResponse } from "next/server";


export const size = {
	width: 500,
	height: 200,
};

export const contentType = "image/jpg";


export default async function og() {
	return new ImageResponse(
		(
			<div tw="relative flex items-center justify-center">
				<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--apOSdFFu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lctqqh3t7kfnwpxljhl7.jpg" alt={"Web developer"} />
				<div tw="absolute flex bg-black opacity-50 inset-0 " />
				<div tw="absolute flex items-center top-2 w-full ">
					<p tw="text-white text-4xl flex font-bold m-5">Qualified Web Developer</p>
					<p tw="text-indigo-200 text-xl flex font-bold m-5">
						Onuralp the developer
					</p>
				</div>
			</div>
		),
		size
	);
}
