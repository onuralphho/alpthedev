import Header from "@/components/sections/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Onuralp the Developer",
	description: "Onuralp, a passionate software developer who loves crafting unique and functional web applications. Explore a portfolio showcasing skills and experiences across various projects.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<div className="area">
						<ul className="circles">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div className=" relative ">
						<Header />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
