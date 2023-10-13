"use client";
import PageShift from "../PageShift";
import profilePicture from "@/assets/profile.jpg";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CoreSkills from "../CoreSkills";
import { scrollInto } from "@/lib/scrollInto";
import Image from "next/image";

const Info = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.1 });
	const pictureVariants = {
		visible: { opacity: 1, transition: { duration: 0.7 }, x: 0 },
		hidden: { opacity: 0, x: -50 },
	};
	const skillsVariants = {
		visible: { opacity: 1, transition: { duration: 0.7 }, x: 0 },
		hidden: { opacity: 0, x: 50 },
	};
	const fadeVariants = {
		visible: { opacity: 1, transition: { duration: 0.7, delay: 1 }, x: 0 },
		hidden: { opacity: 0 },
	};

	const selfInfo = [
		{ text: "Developer", color: "#a431eb" },
		{ text: "Engineer", color: "#f58402" },
		{ text: "Designer", color: "#0cfd95" },
	];
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.stop();
		}
	}, [controls, inView]);
	return (
		<div
			id="section1"
			className="flex  overflow-hidden relative lg:px-48 lg:gap-2 lg:pt-44  h-[100svh]   w-full pt-20 p-5 lg:p-10 bg-gradient-to-b from-[#0cfd9447]   ">
			<div className="flex max-lg:flex-col gap-5">
				<motion.div
					ref={ref}
					variants={pictureVariants}
					initial="hidden"
					animate={controls}
					className=" w-[100px] lg:w-[400px] flex flex-col  gap-10 pt-5 ">
					<Image
						src={profilePicture.src}
						alt="profile picture of author"
						width={400}
						height={400}
						className="  rounded-full w-full shadow-lg "
					/>
				</motion.div>
				<motion.div
					ref={ref}
					variants={skillsVariants}
					initial="hidden"
					animate={controls}
					className="flex flex-col lg:gap-2 justify-start flex-wrap ">
					<div className="flex max-lg:flex-col gap-2 justify-start lg:items-center ">
						<span className="text-3xl lg:text-7xl font-bold text-white">
							Hi, I{"'"}m
						</span>
						<span className="flex flex-col gap-7 lg:gap-10 font-bold h-20 lg:h-28 overflow-hidden">
							{selfInfo.map((i, index) => (
								<span
									key={index}
									style={{ color: i.color }}
									className={` text-5xl lg:text-8xl toast `}>
									{i.text}
								</span>
							))}
						</span>
					</div>
					<div className="lg:w-8/12">
						<article className="text-white text-sm lg:text-xl">
							As a
							<span className="text-lg lg:text-4xl text-[#0cfd95] font-bold">
								{" "}
								Full Stack Developer
							</span>{" "}
							for the past three years, I{"'"}ve had the opportunity
							to architect and implement web solutions, from
							responsive web applications to seamless user
							interfaces, all while striving for the perfect
							fusion of technology and creativity.
						</article>
					</div>
					<button
						onClick={() => {
							scrollInto("section3");
						}}
						aria-label="discover"
						className="p-4 w-max font-bold rounded-lg lg:text-xl text-white my-4 bg-[#a431eb] hover:bg-[#33b07a] transition-all">
						Connect
					</button>
				</motion.div>
			</div>

			<motion.div
				ref={ref}
				variants={fadeVariants}
				initial="hidden"
				animate={controls}
				className="absolute max-lg:top-10 lg:bottom-4 -right-[300px] transition-all lg:right-4 max-lg:z-50 group hover:right-0">
				
				<CoreSkills />
			</motion.div>

			<PageShift way="down" info="Projects">
				section2
			</PageShift>
		</div>
	);
};

export default Info;
