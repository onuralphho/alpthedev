import NameCode from "./NameCode";
import tsLogo from "../assets/Typescript_logo_2020.svg.png";
import reactLogo from "../assets/React-icon.svg.png";
import nextLogo from "../assets/next-js-icon-logo-EE302D5DBD-seeklogo.com.png";
import mongoLogo from "@/assets/download.png"
import postgreLogo from "@/assets/Postgresql_elephant.svg.png"
import dotnetLogo from "../assets/NET_Core_Logo.svg.png";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const CoreSkills = () => {
	return (
		<div className="relative flex justify-around gap-1  lg:gap-5 p-2 lg:p-3 rounded-lg z-50">
			<Tilt  className="h-max" tiltMaxAngleX={10} tiltMaxAngleY={10}>
			<div className="w-10 aspect-square rounded-l-lg absolute bg-[#a431eb] grid place-items-center -left-9 top-4 lg:hidden text-white bold"><span>{"<"}</span> </div>	
				<div className=" w-[300px] md:w-[400px] lg:w-[500px] relative grid grid-cols-2 lg:grid-cols-3 h-max gap-2 text-sm  shadow-md hover:z-50 border border-transparent hover:border-white lg:hover:scale-110 transition-all p-2 pt-5 lg:p-4 lg:pt-5 bg-[#252525] rounded-lg">
					<div className="absolute flex gap-2 right-2 top-2">
						<span className="aspect-square w-4 bg-green-500 rounded-full"></span>
						<span className="aspect-square w-4 bg-yellow-500 rounded-full"></span>
						<span className="aspect-square w-4 bg-red-500 rounded-full"></span>
					</div>
					<NameCode />
					
					<div className="bg-white flex gap-2 lg:gap-4 rounded-md justify-center items-center lg:h-[60px] p-2 ">
						<Image
							width={200}
							height={200}
							src={reactLogo.src}
							className="w-7 lg:w-10"
							alt="React logo"
						/>
						<span className="font-semibold">React</span>
					</div>
					<div className="bg-white flex gap-2 lg:gap-4 rounded-md justify-center items-center lg:h-[60px] p-2 ">
						<Image
							width={200}
							height={200}
							src={dotnetLogo.src}
							className="w-7 lg:w-10"
							alt="Dotnet logo"
						/>
						<span className="font-semibold">.Net Core</span>
					</div>
					<div className="bg-white flex gap-2 lg:gap-4 rounded-md justify-center items-center lg:h-[60px] p-2 ">
						<Image
							width={200}
							height={200}
							src={nextLogo.src}
							className="w-7 lg:w-10"
							alt="Nextjs logo"
						/>
						<span className="font-semibold">Next.js</span>
					</div>
					<div className="bg-white flex  gap-2 rounded-md justify-around items-center lg:h-[60px] p-2 ">
						<Image
							width={200}
							height={200}
							src={tsLogo.src}
							className="w-7 lg:w-10"
							alt="Javascript logo"
						/>
						<span className="font-semibold">TypeScript</span>
					</div>
					<div className="bg-white flex gap-2 lg:gap-4 rounded-md justify-center items-center lg:h-[60px] p-2 ">
						<Image
							width={200}
							height={200}
							src={mongoLogo.src}
							className="w-7 lg:w-10"
							alt="Html logo"
						/>
						<span className="font-semibold">mongoDB</span>
					</div>
					<div className="bg-white flex gap-2 lg:gap-4 rounded-md justify-center items-center lg:h-[60px] p-2 ">
						<Image
							width={200}
							height={200}
							src={postgreLogo.src}
							className="w-7 lg:w-10"
							alt="CSS logo"
						/>
						<span className="font-semibold">PostgreSQL</span>
					</div>
				</div>
			</Tilt>
		</div>
	);
};

export default CoreSkills;
