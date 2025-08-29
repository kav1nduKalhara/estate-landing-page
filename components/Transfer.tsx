import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Transfer = () => {
    return(
        <div className="relative flex justify-center items-center mt-6 lg:mt-[45px] px-4 lg:px-[97px]">
            <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1245px] bg-[#FFFFFF]">
                <div className="flex flex-col items-center lg:items-start p-6 lg:p-12 lg:pr-0 lg:max-w-[497px] ">
                    <h1 className="text-[#000000] font-semibold text-2xl  lg:text-[38px]  leading-tight whitespace-nowrap">
                        The transfer of real estate
                    </h1>
                    <p className="text-[#000000] font-normal text-[16px]  leading-relaxed mt-4 md:mt-[24px] max-w-md lg:max-w-[474px]">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-start gap-[24px] sm:gap-6 mt-6 lg:mt-[45px] w-full sm:w-auto">
                        <Button className="flex items-center justify-center w-full sm:w-[153px] sm:h-[60px] h-12  rounded-[40px] bg-[#1F1F1F] text-[#FEFEFF] font-normal text-sm md:text-base leading-tight hover:bg-[#333333] ">
                            <Link href="/" className="w-full h-full flex items-center justify-center">
                                Book Now!
                            </Link>
                        </Button>
                        <Button className="flex items-center justify-center w-full sm:w-[153px] sm:h-[60px] h-12 rounded-[40px] bg-[#FEFEFF] text-[#1F1F1F] font-normal text-sm md:text-base leading-tight hover:bg-[#F5F5F5] border border-[#BEBEBE]">
                            <Link href="/" className="w-full h-full flex items-center justify-center">
                                Read More
                            </Link>
                        </Button>
                    </div>
                    <div className="flex  justify-center gap-8 sm:gap-12  lg:gap-[95px] mt-8  lg:mt-[80px] w-full sm:pl-[98px]">
                        <div className="flex flex-col items-start">
                            <h2 className="text-[#000000] font-semibold text-4xl  lg:text-[67px]  leading-[120%]">
                                12+
                            </h2>
                            <p className="text-[#000000] font-normal text-sm md:text-base leading-[120%]">
                                Customers
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[#000000] font-semibold text-4xl  lg:text-[67px] leading-[120%]">
                                14+
                            </h2>
                            <p className="text-[#000000] font-normal text-sm md:text-base leading-[120%]">
                                Offices
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[#000000] font-semibold text-4xl  lg:text-[67px]  leading-[120%]">
                                10+
                            </h2>
                            <p className="text-[#000000] font-normal text-sm md:text-base leading-[120%]">
                                Students
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:max-w-[550px]">
                    <Image
                        src="/40.svg"
                        alt="house"
                        width={550}
                        height={576}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover lg:rounded-[14px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Transfer;