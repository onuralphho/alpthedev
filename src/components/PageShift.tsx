"use client";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { scrollInto } from "@/lib/scrollInto";
interface Props {
	way: "down" | "up";
	info: string;
	children: string;
}

const PageShift = (props: Props) => {

	return (
		<button
		
			onClick={() => {
				scrollInto(props.children);
			}}
			className={`absolute bg-[#ffffff3d] backdrop-blur-sm z-10 max-w-fit m-auto left-0 right-0 group  border p-1  md:p-2 rounded-full flex items-center justify-center md:opacity-40 hover:opacity-80 transition-all  ${
				props.way === "up"
					? "max-md:left-24 max-md:bottom-0 max-md:mb-2 md:top-0 md:mt-2"
					: "max-md:-left-24 bottom-0 mb-2"
			}`}>
			{props.way === "up" ? (
				<SlArrowUp
					color="white"
					className="  w-20 h-5 md:w-20 md:h-10 max-md:opacity-0 "
				/>
			) : (
				<SlArrowDown
					color="white"
					className=" w-20 h-5 md:w-20 md:h-10 max-md:opacity-0 "
				/>
			)}
			<span className="absolute text-white md:text-3xl md:opacity-0 group-hover:md:translate-x-32 whitespace-pre z-0 group-hover:md:opacity-100 duration-300">
				{props.info}
			</span>
		</button>
	);
};

export default PageShift;
