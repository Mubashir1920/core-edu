'use client'

import { motion, AnimatePresence } from "motion/react"

import { FiChevronDown } from "react-icons/fi"
import { FiSearch, FiFilter } from "react-icons/fi"
import { useState } from "react"


const FilterCourse = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [openDropdowns, setOpenDropdowns] = useState({
        type: false,
        organisation: false,
        language: false,
        status: false,
    })

    const toggleDropdown = (dropdown) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [dropdown]: !prev[dropdown],
        }))
    }


    return (<>
        {/* Search Bar */}
        < div className="flex items-center gap-4 mb-6" >
            <div className="flex-1 relative">
                <FiSearch aria-label="Search Course" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Find a course..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
            </div>
            <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
                <FiFilter aria-label="Filter Courses" className="w-5 h-5 text-primary " />
                <span className="text-gray-600 hidden sm:inline">Filter</span>
            </button>
        </div >

        {/* Animated Filter Panel */}
        < AnimatePresence >
            {isFilterOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" mb-6"
                >
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Select Type */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Type</label>
                                <button
                                    onClick={() => toggleDropdown("type")}
                                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <span className="text-gray-500">Select Type</span>
                                    <FiChevronDown
                                        className={`w-4 h-4 text-gray-400 transition-transform ${openDropdowns.type ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openDropdowns.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                                        >
                                            <div className="py-1">
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Course</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Workshop</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Webinar</button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Select Organisation */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Organisation</label>
                                <button
                                    onClick={() => toggleDropdown("organisation")}
                                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <span className="text-gray-500">Select Organisation</span>
                                    <FiChevronDown
                                        className={`w-4 h-4 text-gray-400 transition-transform ${openDropdowns.organisation ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openDropdowns.organisation && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                                        >
                                            <div className="py-1">
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">University A</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Institute B</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Academy C</button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Select Language */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Language</label>
                                <button
                                    onClick={() => toggleDropdown("language")}
                                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <span className="text-gray-500">Select Language</span>
                                    <FiChevronDown
                                        className={`w-4 h-4 text-gray-400 transition-transform ${openDropdowns.language ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openDropdowns.language && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                                        >
                                            <div className="py-1">
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">English</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Spanish</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">French</button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Select Status */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Status</label>
                                <button
                                    onClick={() => toggleDropdown("status")}
                                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <span className="text-gray-500">Select Status</span>
                                    <FiChevronDown
                                        className={`w-4 h-4 text-gray-400 transition-transform ${openDropdowns.status ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openDropdowns.status && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                                        >
                                            <div className="py-1">
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Active</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Upcoming</button>
                                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100">Completed</button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence >
    </>

    )
}

export default FilterCourse