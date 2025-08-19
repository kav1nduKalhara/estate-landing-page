const Hero = () => {
    return (
        <div className="relative flex items-center justify-center h-[calc(100vh-134px)] ">
            <div className=" w-full h-full rounded-[15px] mt-[32px]" style={{
                background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'
            }}>
                <img
                    src="/fade.png"
                    alt="fade overlay"
                    className=" w-full h-full object-cover rounded-[15px] opacity-50"
                />
                <div className="absolute top-[247px] left-[76px]">
                    <h2 className="text-black font-[400] text-[16px] leading-[120%]">
                        Welcome to Realstate
                    </h2>
                </div>
                <div className="absolute top-[281px] left-[76px] max-w-[479px]">
                    <h1 className="text-black font-[600] text-[67px] leading-[120%]">
                        Manage Your Property
                    </h1>
                </div>
                <div className="absolute top-[465px] left-[76px] max-w-[435px]">
                    <h2 className="text-black font-[400] text-[16px] leading-[120%]">
                        Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc
                    </h2>
                </div>
                <div className="flex items-center justify-center absolute  top-[537px] left-[76px]">
                    <input
                        type = "email"
                        placeholder="Enter your email"
                        className="w-[438px] h-[60px] rounded-[40px] bg-[#FEFEFF]  px-4 items-center"
                    />
                </div>
                <button className="absolute top-[537px] left-[367px] w-[147px] h-[60px] bg-black rounded-[40px] flex items-center justify-center">
                    <span className="text-[#FEFEFF] font-[600] text-[16px] ">
                        Get a Quote
                    </span>
                </button>

                <div className="absolute top-[156px] left-[625px] flex items-center justify-center">
                    <img src="/Group2.svg" alt="Group2" className="w-[785px] h-[667px]"/>
                </div>

            </div>
        </div>
    )
}

export default Hero;