import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Guide from "@/components/Guide";
import RecentProject from "@/components/RecentProject";
import RecentProjectCard from "@/components/RecentProjectCard";
import Global from "@/components/Global";
import Transfer from "@/components/Transfer";
import Subscribe from "@/components/Subscribe";


export default function Home() {
    return (
        <main className="relative bg-[#FFFFFF] flex justify-center items-center flex-col overflow-hidden px-[30px] pt-[34px] pb-[110px]  mx-auto ">
            <div className="max-w-[1440px] w-full">
                <NavBar/>
                <Hero/>
                <Steps/>
                <Guide/>
                <RecentProject/>
                <RecentProjectCard/>
                <Global/>
                <Transfer/>
                <Subscribe/>
            </div>
        </main>
    );
}
