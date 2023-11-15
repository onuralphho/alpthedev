import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		username: string;
		role: "ADMIN" | "USER";
	}
	interface Session {
		user: User & {
			username: string;
			role: "ADMIN" | "USER";
		};
		token:User &  {
			username: string;
			role: "ADMIN" | "USER";
		};
	}
}
