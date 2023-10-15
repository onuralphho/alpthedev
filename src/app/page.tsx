import Contact from "@/components/sections/Contact";
import Info from "@/components/sections/Info";
import Journey from "@/components/sections/Journey";
//?: should do SEO
export default function Home() {
    return (
        <main className="main-container overflow-x-hidden overflow-y-scroll h-screen mx-auto  flex flex-col  ">
            <div className="main-item ">
                <Info />
            </div>
            <div className="main-item ">
                <Journey />
            </div>
            <div className="main-item ">
                <Contact />
            </div>
        </main>
    );
}
