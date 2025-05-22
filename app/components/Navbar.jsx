'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

import HeaderLogo from '@/public/assets/Core-Education-Logo-black.png';
import MobileNav from "./MobileNav";

const navLinks = [
    { name: "Features", path: "/features" },
    { name: "Benefits", path: "/benefits" },
    { name: "Pathways", path: "/pathways" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
];

const dropdownItems = [
    "Whitepapers",
    "Research",
    "Presentations",
];

export default function Navbar() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <nav className="bg-background w-full pt-10 pb-5">
            <div className="container px-5  mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href='/' className="cursor-pointer" >
                    <Image src={HeaderLogo} width={110} alt="Core-Education-Logo" />
                </Link>
                <div className="hidden lg:block" >
                    {/* Navigation */}
                    <ul className="flex items-center gap-3 text-sm">
                        {/* About Link */}
                        <Link href="/about">
                            <li
                                className={`py-1 px-3 rounded-2xl transition-colors duration-300 hover:bg-gray-100/50 ${path === '/about' ? 'bg-gray-100/50' : ''
                                    }`}
                            >
                                About
                            </li>
                        </Link>

                        {/* Dropdown */}
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className={`flex items-center gap-1 py-1 px-3 rounded-2xl transition-colors duration-300 hover:bg-gray-100/50 ${isOpen ? 'bg-gray-100/50' : ''}`}
                            >
                                Resources
                                {isOpen ? <GoChevronUp /> : <GoChevronDown />}
                            </button>

                            {isOpen && (
                                <ul className="absolute top-7 left-0 mt-2 w-max bg-background/80 backdrop-blur-md shadow-light rounded-[21px] py-2 z-10">
                                    {dropdownItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="px-4 py-2 flex items-center justify-between gap-5"
                                        >
                                            {item}
                                            <button className="py-[7px] cursor-pointer px-[19px] rounded-3xl border border-muted-100/50">
                                                Download
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Dynamic Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                            >
                                <li
                                    className={`py-1 px-3 rounded-2xl transition-colors duration-300 hover:bg-gray-100/50 ${path === link.path ? 'bg-gray-100/50' : ''}`}
                                >
                                    {link.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <MobileNav />
            </div>
        </nav>
    );
}
