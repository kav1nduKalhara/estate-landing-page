import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const RecentProject = () => {
    return(
        <div id="project" className="relative flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 md:mt-20 lg:mt-[132px] w-full px-4 md:px-6 lg:px-0">
            <div className="relative justify-center flex flex-col text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-[#000000] font-normal text-sm md:text-base lg:text-[16px] leading-[1.2] mb-2 md:mb-4">
                    Best Project of the Years
                </h2>
                <h1 className="text-[#000000] font-semibold text-2xl md:text-3xl lg:text-[50px] leading-[1.2] lg:max-h-[60px]">
                    Our recent projects
                </h1>
            </div>
            <div className="hidden relative lg:flex items-center justify-center gap-3 md:gap-4">
                <Button className="flex items-center justify-center w-10 h-10 md:w-[45px] md:h-[45px] rounded-full bg-[#FEFEFF] hover:bg-[#BEBEBE] border border-gray-200 transition-colors">
                    <Image src="/arrow-left.svg" alt="previous" width={20} height={20} className="md:w-6 md:h-6"/>
                </Button>
                <Button className="flex items-center justify-center w-10 h-10 md:w-[45px] md:h-[45px] rounded-full bg-[#000] hover:bg-[#333] transition-colors">
                    <Image src="/arrow-right.svg" alt="next" width={20} height={20} className="md:w-6 md:h-6"/>
                </Button>
            </div>
        </div>
    )
}

export default RecentProject;