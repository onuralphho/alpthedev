"use client"
import { scrollInto } from "@/lib/scrollInto";
import React from "react";

type Props = {};

function Navigation({}: Props) {
	return (
		<nav className="fixed bottom-0 h-min w-full flex justify-center z-40">
			<ul className="flex gap-0.5 text-[white] font-bold rounded-t-xl ">
				<li
                    className="cursor-pointer bg-[#a431eb] p-2  peer-hover:opacity-60 rounded-tl-xl hover:-translate-y-2 transition-transform hover:bg-[#d187ff]" 
					onClick={() => {
						scrollInto("section1");
					}}>
					About Me
				</li>
				<li
                    className="cursor-pointer bg-[#a431eb] p-2 peer-hover:opacity-60 hover:-translate-y-2 transition-transform hover:bg-[#d187ff]"
					onClick={() => {
						scrollInto("section2");
					}}>
					Side Projects
				</li>

				<li
                    className="cursor-pointer bg-[#a431eb] p-2 peer-hover:opacity-60 rounded-tr-xl hover:-translate-y-2 transition-transform hover:bg-[#d187ff]"
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
