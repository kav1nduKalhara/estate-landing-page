import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const Hero = () => {
    return(
        <div className="relative flex items-center justify-center ">
            <div className="relative w-full rounded-[15px] mt-[32px] min-h-[630px] sm:min-h-[850px] md:min-h-[950px] lg:min-h-[500px] "
                 style={{background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'}}>
                <Image
                    src="/fade.png"
                    alt="fade overlay"
                    fill
                    className="object-cover rounded-[15px] opacity-50"
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between  p-6 sm:p-8 lg:pl-[46px] lg:pr-0">
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 pt-8 lg:pt-[91px] pb-8 lg:pb-[176px] text-center lg:text-left">
                        <div className="mb-[15px] z-10">
                            <h2 className="text-black font-normal text-sm sm:text-base leading-tight">
                                Welcome to Realstate
                            </h2>
                        </div>

                        <div className="mb-[15px] z-10 ">
                            <h1 className="text-black font-semibold text-3xl sm:text-4xl  lg:text-[67px] leading-tight">
                                Manage Your Property
                            </h1>
                        </div>

                        <div className="mb-[24px] max-w-md z-10">
                            <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                                Your will have everything nearby supermarket, buses,
                                station, the carmen neighborhood, etc
                            </p>
                        </div>

                        <div className="relative flex w-full max-w-md z-10">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-12 sm:h-14 lg:h-[60px] rounded-full bg-[#FEFEFF] pl-6 pr-32 sm:pr-36 lg:pr-40 font-normal text-sm sm:text-base "
                            />
                            <Button className="absolute top-0 right-0 h-full  px-4 sm:px-6 lg:px-8 rounded-full bg-black  ">
                                <span className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight whitespace-nowrap">
                                    Get a Quote
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className=" z-0 flex absolute lg:top-[60px] top-86 right-0">
                        <Image src="/Group2.svg" alt="Group2" width={785} height={667}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;