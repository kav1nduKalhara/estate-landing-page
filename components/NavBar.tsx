import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="absolute top-[34px] left-[30px] w-[1380px] h-[90px] rounded-[70px] bg-[#FAFAFA]">
            <div className="absolute top-[23px] left-[40px] flex items-center gap-[10px]">
                <img src="/Logo.svg" alt="Logo" className="w-[93.89px] h-[27.5px]"/>
            </div>
            <div className="absolute top-[15px] left-[376px] w-[571px] h-[60px] bg-[#FEFEFF] rounded-[40px] flex justify-center">
                <div className="flex flex-row items-center space-x-8 " >
                    <Link href="/">
                        <div className="font-[400] text-[16px] leading-[120%]">
                            About us
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="font-[400] text-[16px] leading-[120%]">
                            Projects
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="font-[400] text-[16px] leading-[120%]">
                            Agents
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="font-[400] text-[16px] leading-[120%]">
                            Services
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="font-[400] text-[16px] leading-[120%]">
                            Listings
                        </div>
                    </Link>
                    <Link href="/">
                        <img src="/search.svg" alt="search" className="w-[24px] h-[24px]"/>
                    </Link>
                </div>
            </div>
            <div className="absolute top-[35px] left-[1027px] w-[141px] h-[19px]">
                <Link href="/">
                    <div className= "font-[400] text-[16px] leading-[120%]">
                        Other services
                    </div>
                </Link>
            </div>
            <div className="absolute top-[13px] left-[1198px] w-[158px] h-[60px] bg-white border border-[#BEBEBE] rounded-[40px] flex items-center justify-center gap-[10px]">
                <Link href="/">
                    <div className= "font-[400] text-[16px] leading-[120%] whitespace-nowrap">
                        Contact us
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;