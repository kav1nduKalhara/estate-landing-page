import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const RecentProject = () => {
    return(
        <div id="project" className="relative flex justify-between mt-[132px] w-full">
            <div className="relative justify-center flex flex-col ">
                <h2 className="text-[#00000] font-[400] text-[16px] [leading-120%] max-h-[19px] ">
                    Best Project of the Years
                </h2>
                <h1 className="text-[#00000] font-[600] text-[50px] [leading-120%] max-h-[60px] mt-[16px]">
                    Our recent projects
                </h1>
            </div>
            <div className="relative flex items-center justify-center mt-[16px] gap-4 ">
                <Button className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#FEFEFF] hover:bg-[#BEBEBE]">
                    <Image src="/arrow-left.svg" alt="left-right" width={24} height={24}/>
                </Button>
                <Button className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#000] hover:bg-[#BEBEBE] gap-[16px]">
                    <Image src="/arrow-right.svg" alt="arrow-right" width={24} height={24}/>
                </Button>
            </div>
        </div>
    )
}

export default RecentProject;