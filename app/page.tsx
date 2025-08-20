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

export default function Home() {
    return (
        <main className="px-[30px] pt-[34px] pb-[110px]">
            <NavBar/>
            <Hero/>
            <Steps/>
            <Guide/>
            <RecentProject/>
            <RecentProjectCard/>
            <Global/>
            <Transfer/>
        </main>
    );
}