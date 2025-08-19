import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return(
        <div className="flex justify-center">
            <nav className="flex items-center justify-between w-full h-[90px] rounded-[70px] bg-[#FAFAFA] ">
                <div className="flex items-center pl-[40px]">
                    <Image src="/Logo.svg" alt="Logo" width={94} height={28}/>
                </div>
                <div className="flex-1 flex items-center justify-center pl-[242px]">
                    <div className="flex justify-center items-center w-[571px]  h-[60px] bg-[#FEFEFF] rounded-[40px]">
                        <div className="flex flex-row  gap-[35px]">
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%]">
                                    About us
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%]">
                                    Projects
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%]">
                                    Agents
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%]">
                                    Services
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%]">
                                    Listings
                                </span>
                            </Link>
                            <Link href="/">
                                <Image src="/search.svg" alt="search" width={24} height={24}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pr-[24px] gap-[30px]">
                    <Link href="/">
                        <div className="font-[400] text-[16px] leading-[120%] ">
                            Other services
                        </div>
                    </Link>
                    <div className="w-[158px] h-[60px] bg-white border border-[#BEBEBE] rounded-[40px] flex items-center justify-center ">
                        <Link href="/">
                            <div className="font-[400] text-[16px] leading-[120%] whitespace-nowrap">
                                Contact us
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
 export default NavBar;