import Image from "next/image";
import {Button} from "@/components/ui/button";

const Subscribe = () => {
    return(
        <div className="relative flex items-center justify-center h-[calc(100vh -134px)] mt-[139px]">
            <div className="  w-full h-[457px] rounded-[15px] mt-[32px] overflow-hidden "
                 style={{background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'}}>
                <Image src="/fade.png" alt="fade overlay" fill className="object-cover rounded-[15px] opacity-50"/>
                <div className="flex items-center pl-[43px] z-1">
                    <div className="flex flex-col item-center pt-[56px]">
                        <div className="relative max-w-[642px] max-h-[60px] ">
                            <h1 className="text-[#00000] font-[600] text-[50px] leading-[120%]">
                                Subscribe Our Newsletter
                            </h1>
                        </div>
                        <div className ="relative max-w-[526px] max-h-[96px]  mt-[18px]">
                            <p className="text-[#00000] font-[400] text-[16px] leading-[24px] ">
                                Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                            </p>
                        </div>
                        <div className="relative flex max-w-[469px] mt-[45px] mb-[122px]">
                            <input
                                type ="email"
                                placeholder="Enter your email"
                                className="w-full h-[60px] rounded-[40px] bg-[#FEFEFF] pl-[24px] font-[400] text-[16px] leading-[24px]"
                            />
                            <Button className="absolute top-0 left-[322px] w-[147px] h-[60px] rounded-[40px]">
                                <span className="text-[#FEFEFF] font-[600] text-[16px] leading-[120%]">
                                    Get a Quote
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-[30px] left-[809px] ">
                    <img src="/footer.svg" alt="footer" className="w-[606px] h-[557px]"/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;