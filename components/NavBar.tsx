import Image from "next/image";

const NavBar = () => {
    return(
        <div className="flex justify-center">
            <nav className="flex items-center justify-between w-full h-[90px] rounded-[70px] bg-[#FAFAFA] ">
                <div className="flex items-center pl-[40px]">
                    <Image src="/Logo.svg" alt="Logo" width={94} height={28}/>
                </div>
            </nav>
        </div>
    )
}
 export default NavBar;