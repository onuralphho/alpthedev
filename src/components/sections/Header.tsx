"use client";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import ValidateIsAdmin from "../admin/ValidateIsAdmin";
const Header = () => {
	const { data: session } = useSession();
	const pathname = usePathname();
	if (pathname === "/admin") return null;
	return (
		<header
			id="navbar"
			className={`absolute flex justify-between p-4 z-[99] w-full  transition-all`}>
			<ul className="flex gap-4 ">
				<li>
					<a aria-label="GitHub" target="_blank" href="https://github.com/onuralphho/">
						<BsGithub
							color={pathname.startsWith("/blog") ? "black" : "white"}
							className="social-icon "
						/>
					</a>
				</li>
				<li>
					<a
						aria-label="Fiverr"
						target="_blank"
						href="https://www.fiverr.com/onuralphho61/create-responsive-react-web-apps-for-you">
						<SiFiverr color="#1dbf73"  className="social-icon" />
					</a>
				</li>
				<li
					style={{
						background: "white",
						borderRadius: "10px",
						height: "max-content",
					}}>
					<a
						aria-label="Linkedin"
						target="_blank"
						href="https://www.linkedin.com/in/onuralp-hacihamzaoglu-283a18175/">
						<BsLinkedin color="#0a66c2" className="social-icon " />
					</a>
				</li>
			</ul>

			{session && session.user && (
				<Link href={"/admin"} className="btn bg-black text-white rounded  p-2 ">
					ADMIN
				</Link>
			)}

			<div
				className={`flex ${
					pathname.startsWith("/blog") ? "text-black" : "text-white"
				} font-bold items-center text-lg md:text-xl gap-2 `}>
				<Link className={`${pathname === "/" && "text-purple-500"}`} href="/">
					Home
				</Link>
				<span>/</span>
				<Link className={`${pathname.includes("/blog") && "text-purple-500"}`} href="/blog">
					Blog
				</Link>
			</div>
		</header>
	);
};

export default Header;
