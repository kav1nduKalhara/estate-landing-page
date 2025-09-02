import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Guide from "@/components/Guide";
import RecentProject from "@/components/RecentProject";
import Global from "@/components/Global";
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
                <Global/>
                <Subscribe/>
            </div>
        </main>
    );
}
