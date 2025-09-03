import Image from "next/image";

const Steps = () => {
    return (
        <div>
            <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-[266px]">
                <div className="relative flex items-center mt-16 sm:mt-20 lg:mt-[108px]">
                    <h2 className="text-black font-normal text-sm sm:text-base leading-tight text-center">
                        Three steps. Three minutes.
                    </h2>
                </div>
                <div className="relative flex items-center mt-4 sm:mt-6 lg:mt-[16px] max-w-4xl">
                    <h1 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight text-center">
                        Everything should be this easy.
                    </h1>
                </div>
            </div>
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
        </div>
    );
}

export default Steps;