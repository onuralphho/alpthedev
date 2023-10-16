import Header from "@/components/sections/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/sections/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	alternates: { canonical: "https://onuralpthedev.vercel.app" },
	title: "Web Developer",
	description:
		"Onuralp, a passionate software developer who loves crafting unique and functional web applications. Explore a portfolio showcasing skills and experiences across various projects.",
	verification: {
		google: "google-site-verification=H5KCqVTa4IoEfC6gAUiy5g352hkeGiyAzXOEe9M2xEI",
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="bg-[#000000b8]">
					<Header />
					{children}
					<Navigation />
				</div>
			</body>
		</html>
	);
}
