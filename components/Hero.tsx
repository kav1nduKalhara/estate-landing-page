import Image from "next/image";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return(
        <div className="relative flex items-center justify-center min-h-[calc(100vh-134px)]  ">
            <div className="relative w-full rounded-[15px] mt-[32px] "
                 style={{background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'}}>
                <Image
                    src="/fade.png"
                    alt="fade overlay"
                    fill
                    className="object-cover rounded-[15px] opacity-50"
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between  p-6 sm:p-8 lg:pl-[46px] lg:pr-0">
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 pt-8 lg:pt-[91px] pb-8 lg:pb-[176px] text-center lg:text-left">
                        <div className="mb-[15px]">
                            <h2 className="text-black font-normal text-sm sm:text-base leading-tight">
                                Welcome to Realstate
                            </h2>
                        </div>

                        <div className="mb-[15px] ">
                            <h1 className="text-black font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] leading-tight">
                                Manage Your Property
                            </h1>
                        </div>

                        <div className="mb-[24px] max-w-md">
                            <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                                Your will have everything nearby supermarket, buses,
                                station, the carmen neighborhood, etc
                            </p>
                        </div>

                        <div className="relative flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-12 sm:h-14 lg:h-[60px] rounded-full bg-[#FEFEFF] pl-6 pr-32 sm:pr-36 lg:pr-40 font-normal text-sm sm:text-base border-0 outline-none shadow-sm"
                            />
                            <Button className="absolute top-0 right-0 h-full sm:h-12 lg:h-full px-4 sm:px-6 lg:px-8 rounded-full bg-black hover:bg-gray-800 transition-colors">
                                <span className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight whitespace-nowrap">
                                    Get a Quote
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden lg:flex absolute top-[60px] left-[625px]">
                        <img src="/Group2.svg" alt="Group2" className="w-[785px] h-[667px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;