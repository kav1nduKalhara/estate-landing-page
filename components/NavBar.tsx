import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-[#FAFAFA] shadow-md">
            <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 rounded-3xl">

                <div className="flex items-center">
                    <Image src="/Logo.svg" alt="Logo" width={94} height={28} />
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex items-center bg-[#FEFEFF] rounded-3xl h-14 px-6 gap-6">
                        <Link href="#about" className="nav-link">About us</Link>
                        <Link href="#project" className="nav-link">Projects</Link>
                        <Link href="/" className="nav-link">Agents</Link>
                        <Link href="/" className="nav-link">Services</Link>
                        <Link href="/" className="nav-link">Listings</Link>
                        <Link href="/">
                            <Image src="/search.svg" alt="search" width={24} height={24} />
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/" className="nav-link">Other services</Link>
                    <Button className="flex items-center justify-center w-40 h-14 rounded-3xl bg-[#FEFEFF] text-[#1F1F1F] font-normal text-base hover:text-[#BEBEBE]">
                        <Link href="/">Contact us</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-[#FEFEFF] px-4 py-4 space-y-4 shadow-lg rounded-b-3xl">
                    <Link href="#about" className="block nav-link">About us</Link>
                    <Link href="#project" className="block nav-link">Projects</Link>
                    <Link href="/" className="block nav-link">Agents</Link>
                    <Link href="/" className="block nav-link">Services</Link>
                    <Link href="/" className="block nav-link">Listings</Link>
                    <Link href="/" className="block nav-link">Other services</Link>
                    <Button className="w-full h-14 rounded-3xl bg-[#FEFEFF] text-[#1F1F1F] font-normal text-base hover:text-[#BEBEBE]">
                        <Link href="/">Contact us</Link>
                    </Button>
                </div>
            )}
        </header>
    );
};

export default NavBar;
