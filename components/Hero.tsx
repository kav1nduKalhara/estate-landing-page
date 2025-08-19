const Hero = () => {
    return (
        <div className="relative flex items-center justify-center h-screen -mt-10">
            <div className=" w-[1380px] h-[617px] rounded-[15px]" style={{
                background: 'linear-gradient(to right, #C1DEE8, #FBD9B9)'
            }}>
                <img
                    src="/fade.png"
                    alt="fade overlay"
                    className=" w-full h-full object-cover rounded-[15px] opacity-50"
                />



            </div>
        </div>
    )
}

export default Hero;