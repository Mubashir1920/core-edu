

const HomeAbout = () => {
    return (
        <div className="flex justify-center items-center px-5   py-10 ">
            <div className="bg-lightgray rounded-4xl py-12 px-6 md:px-28 w-6xl max-w-7xl text-left">
                <p className="text-md text-gray-400 tracking-tight mb-4 text-center uppercase">About</p>
                <p className="text-3xl md:text-4xl font-bold tracking-tight  leading-10 text-black">
                    We provide structured
                    <span className="text-teal-600 font-semibold"> pathways</span>
                    <span className="inline-block align-middle ml-1">
                        <img src="https://img.icons8.com/fluency-systems-regular/16/000000/path.png" alt="path icon" className="inline w-4 h-4" />
                    </span>
                    for teachers to advance
                    <span className="text-gray-400">
                        their skills
                        <span className="inline-block align-middle ml-1">
                            <img src="https://img.icons8.com/fluency-systems-regular/16/000000/idea.png" alt="skills icon" className="inline w-4 h-4" />
                        </span>
                        , gain professional certifications
                        <span className="inline-block align-middle ml-1">
                            <img src="https://img.icons8.com/fluency-systems-regular/16/000000/certificate.png" alt="cert icon" className="inline w-4 h-4" />
                        </span>
                        , and earn  accredited degrees
                        <span className="inline-block align-middle ml-1">
                            <img src="https://img.icons8.com/fluency-systems-regular/16/000000/graduation-cap.png" alt="degree icon" className="inline w-4 h-4" />
                        </span>
                        .
                    </span>
                </p>
            </div>
        </div>

    )
}

export default HomeAbout
