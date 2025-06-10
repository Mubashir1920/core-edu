import Link from "next/link"

const notfound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center" >
            <h1 className=" text-2xl  font-semibold tracking-tighter " >404 - Page Not Found</h1>
            <Link href="/" className=" px-5 py-2 my-3  text-sm  " >Go to Homepage</Link>
        </div>
    )
}

export default notfound
