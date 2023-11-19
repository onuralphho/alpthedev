import { Blog, BlogCategories, User } from "@prisma/client";


export type BlogsWithCategoryAndUser = Blog & {
	category: BlogCategories;
	user:User
};

export type BlogsWithUser = Blog & {
	user:User
};

export type BlogsWithCategory = Blog & {
	category: BlogCategories;
};

