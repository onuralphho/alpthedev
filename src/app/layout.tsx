import Main from "@/components/interface/Main";
import Header from "@/components/sections/Header";
import { authOptions } from "@/lib/auth";
import AlertProvider from "@/providers/AlertProvider";
import SessionProvider from "@/providers/SessionProvider";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./github-markdown.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	alternates: { canonical: "https://onuralpthedev.vercel.app" },
	title: { default: "The Dev", template: "%s | The Dev" },
	description:
		"Onuralp, a passionate software developer who loves crafting unique and functional web applications. Explore a portfolio showcasing skills and experiences across various projects.",
	verification: {
		google: "google-site-verification=H5KCqVTa4IoEfC6gAUiy5g352hkeGiyAzXOEe9M2xEI",
	},
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					<AlertProvider>
						<Main>
							<div className="fixed top-0">
								<NextTopLoader
									color={"#a855f7"}
									initialPosition={0.08}
									crawlSpeed={200}
									height={3}
									crawl={true}
									easing="ease"
									speed={200}
									showSpinner={false}
									zIndex={9999}
								/>
							</div>
							<Header />
							{children}
						</Main>
					</AlertProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
