import Image from "next/image";

const Guide = () => {
    return(
        <div className="relative w-full mt-12 sm:mt-12 lg:mt-[45px] px-4 sm:px-6 lg:px-[66px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-[150px] max-w-[1307px] mx-auto">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-4 sm:mb-6">
                        <Image
                            src="/messages.svg"
                            alt="Answer questions"
                            width={75}
                            height={75}
                            className="w-16 h-16 sm:w-[75px] sm:h-[75px]"
                        />
                    </div>
                    <div className="max-w-sm">
                        <h2 className="text-black font-semibold text-xl sm:text-2xl lg:text-[28px] leading-tight mb-4 sm:mb-6">
                            Answer questions
                        </h2>
                        <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur.
                            Adipiscing imperdiet bibendum in in
                            vestibulum.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-4 sm:mb-6">
                        <Image
                            src="/sms.svg"
                            alt="Select a quote"
                            width={75}
                            height={75}
                            className="w-16 h-16 sm:w-[75px] sm:h-[75px]"
                        />
                    </div>
                    <div className="max-w-sm">
                        <h2 className="text-black font-semibold text-xl sm:text-2xl lg:text-[28px] leading-tight mb-4 sm:mb-6">
                            Select a quote
                        </h2>
                        <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur.
                            Adipiscing imperdiet bibendum in in
                            vestibulum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-4 sm:mb-6">
                        <Image
                            src="/edit.svg"
                            alt="Get registered"
                            width={75}
                            height={75}
                            className="w-16 h-16 sm:w-[75px] sm:h-[75px]"
                        />
                    </div>
                    <div className="max-w-sm">
                        <h2 className="text-black font-semibold text-xl sm:text-2xl lg:text-[28px] leading-tight mb-4 sm:mb-6">
                            Get registered
                        </h2>
                        <p className="text-black font-normal text-sm sm:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur.
                            Adipiscing imperdiet bibendum in in
                            vestibulum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide;