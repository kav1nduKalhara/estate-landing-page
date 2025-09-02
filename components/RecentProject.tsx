import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { recentProjects, ProjectData } from "@/data/index";

const RecentProjects = () => {
    return (
        <div id="project" className="w-full">
            <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 md:mt-20 lg:mt-[132px] w-full px-4 md:px-6 lg:px-0">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-[20px] mt-8 md:mt-10 lg:mt-[45px] w-full px-4 md:px-6 lg:px-0">
                {recentProjects.map((project: ProjectData) => (
                    <div key={project.id} className="w-full max-w-[447px] mx-auto bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE]">
                        <div className="w-full h-48 md:h-56 lg:h-[263px] relative">
                            <Image
                                src={project.image}
                                alt={project.alt}
                                fill
                                className="object-cover rounded-[14px]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="flex flex-col p-4 md:p-5 lg:px-6 lg:py-6 space-y-3 md:space-y-4">
                            <h1 className="text-[#000000] font-semibold text-lg md:text-xl lg:text-[21px] leading-tight">
                                {project.title}
                            </h1>
                            <p className="font-normal text-sm md:text-base lg:text-[16px] leading-relaxed text-gray-700">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="flex items-center">
                                    <Image
                                        src={project.stars}
                                        alt="rating stars"
                                        width={84}
                                        height={14}
                                        className="md:w-[105px] md:h-[17px]"
                                    />
                                </div>
                                <span className="text-[#000000] font-normal text-sm md:text-base lg:text-[16px] leading-none">
                                    {project.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;