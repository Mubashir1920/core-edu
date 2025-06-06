'use client';

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useLenis } from "lenis/react";
import { GoArrowRight, GoChevronDown, GoChevronUp } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

import CoreLogo from '@/public/assets/core-eduation-whitelogo.png';
import { usePathname } from "next/navigation";

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

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MobileNav = () => {
    const [active, setActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const lenis = useLenis();

    const toggleDropdown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            lenis?.stop();
        } else {
            document.body.style.overflow = 'auto';
            lenis?.start();
        }
    }, [active]);

    return (
        <>
            {/* Toggle Button */}
            <button className="text-xl cursor-pointer lg:hidden">
                <HiOutlineMenuAlt3 onClick={() => setActive(true)} className={`${active ? 'hidden' : 'block'}`} size={35} />
            </button>

            {/* Side Nav */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] bg-primary text-white text-3xl transition-transform duration-500 ease-in-out w-full px-10 z-20 ${active ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <GoArrowRight onClick={() => setActive(false)} className={`text-white z-10 cursor-pointer absolute right-10 top-10`} size={35} />

                <div className='relative h-full flex flex-col pt-10'>
                    <Link href="/" onClick={() => setActive(false)} className="max-w-fit cursor-pointer">
                        <Image src={CoreLogo} alt="Core Logo" width={120} height={120} />
                    </Link>

                    <AnimatePresence>
                        {active && (
                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="flex flex-col gap-6 text-lg font-light mt-20"
                            >
                                <motion.li variants={itemVariants}>
                                    <Link className="relative" href="/about" onClick={() => setActive(false)}>
                                        About
                                        <span className={`${pathname == '/about' ? 'block' : 'hidden'} h-[4px] absolute left-0 block bottom-[1px] bg-white/70 w-full`} />
                                    </Link>
                                </motion.li>

                                {/* Dropdown */}
                                <motion.li variants={itemVariants}>
                                    <button onClick={toggleDropdown} className="flex items-center cursor-pointer gap-1">
                                        Resources <GoChevronDown className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-500 `} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden mt-2 rounded-[21px] bg-white text-black  py-2 px-2"
                                            >
                                                {dropdownItems.map((item, idx) => (
                                                    <li key={idx} className="px-4 py-2 flex items-center  justify-between gap-5">
                                                        {item}
                                                        <button className="py-[7px] text-sm cursor-pointer px-[19px] rounded-3xl border border-muted-100/50">
                                                            Download
                                                        </button>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </motion.li>


                                {navLinks.map((item) => (
                                    <motion.li key={item.name} variants={itemVariants}>
                                        <Link href={item.path} className="relative" onClick={() => setActive(false)}>
                                            {item.name}
                                            <span className={`${pathname == item.path ? 'block' : 'hidden'} h-[4px] absolute left-0 block bottom-[1px] bg-white/70 w-full`} />
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
