import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Guide from "@/components/Guide";
import RecentProject from "@/components/RecentProject";
import RecentProjectCard from "@/components/RecentProjectCard";
import {Globe} from "lucide-react";
import Global from "@/components/Global";
import Transfer from "@/components/Transfer";
import Subscribe from "@/components/Subscribe";

export default function Home() {
    return (
        <main className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 pt-6 pb-20 max-w-[1440px] mx-auto">
            <NavBar/>
            <Hero/>
            <Steps/>
            <Guide/>
            <RecentProject/>
            <RecentProjectCard/>
            <Global/>
            <Transfer/>
            <Subscribe/>
        </main>
    );
}