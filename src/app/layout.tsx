import Header from "@/components/sections/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AlertProvider from "@/providers/AlertProvider";
import "./github-markdown.css";
import Main from "@/components/interface/Main";
import { Suspense } from "react";
import Loading from "./loading";
import SessionProvider from "@/providers/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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
							<Header />
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</Main>
					</AlertProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
