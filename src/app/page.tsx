import Contact from "@/components/sections/Contact";
import Info from "@/components/sections/Info";
import Journey from "@/components/sections/Journey";
import Navigation from "@/components/sections/Navigation";
//?: should do SEO
export default function Home() {
	return (
		<section className="main-container mx-auto overflow-x-hidden flex flex-col  ">
			<Info />
			<Journey />
			<Contact />
			<Navigation />
		</section>
	);
}
