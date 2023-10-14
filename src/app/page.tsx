import Contact from "@/components/sections/Contact";
import Info from "@/components/sections/Info";
import Journey from "@/components/sections/Journey";
//?: should do SEO
export default function Home() {
	return (
		<main className="main-container gap-4  overflow-x-hidden overflow-y-scroll h-screen mx-auto  flex flex-col  ">
			<div className="main-item h-[100svh]">
				<Info />
			</div>
			<div className="main-item h-[100svh]">
				<Journey />
			</div>
			<div className="main-item h-[100svh]">
				<Contact />
			</div>
			<div className=" main-item sm:hidden"></div>
		</main>
	);
}
