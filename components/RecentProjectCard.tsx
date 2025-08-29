import Image from "next/image";

const RecentProjectCard = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-[20px] mt-8 md:mt-10 lg:mt-[45px] w-full px-4 md:px-6 lg:px-0">
            <div className="w-full max-w-[447px] mx-auto bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE]  ">
                <div className="w-full h-48 md:h-56 lg:h-[263px] relative ">
                    <Image
                        src="/19.svg"
                        alt="Sobha Hearland II Villas house"
                        fill
                        className="object-cover rounded-[14px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="flex flex-col p-4 md:p-5 lg:px-6 lg:py-6 space-y-3 md:space-y-4">
                    <h1 className="text-[#000000] font-semibold text-lg md:text-xl lg:text-[21px] leading-tight">
                        Sobha Hearland II Villas
                    </h1>
                    <p className="font-normal text-sm md:text-base lg:text-[16px] leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center">
                            <Image
                                src="/Stars.png"
                                alt="rating stars"
                                width={84}
                                height={14}
                                className="md:w-[105px] md:h-[17px]"
                            />
                        </div>
                        <span className="text-[#000000] font-normal text-sm md:text-base lg:text-[16px] leading-none">
                            4.83
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[447px] mx-auto bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE]">
                <div className="w-full h-48 md:h-56 lg:h-[263px] relative ">
                    <Image
                        src="/20.svg"
                        alt="Sobha Hearland II Villas house"
                        fill
                        className="object-cover rounded-[14px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="flex flex-col p-4 md:p-5 lg:px-6 lg:py-6 space-y-3 md:space-y-4">
                    <h1 className="text-[#000000] font-semibold text-lg md:text-xl lg:text-[21px] leading-tight">
                        Sobha Hearland II Villas
                    </h1>
                    <p className=" font-normal text-sm md:text-base lg:text-[16px] leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center">
                            <Image
                                src="/Stars.png"
                                alt="rating stars"
                                width={84}
                                height={14}
                                className="md:w-[105px] md:h-[17px]"
                            />
                        </div>
                        <span className="text-[#000000] font-normal text-sm md:text-base lg:text-[16px] leading-none">
                            4.83
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[447px] mx-auto bg-[#FEFEFF] rounded-[14px] border border-[#BEBEBE] ">
                <div className="w-full h-48 md:h-56 lg:h-[263px] relative ">
                    <Image
                        src="/21.svg"
                        alt="Sobha Hearland II Villas house"
                        fill
                        className="object-cover rounded-[14px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="flex flex-col p-4 md:p-5 lg:px-6 lg:py-6 space-y-3 md:space-y-4">
                    <h1 className="text-[#000000] font-semibold text-lg md:text-xl lg:text-[21px] leading-tight">
                        Sobha Hearland II Villas
                    </h1>
                    <p className=" font-normal text-sm md:text-base lg:text-[16px] leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center">
                            <Image
                                src="/Stars.png"
                                alt="rating stars"
                                width={84}
                                height={14}
                                className="md:w-[105px] md:h-[17px]"
                            />
                        </div>
                        <span className="text-[#000000] font-normal text-sm md:text-base lg:text-[16px] leading-none">
                            4.83
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjectCard;