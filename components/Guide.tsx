import Image from "next/image";

const Guide = () => {
    return(
        <div className="relative flex items-center justify-between mt-[45px] gap-[150px] w-full ">
            {/* Methana case ekak */}
                <div className=" relative flex flex-col pl-[66px] ">
                    <Image src="/messages.svg" alt="messages" width={75} height={75}/>
                    <div>
                        <h1 className="text-[#000000] font-[600] text-[28px] leading-[120%] mt-[22px]">
                            Answer questions
                        </h1>
                        <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[22px]">
                            <span>Lorem ipsum dolor sit amet consectetur. </span>
                            <span>Adipiscing imperdiet bibendum in in</span>
                            <span>vestibulum. </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <Image src="/sms.svg" alt="messages" width={75} height={75}/>
                    <div>
                        <h1 className="text-[#000000] font-[600] text-[28px] leading-[120%] mt-[22px]">
                            Answer questions
                        </h1>
                        <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[22px]">
                            <span>Lorem ipsum dolor sit amet consectetur. </span>
                            <span>Adipiscing imperdiet bibendum in in</span>
                            <span>vestibulum. </span>
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col pr-[67px] ">
                    <Image src="/edit.svg" alt="messages" width={75} height={75}/>
                    <div>
                        <h1 className="text-[#000000] font-[600] text-[28px] leading-[120%] mt-[22px]">
                            Answer questions
                        </h1>
                        <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[22px]">
                            <span>Lorem ipsum dolor sit amet consectetur. </span>
                            <span>Adipiscing imperdiet bibendum in in</span>
                            <span>vestibulum. </span>
                        </p>
                    </div>
                </div>

        </div>
    )
}

export default Guide;