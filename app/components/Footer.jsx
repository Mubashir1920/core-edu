'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';

import CoreLogo from '@/public/assets/core-eduation-whitelogo.png'
import Link from 'next/link';

const navLinks = [
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Benefits", path: "/benefits" },
    { name: "Pathways", path: "/pathways" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
];

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white px-6 md:px-20 pt-20 pb-10">
            <div className="flex flex-col md:flex-row md:justify-between gap-10 md:items-start">
                {/* Left Section */}
                <div className="md:w-1/3">
                    <h2 className="text-[40px] tracking-tight font-semibold leading-tight">
                        Ready to start your<br />learning journey?
                    </h2>
                </div>

                {/* Right Section */}
                <div className="md:w-2/3 flex flex-col  md:items-end gap-24 ">
                    {/* Newsletter */}
                    <div className="w-full md:w-2/3">
                        <p className="font-light mb-2">Subscribe to our newsletter</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-4 rounded-full bg-teal-600 placeholder-white/40 text-white pr-10 outline-none"
                            />
                            <button aria-label='Subscribe Button' className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white text-teal-700 p-2 rounded-full">
                                <FiSend size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse pt-14 md:flex-row md:justify-between items-start  gap-10 md:items-end">

                <div className='flex justify-between items-end w-full md:w-fit ' >
                    {/* Logo + Brand */}
                    <div className="mt-10 flex items-center gap-3">
                        <Image
                            src={CoreLogo}
                            alt="Core Logo"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className="flex gap-3 mt-4 md:hidden ">
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
                <div className="flex flex-wrap flex-col md:flex-row md:gap-8 gap-5 justify-end text-sm  font-light text-white/90">
                    <p className='md:hidden text-lg block font-medium' >Quick Links</p>
                    {navLinks.map((item) => (
                        <Link href={item.path} key={item.path} className="hover:underline">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t flex justify-between items-center border-white/20 mt-10 pt-2 ">
                <p className='text-md text-white/50 text-center md:text-left' >
                    Copyright © Core Education {currentYear} - All Rights Reserved
                </p>
                {/* Social Icons */}
                <div className="md:flex gap-3 mt-4 hidden">
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
        </footer>
    );
};

export default Footer;
