import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";

export default function Home() {
    return (
        <main className="px-[30px] pt-[34px] pb-[110px]">
            <NavBar/>
            <Hero/>
            <Steps/>
        </main>
    );
}