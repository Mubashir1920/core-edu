'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

import CoreLogo from '@/public/assets/core-eduation-whitelogo.png';

const navLinks = [
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Benefits", path: "/benefits" },
    { name: "Pathways", path: "/pathways" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white px-4 pt-10 md:pt-20 pb-10 ">
            <div className='container mx-auto' >

                <div className="flex flex-col md:flex-row gap-5  md:gap-10 ">
                    {/* Left Section */}
                    <div className="w-full  md:w-1/2 ">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] tracking-tight font-semibold leading-tight">
                            Ready to start your<br />learning journey?
                        </h2>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex flex-col md:items-end gap-10">
                        {/* Newsletter */}
                        <div className="w-full max-w-md">
                            <p className="font-light mb-2">Subscribe to our newsletter</p>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full p-4 rounded-full bg-teal-600 placeholder-white/40 text-white pr-12 outline-none"
                                />
                                <button
                                    aria-label="Subscribe Button"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-teal-700 p-2 rounded-full"
                                >
                                    <FiSend size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col-reverse pt-5  md:pt-14 md:flex-row md:justify-between items-start md:gap-10 md:items-end">
                    {/* Logo & Socials (Mobile) */}
                    <div className="flex justify-between items-end w-full md:w-fit">
                        <Link href='/' className="mt-10   flex items-center gap-3">
                            <Image
                                src={CoreLogo}
                                alt="Core Logo"
                                width={120}
                                height={120}
                            />
                        </Link>
                        <div className="flex gap-3 mt-4 md:hidden">
                            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                                <FaInstagram size={22} />
                            </div>
                            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                                <FaLinkedinIn size={22} />
                            </div>
                            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                                <FaYoutube size={22} />
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row md:gap-8 gap-5 justify-end text-sm font-light text-white/90 w-full md:w-fit">
                        <p className="md:hidden text-lg block font-medium">Quick Links</p>
                        {navLinks.map((item) => (
                            <Link href={item.path} key={item.path} className=" hover:underline">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t flex flex-col md:flex-row justify-between items-center border-white/20 mt-10 pt-4 gap-4">
                    <p className="text-md text-white/80 text-center md:text-left">
                        Copyright © Core Education {currentYear} - All Rights Reserved
                    </p>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex gap-3">
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                            <RxCross2 size={22} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                            <FaFacebookF size={22} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                            <FaInstagram size={22} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                            <FaLinkedinIn size={22} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                            <FaYoutube size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
