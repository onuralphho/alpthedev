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

	jwt: { secret: process.env.JWT_SECRET },
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "Credentials",
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
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
					username: existingUser.username,
					role: existingUser.role,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			console.log("USERRR", user);
			if (token) {
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
