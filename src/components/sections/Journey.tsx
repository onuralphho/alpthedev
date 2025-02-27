"use client";
import { FiArrowRight } from "react-icons/fi";
import PageShift from "../PageShift";
import soprahPng from "../../assets/soprah.png";
import budgetApp from "../../assets/Ekran görüntüsü 2023-02-25 163819.jpg";
import pokeDex from "../../assets/Ekran görüntüsü 2023-02-25 164240.jpg";
import soprahChat from "../../assets/2023-06-10 15_18_54-Window.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ITechStack {
	tech: string;
	color: string;
}

interface IProject {
	id: number;
	name: string;
	pictureLink: StaticImageData;
	techStack: ITechStack[];
	description: string;
	link: string;
}

const containerVariants = {
	hidden: { y: 40, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};

const PROJECTS_DATA: IProject[] = [
	{
		id: 1,
		name: "Soprah",
		pictureLink: soprahPng,
		techStack: [
			{
				tech: "Next.js",
				color: "bg-black",
			},
			{
				tech: ".NET Core",
				color: "bg-purple-500",
			},
			{
				tech: "WebSocket (SignalR)",
				color: "bg-cyan-800",
			},
			{
				tech: "WebRTC",
				color: "bg-blue-800",
			},
		],
		description:
			"A real-time voice app built with Next.js, .NET Core, WebRTC, and WebSocket. It delivers a fast interface, robust backend, low-latency audio, and seamless connectivity for a smooth user experience.",
		link: "https://soprah.vercel.app/",
	},
	{
		id: 4,
		name: "Soprah Chat",
		pictureLink: soprahChat,
		techStack: [
			{
				tech: "React",
				color: "bg-blue-500",
			},
			{
				tech: ".NET Core",
				color: "bg-purple-500",
			},
			{
				tech: "AWS",
				color: "bg-orange-500",
			},
			{
				tech: "Render",
				color: "bg-green-400",
			},
			{
				tech: "Azure",
				color: "bg-sky-500",
			},
			{
				tech: "PostgreSql",
				color: "bg-blue-700",
			},
			{
				tech: "TailwindCSS",
				color: "bg-blue-400",
			},
		],
		description:
			"Soprah Chat is a modern web application built using React and .Net Core. The app provides users with a real-time messaging platform, allowing them to connect with friends, family, and colleagues from anywhere in the world.",
		link: "https://soprahchat.onrender.com/",
	},
	{
		id: 2,
		name: "Budget App",
		pictureLink: budgetApp,
		techStack: [
			{
				tech: "Next.js",
				color: "bg-black",
			},
			{
				tech: "Node.js",
				color: "bg-green-500",
			},
			{
				tech: "Vercel",
				color: "bg-black",
			},
			{
				tech: "MongoDB",
				color: "bg-green-700",
			},
			{
				tech: "Bootstrap",
				color: "bg-indigo-500",
			},
		],
		description:
			"The Budget Tracker App features a clean and modern design, with intuitive navigation and a responsive layout that adapts seamlessly to any screen size. The app leverages the power of React to provide real-time updates as the user interacts with the app, with minimal page reloading and an intuitive user interface that makes it easy to add, edit, and delete transactions. ",
		link: "https://budget-app-ivory-two.vercel.app/",
	},
	{
		id: 3,
		name: "PokeDEX",
		pictureLink: pokeDex,
		techStack: [
			{
				tech: "Next.js",
				color: "bg-black",
			},
			{
				tech: "TailwindCSS",
				color: "bg-blue-400",
			},
			{
				tech: "Vercel",
				color: "bg-black",
			},
			{
				tech: "PokeAPI",
				color: "bg-red-500",
			},
		],
		description:
			"The Poke Dex App is a dynamic web application built using React, a popular JavaScript library for building dynamic user interfaces. The app allows users to explore the vast world of Pokemon by providing them with detailed information on every Pokemon in the series.",
		link: "https://poke-dex-rho.vercel.app/",
	},
];

const Journey = () => {
	const [cardRotate, setCardRotate] = useState(0);
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.1 });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.stop();
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			variants={containerVariants}
			initial="hidden"
			animate={controls}
			id="section2"
			className="flex relative overflow-hidden justify-center md:items-center h-[100svh] w-full pt-20 p-10  ">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				className="h-min p-3 lg:p-10 w-[100vw] "
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					440: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}>
				{PROJECTS_DATA.map((project: IProject) => (
					<SwiperSlide
						key={project.id}
						className="select-none my-auto max-w-fit lg:mx-auto relative max-md:mx-6 p-2 group ">
						<span className="z-20   transition-all  absolute right-2 top-2  backdrop-blur-xl bg-[rgba(0,0,0,0.2)] text-[white]   shadow-md shadow-[rgba(0,0,0,0.5)] font-bold  p-2 rounded-lg">
							{project.name}
						</span>
						<a target="_blank" href={project.link !== "dev" ? project.link : ""}>
							<div
								className={`card-inner  ${
									cardRotate === project.id && "card-inner-rotate"
								}`}>
								<div
									className={`card-front transition-all opacity-100 ${
										cardRotate === project.id && "opacity-0"
									}`}>
									<Image
										className="rounded-2xl w-[300px] overflow-hidden shadow-md shadow-[rgba(0,0,0,0.5)]"
										loading="lazy"
										width={400}
										height={800}
										alt={project.name}
										src={project.pictureLink.src}
									/>
								</div>

								<div
									className={`card-back overflow-y-auto flex flex-col gap-4 w-full h-full transition-all bg-white absolute top-0 rounded-2xl pt-14 lg:pt-10 px-5 text-start opacity-0 ${
										cardRotate === project.id && "opacity-100"
									}`}>
									<h2 className="font-bold text-xl max-lg:hidden">
										{project.name}
									</h2>
									<p className="pl-3 pt-2 font-medium max-md:h-52 max-md:overflow-y-scroll">
										{project.description}
									</p>
									Tech Stack:
									<div className="flex flex-wrap gap-2 ">
										{project.techStack.map((item, index) => (
											<span
												key={index}
												className={`${item.color} rounded-full px-3 text-white`}>
												{item.tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</a>
						<button
							aria-label="description"
							onClick={() => {
								if (cardRotate !== 0 && cardRotate === project.id) {
									setCardRotate(0);
								} else {
									setCardRotate(project.id);
								}
							}}
							className="z-20 transition-all  absolute right-2 bottom-2  backdrop-blur-xl bg-[rgba(0,0,0,0.2)] text-[white]   shadow-md shadow-[rgba(0,0,0,0.2)] font-bold  p-2 px-4 rounded-lg">
							<FiArrowRight color="" className=" w-5 h-5" />
						</button>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.div>
	);
};

export default Journey;
