import Image from "next/image";

const RecentProjectCard = () => {
    return(
        <div className="grid grid-cols-3 gap-[20px] mt-[45px] w-full">
            <div className="w-[447px] h-[438px] bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE] border-width-[1px]">
                <div>
                    <Image src="/19.svg" alt="house" width={447} height={263} className="rounded-[14px]"/>
                </div>
                <div className="flex flex-col pl-[24px] pr-[94px] mt-[24px]">
                    <h1 className="text-[#000000] font-[600] text-[21px] leading-[120%]">
                        Sobha Hearland II Villas
                    </h1>
                    <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[17px]">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                    </p>
                    <div className="flex flex-row mt-[17px] max-w-[153px] max-h-[19px] ">
                        <Image src="/Stars.png" alt="stars" width={105} height={17}/>
                            <span className="text-[#000000] font-[400]  text-[16px] leading-[120%] ml-[15px]">
                                4.83
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[447px] h-[438px] bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE] border-width-[1px]">
                <div>
                    <Image src="/20.svg" alt="house" width={447} height={263} className="rounded-[14px]"/>
                </div>

                <div className="flex flex-col pl-[24px] pr-[94px] mt-[24px]">
                    <h1 className="text-[#000000] font-[600] text-[21px] leading-[120%]">
                        Sobha Hearland II Villas
                    </h1>
                    <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[17px]">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                    </p>
                    <div className="flex flex-row mt-[17px] max-w-[153px] max-h-[19px] ">
                        <Image src="/Stars.png" alt="stars" width={105} height={17}/>
                        <span className="text-[#000000] font-[400]  text-[16px] leading-[120%] ml-[15px]">
                                4.83
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[447px] h-[438px] bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE] border-width-[1px]">
                <div>
                    <Image src="/21.svg" alt="house" width={447} height={263} className="rounded-[14px]"/>
                </div>
                <div className="flex flex-col pl-[24px] pr-[94px] mt-[24px]">
                    <h1 className="text-[#000000] font-[600] text-[21px] leading-[120%]">
                        Sobha Hearland II Villas
                    </h1>
                    <p className="text-[#000000] font-[400] text-[16px] leading-[24px] mt-[17px]">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                    </p>
                    <div className="flex flex-row mt-[17px] max-w-[153px] max-h-[19px] ">
                        <Image src="/Stars.png" alt="stars" width={105} height={17}/>
                        <span className="text-[#000000] font-[400]  text-[16px] leading-[120%] ml-[15px]">
                                4.83
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjectCard;