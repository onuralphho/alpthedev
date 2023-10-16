import Contact from "@/components/sections/Contact";
import Info from "@/components/sections/Info";
import Journey from "@/components/sections/Journey";
//?: should do SEO
export default function Home() {
	return (
		<main className="main-container mx-auto overflow-x-hidden flex flex-col  ">
			<Info />
			<Journey />
			<Contact />
		</main>
	);
}
