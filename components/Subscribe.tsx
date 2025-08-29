import Image from "next/image";
import {Button} from "@/components/ui/button";

const Subscribe = () => {
    return(
        <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 lg:mt-[139px] mb-8 sm:mb-12">
            <div className="relative w-full max-w-[1380px] min-h-[40px]  lg:h-[457px] rounded-[15px]"
                 style={{background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'}}>

                <Image
                    src="/fade.png"
                    alt="fade overlay"
                    fill
                    className="object-cover rounded-[15px] opacity-50"
                />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-12">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-3/5 mb-8 lg:mb-0">
                        <div className="mb-4 sm:mb-6">
                            <h1 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight max-w-2xl">
                                Subscribe Our Newsletter
                            </h1>
                        </div>

                        <div className="mb-6 sm:mb-8 lg:mb-12 max-w-lg lg:max-w-xl">
                            <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                            </p>
                        </div>

                        <div className="relative flex w-full max-w-md lg:max-w-lg">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-12 sm:h-14 lg:h-[60px] rounded-full bg-[#FEFEFF] pl-6 pr-32 sm:pr-36 lg:pr-40 font-normal text-sm sm:text-base  "
                            />
                            <Button className="absolute top-0 right-0 h-full sm:h-12 lg:h-full px-4 sm:px-6 lg:px-8 rounded-full bg-black hover:bg-gray-800 transition-colors">
                                <span className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight whitespace-nowrap">
                                    Get a Quote
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:flex absolute lg:-top-17 lg:right-0">
                        <img src="/footer.svg" alt="footer" className="w-[606px] h-[557px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;