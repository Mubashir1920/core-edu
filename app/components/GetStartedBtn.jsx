
import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

const GetStartedBtn = () => {
    return (
        <div className="w-full flex justify-center  my-5 " >
            <Link className='flex justify-center rounded-4xl group' href='/contact' >
                <button className="bg-primary border border-primary group-hover:text-primary group-hover:bg-muted-300/10 group-hover:border-muted-300 transition-colors duration-500  text-md  cursor-pointer rounded-3xl text-background py-3 px-6 block text-center" >
                    Get Started
                </button>
                <span className="bg-primary  border border-primary group-hover:text-primary group-hover:bg-muted-300/10 group-hover:border-muted-300 transition-colors duration-500  text-white rounded-[100%]  cursor-pointer p-3 flex justify-center items-center  " >
                    <LuArrowUpRight size={22} />
                </span>
            </Link>
        </div>
    )
}

export default GetStartedBtn
