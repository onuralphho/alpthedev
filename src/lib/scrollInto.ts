export const scrollInto = (props: string) => {
	const element = document.getElementById(props);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};
