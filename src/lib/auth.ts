import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: "/blog/sign-in",
	},
	session: {
		strategy: "jwt",
	},

	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "jsmith",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (!credentials?.username || !credentials.password) {
					return null;
				}
				const existingUser = await prisma.user.findUnique({
					where: { username: credentials.username },
				});

				if (!existingUser) {
					return null;
				}

				const passwordMatch =
					existingUser.password === credentials.password;

				if (!passwordMatch) {
					return null;
				}
				return {
					id: existingUser.id + "",
					name:existingUser.displayName,
					username: existingUser.username,
					role: existingUser.role,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return {
					...token,
					username: user.username,
					role: user.role,
					id: user.id,
				};
			}
			return token;
		},
		async session({ session, token }) {			
			return {
				...session,
				user: {
					...session.user,
					username: token.username,
					role: token.role,
					id: token.id,
				},
			};
		},
	},
};
