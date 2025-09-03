import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import RecentProject from "@/components/RecentProject";
import Subscribe from "@/components/Subscribe";
import RealEstatePage from "@/components/RealEstatePage";


export default function Home() {
    return (
        <main className="relative bg-[#FFFFFF] flex justify-center items-center flex-col overflow-hidden px-[30px] pt-[34px] pb-[110px]  mx-auto ">
            <div className="max-w-[1440px] w-full">
                <NavBar/>
                <div className='min-h-[700px] min-[560px]:min-h-[750px] min-[621px]:min-h-[800px] lg:min-h-0'>
                    <Hero/>
                </div>
                <Steps/>
                <RecentProject/>
                <RealEstatePage/>
                <Subscribe/>
            </div>
        </main>
    );
}
