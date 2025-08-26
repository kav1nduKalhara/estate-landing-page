'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative flex items-center justify-center">
            <nav className="flex items-center justify-between w-full h-[90px] rounded-[70px] bg-[#FAFAFA] px-4 sm:px-6 md:px-10">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/Logo.svg" alt="Logo" width={94} height={28} className="w-auto h-6 sm:h-7"/>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-1 items-center justify-center">
                    <div className="flex justify-center items-center w-[571px] h-[60px] bg-[#FEFEFF] rounded-[40px] px-6">
                        <div className="flex flex-row gap-[35px]">
                            <Link href="#about">
                                <span className="nav-link">About us</span>
                            </Link>
                            <Link href="#project">
                                <span className="nav-link">Projects</span>
                            </Link>
                            <Link href="/">
                                <span className="nav-link">Agents</span>
                            </Link>
                            <Link href="/">
                                <span className="nav-link">Services</span>
                            </Link>
                            <Link href="/">
                                <span className="nav-link">Listings</span>
                            </Link>
                            <Link href="/">
                                <Image src="/search.svg" alt="search" width={24} height={24}/>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Right Side */}
                <div className="hidden lg:flex items-center justify-center gap-[30px]">
                    <Link href="/">
                        <span className="nav-link">Other services</span>
                    </Link>
                    <Button className="flex items-center justify-center w-[158px] h-[60px] rounded-[40px] bg-[#FEFEFF] text-[#1F1F1F] font-normal text-[16px] leading-[120%] hover:text-[#BEBEBE]">
                        <Link href="/">Contact us</Link>
                    </Button>
                </div>

                {/* Mobile/Tablet Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* Search icon for mobile */}
                    <Link href="/" className="sm:inline hidden">
                        <Image src="/search.svg" alt="search" width={20} height={20}/>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-[#FEFEFF] hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={20} className="text-[#1F1F1F]" />
                        ) : (
                            <Menu size={20} className="text-[#1F1F1F]" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile/Tablet Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-[100px] left-0 right-0 z-50">
                    <div className="mx-4 bg-[#FEFEFF] rounded-[30px] shadow-lg border border-gray-100">
                        <div className="flex flex-col p-6">
                            {/* Main Navigation Links */}
                            <div className="flex flex-col space-y-4 mb-6">
                                <Link
                                    href="#about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    About us
                                </Link>
                                <Link
                                    href="#project"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Agents
                                </Link>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Listings
                                </Link>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Other services
                                </Link>
                            </div>

                            {/* Search and Contact Section */}
                            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <Image src="/search.svg" alt="search" width={20} height={20} className="mr-2"/>
                                    <span className="nav-link">Search</span>
                                </Link>
                                <Button
                                    className="w-full h-[50px] rounded-[25px] bg-[#1F1F1F] text-[#FEFEFF] font-normal text-[16px] leading-[120%] hover:bg-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Link href="/" className="w-full h-full flex items-center justify-center">
                                        Contact us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-20 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default NavBar;