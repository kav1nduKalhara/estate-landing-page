"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative w-full z-50">
            <nav className="flex items-center justify-between w-full h-[90px] bg-[#FAFAFA] rounded-[70px] px-4 lg:pl-[40px] pr-[24px] ">

                <div className="flex items-center">
                    <Image src="/Logo.svg" alt="Logo" width={94} height={28} />
                </div>

                <div className="hidden lg:flex flex-1 items-center justify-center">
                    <div className="flex justify-center items-center bg-[#FEFEFF] rounded-[40px] px-6 py-[15px]">
                        <div className="flex space-x-[35px] text-sm">
                            <Link href="#about" className="nav-link">About us</Link>
                            <Link href="#project" className="nav-link">Projects</Link>
                            <Link href="/" className="nav-link">Agents</Link>
                            <Link href="/" className="nav-link">Services</Link>
                            <Link href="/" className="nav-link">Listings</Link>
                            <Link href="/">
                                <Image src="/search.svg" alt="search" width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-[30px]">
                    <Link href="/" className="nav-link">Other services</Link>
                    <Button className="w-[158px] h-[60px] rounded-[40px] bg-[#FEFEFF] text-[#1F1F1F] hover:text-[#BEBEBE]">
                        <Link href="/">Contact us</Link>
                    </Button>
                </div>

                <div className="lg:hidden flex items-center z-50">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="fixed top-[120px] left-0 w-full bg-blue-300 lg:hidden flex flex-col items-center gap-4 py-4 px-15 z-50 rounded-[40px] ">
                    <Link href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About us</Link>
                    <Link href="#project" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Agents</Link>
                    <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Listings</Link>
                    <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Other services</Link>
                    <Button className="w-full rounded-[40px] bg-[#FEFEFF] text-[#1F1F1F] hover:text-[#BEBEBE]">
                        <Link href="/">Contact us</Link>
                    </Button>
                </div>
            )}
        </header>
    );
};

export default NavBar;
