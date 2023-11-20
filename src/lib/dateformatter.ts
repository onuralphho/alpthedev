const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

export const dateformatter = (date: Date) => {
	const currentYear = new Date().getUTCFullYear();
	const day = date.getUTCDate();
	const monthIndex = date.getUTCMonth();
	const year = date.getUTCFullYear();

	const month = months[monthIndex];

	if (year !== currentYear) {
		return day + " " + month + " " + year;
	}

	return day + " " + month;
};
