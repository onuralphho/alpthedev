"use client"
export const dateformatter = (date: Date) => {
	const currentYear = new Date().getUTCFullYear();

	const day = date.getUTCDate();
	const month = date.toLocaleDateString("default", { month: "short" });
	const year = date.getUTCFullYear();


	if (year !== currentYear) {
		return day + " " + month + " " + year;
	}

	return day + " " + month;
};
