import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Transfer = () => {
    return(
        <div className="relative flex justify-center items-center mt-[45px]">
            <div className=" flex justify-between w-[1245px] h-[577px] bg-[#FEFEFF] rounded-[14px]">
                <div className="relative flex flex-col items-start  pr-[175px] mt-[24px]">
                    <h1 className="text-[#000000] font-[600] text-[38px] leading-[120%]">
                        The transfer of real estate
                    </h1>
                    <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[24px] max-w-[474px] max-h-[120px]">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
                    </p>
                    <div className="flex justify-center gap-[24px] mt-[45px]">
                        <Button className="flex items-center justify-center w-[153px] h-[60px] rounded-[40px] bg-[#1F1F1F] text-[#FEFEFF] font-[400] text-[16px] leading-[120%] hover:bg-[#BEBEBE]">
                            <Link href="/">Book Now!</Link>
                        </Button>
                        <Button className="flex items-center justify-center w-[153px] h-[60px] rounded-[40px] bg-[#FEFEFF] text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:bg-[#BEBEBE] border border-[#BEBEBE] border-width-[1px]">
                            <Link href="/">Read More</Link>
                        </Button>
                    </div>
                    <div className="flex justify-center gap-[95px] mt-[80px]">
                        <div className="flex flex-col items-start ">
                            <h1 className="text-[#000000] font-[600] text-[67px] leading-[120%]">
                                12+
                            </h1>
                            <p className="text-[#000000] font-[400] text-[16px] leading-[120%]">
                                Customers
                            </p>
                        </div>
                        <div className="flex flex-col items-start ">
                            <h1 className="text-[#000000] font-[600] text-[67px] leading-[120%]">
                                14+
                            </h1>
                            <p className="text-[#000000] font-[400] text-[16px] leading-[120%]">
                                Offices
                            </p>
                        </div>
                        <div className="flex flex-col items-start ">
                            <h1 className="text-[#000000] font-[600] text-[67px] leading-[120%]">
                                10+
                            </h1>
                            <p className="text-[#000000] font-[400] text-[16px] leading-[120%]">
                                Students
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/40.svg" alt="house" width={550} height={576} className="rounded-[14px]"/>
                </div>
            </div>
        </div>
    )
}

export default Transfer;