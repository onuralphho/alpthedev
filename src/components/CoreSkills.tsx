import NameCode from "./NameCode";
import jsLogo from "../assets/JavaScript-logo.png";
import reactLogo from "../assets/React-icon.svg.png";
import nextLogo from "../assets/next-js-icon-logo-EE302D5DBD-seeklogo.com.png";
import htmllogo from "../assets/html5-logo-html-logo-0.png";
import csslogo from "../assets/CSS3_logo_and_wordmark.svg.png";
import dotnetLogo from "../assets/NET_Core_Logo.svg.png";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
const CoreSkills = () => {
	return (
		<Tilt className="" tiltMaxAngleX={10} tiltMaxAngleY={10}>
			<div className="relative  flex gap-1  md:gap-5  flex-col p-2 md:p-3 aspect-video shadow bg-[#ffffff2d] backdrop-blur-sm border-l-[0.1px] border-t-[1px] rounded-lg">
				<NameCode />

				<div className="relative grid grid-cols-2 h-max gap-2 text-sm  shadow-md hover:z-50 border border-transparent hover:border-white hover:scale-110 transition-all p-2 pt-8 md:p-4 md:pt-8 bg-[#252525] rounded-lg">
					<div className="absolute flex gap-2 right-2 top-2">
						<span className="aspect-square w-4 bg-green-500 rounded-full"></span>
						<span className="aspect-square w-4 bg-yellow-500 rounded-full"></span>
						<span className="aspect-square w-4 bg-red-500 rounded-full"></span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center md:h-[60px] p-2 ">
						<Image width={200} height={200} src={reactLogo.src} className="w-7 md:w-10" alt="React logo" />
						<span className="font-semibold">React</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center md:h-[60px] p-2 ">
						<Image width={200} height={200} src={dotnetLogo.src} className="w-7 md:w-10" alt="Dotnet logo" />
						<span className="font-semibold">.Net Core</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center md:h-[60px] p-2 ">
						<Image width={200} height={200} src={nextLogo.src} className="w-7 md:w-10" alt="Nextjs logo" />
						<span className="font-semibold">Next.js</span>
					</div>
					<div className="bg-white flex  gap-2 rounded-md justify-around items-center md:h-[60px] p-2 ">
						<Image width={200} height={200} src={jsLogo.src} className="w-7 md:w-10" alt="Javascript logo" />
						<span className="font-semibold">Javascript</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center md:h-[60px] p-2 ">
						<Image width={200} height={200} src={htmllogo.src} className="w-7 md:w-10" alt="Html logo" />
						<span className="font-semibold">Html</span>
					</div>
					<div className="bg-white flex gap-4 rounded-md justify-center items-center md:h-[60px] p-2 ">
						<Image width={200} height={200} src={csslogo.src} className="w-7 md:w-10" alt="CSS logo" />
						<span className="font-semibold">CSS</span>
					</div>
				</div>
			</div>
		</Tilt>
	);
};

export default CoreSkills;
