"use client"

import { useRef, useEffect } from "react"

const HomeAbout = () => {
    const containerRef = useRef(null)
    const letterRefs = useRef([])

    // Clear refs array on each render
    letterRefs.current = []

    // Add to refs function
    const addToRefs = (el) => {
        if (el && !letterRefs.current.includes(el)) {
            letterRefs.current.push(el)
        }
    }

    useEffect(() => {
        if (!containerRef.current) return

        // Create animation similar to GSAP
        const handleScroll = () => {
            const container = containerRef.current
            if (!container) return

            const rect = container.getBoundingClientRect()
            const scrollProgress = 1 - Math.max(0, Math.min(1, rect.top / window.innerHeight))

            // Animate each letter with stagger
            letterRefs.current.forEach((letter, index) => {
                const delay = index * 0.01
                const opacity = Math.max(0, Math.min(1, scrollProgress * 3 - delay))
                letter.style.opacity = opacity.toString()
            })
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial call

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Split text into words and letters
    const splitWords = (phrase) => {
        const words = phrase.split(" ")
        return words.map((word, i) => {
            // Check for special words
            const isPathways = word === "pathways"
            const isSkills = word === "skills"
            const isCertifications = word === "certifications"
            const isDegrees = word === "degrees"

            // Get appropriate class
            let className = ""
            if (isPathways) className = "text-primary font-semibold"

            // Split into letters
            const letters = word.split("").map((letter, j) => (
                <span
                    key={`letter-${i}-${j}`}
                    ref={addToRefs}
                    style={{ opacity: 0 }} // Start invisible
                    className="inline-block"
                >
                    {letter}
                </span>
            ))

            

            return (
                <span key={`word-${i}`} className={`${className} inline-block`}>
                    {letters}
                    {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
            )
        })
    }

    const mainText =
        "We provide structured pathways for teachers to advance their skills, gain professional certifications, and earn accredited degrees."

    return (
        <div className="flex justify-center items-center px-5 py-10">
            <div ref={containerRef} className="bg-lightgray rounded-4xl py-12 px-6 md:px-28 w-6xl max-w-7xl text-left">
                <p className="text-md text-gray-400 tracking-tight mb-2 text-center uppercase">About</p>
                <p className="text-3xl md:text-[34px] font-semibold tracking-tighter leading-8 md:leading-10 text-black">{splitWords(mainText)}</p>
            </div>
        </div>
    )
}

export default HomeAbout
