import Image from "next/image";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return(
        <div className=" relative flex items-center justify-center h-[calc(100vh -134px)]">
            <div className=" relative w-full h-[617px] rounded-[15px] mt-[32px]  "
            style={{background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'}}>
                <Image src="/fade.png" alt="fade overlay" fill className="object-cover rounded-[15px] opacity-50"/>
                <div className="flex items-center pl-[46px] z-1">
                    <div className="flex flex-col item-center pt-[91px]">
                        <div className="relative max-w-[176px] max-h-[19px] ">
                            <h2 className="text-[#00000] font-[400] text-[16px] leading-[120%]">
                                Welcome to Realstate
                            </h2>
                        </div>
                        <div className="relative max-w-[479px] max-h-[160px] mt-[15px]">
                            <h1 className="text-[#00000] font-[600] text-[67px] leading-[120%]">
                                Manage Your Property
                            </h1>
                        </div>
                        <div className ="relative max-w-[435px] max-h-[48px]  mt-[24px]">
                            <p className="text-[#00000] font-[400] text-[16px]  ">
                                Your will have everything nearby supermarket, buses ,
                                station, the carmen neighborhood, etc
                            </p>
                        </div>
                        <div className="relative flex max-w-[438px] mt-[24px] mb-[176px]">
                            <input
                                type ="email"
                                placeholder="Enter your email"
                                className="w-full h-[60px] rounded-[40px] bg-[#FEFEFF] pl-[24px] font-[400] "
                            />
                            <Button className="absolute top-0 left-[291px] w-[147px] h-[60px] rounded-[40px]">
                                <span className="text-[#FEFEFF] font-[600] text-[16px] leading-[120%]">
                                    Get a Quote
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Methana case ekak */}
                <div className="absolute top-[10px] left-[625px] ">
                    <img src="/Group2.svg" alt="Group2" className="w-[785px] h-[667px]"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;
