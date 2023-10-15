"use client"
import { scrollInto } from "@/lib/scrollInto";
import React from "react";

type Props = {};

function Navigation({}: Props) {
	return (
		<nav className="absolute bottom-0 w-full flex justify-center z-50">
			<ul className="flex gap-0.5 text-[white] font-bold rounded-t-xl h-40 translate-y-32 lg:translate-y-28 ">
				<li
                    className="cursor-pointer bg-[#a431eb] p-2 lg:p-4  peer-hover:opacity-60 rounded-tl-xl hover:-translate-y-6 transition-transform" 
					onClick={() => {
						scrollInto("section1");
					}}>
					About Me
				</li>
				<li
                    className="cursor-pointer bg-[#a431eb] p-2 lg:p-4 peer-hover:opacity-60 hover:-translate-y-6 transition-transform"
					onClick={() => {
						scrollInto("section2");
					}}>
					Side Projects
				</li>

				<li
                    className="cursor-pointer bg-[#a431eb] p-2 lg:p-4 peer-hover:opacity-60 rounded-tr-xl hover:-translate-y-6 transition-transform"
					onClick={() => {
						scrollInto("section3");
					}}>
					Contact
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
