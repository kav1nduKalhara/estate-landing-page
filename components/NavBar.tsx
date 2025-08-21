import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const NavBar = () => {
    return(
        <div className="relative flex items-center justify-center">
            <nav className="flex items-center justify-between w-full h-[90px] rounded-[70px] bg-[#FAFAFA] ">
                <div className="flex items-center pl-[40px]">
                    <Image src="/Logo.svg" alt="Logo" width={94} height={28}/>
                </div>
                <div className="flex-1 flex items-center justify-center pl-[242px]">
                    <div className="flex justify-center items-center w-[571px]  h-[60px] bg-[#FEFEFF] rounded-[40px]">
                        <div className="flex flex-row  gap-[35px]">
                            <Link href="#about">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:text-[#BEBEBE]">
                                    About us
                                </span>
                            </Link>
                            <Link href="#project">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:text-[#BEBEBE]">
                                    Projects
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:text-[#BEBEBE]">
                                    Agents
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:text-[#BEBEBE]">
                                    Services
                                </span>
                            </Link>
                            <Link href="/">
                                <span className="text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:text-[#BEBEBE]">
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
                        <span className="font-[400] text-[16px] leading-[120%] hover:text-[#BEBEBE] ">
                            Other services
                        </span>
                    </Link>
                    <Button className="flex items-center justify-center w-[158px] h-[60px] rounded-[40px] bg-[#FEFEFF] text-[#1F1F1F] font-[400] text-[16px] leading-[120%] hover:bg-[#BEBEBE]">
                            <Link href="/">Contact us</Link>
                    </Button>

                </div>
            </nav>
        </div>
    )
}
 export default NavBar;