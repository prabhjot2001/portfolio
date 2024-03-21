import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='text-[#222222] p-5 font-semibold border-t-2 mt-20 border-black mx-5 '>
            <div className='sm:flex sm:flex-row flex-col gap-20 items-center'>

                <div className='flex flex-col flex-[1.2rem] gap-10'>
                    <div className='flex flex-col gap-5 w-full'>
                        <h2 id='hire' className='scroll-mt[132px] text-5xl sm:text-6xl font-normal'>LET'S TALK ABOUT THE NEXT BIG THING.</h2>

                        <div className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                            <a href="mailto:prabhjot1671@gmail.com" className='text-3xl border-2 border-black font-medium w-full p-4 flex justify-center'>Hire me</a>
                            <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
                        </div>
                    </div>

                    <div className='gap-10 text-center'>
                        <div className='text-9xl font-light'>2024</div>
                        <div className='fontlight '>MADE BY PRABHJOT WITH LOVE <span className='text-red-500 text-xl'>❤</span></div>
                    </div>
                </div>

                <div className='h-full flex-[1rem] flex gap-10 sm:gap-20 mt-10 flex-col justify-between '>
                    {/* <h2 className='text-4xl font-normal text-center'>CONNECT WITH ME</h2> */}
                    <div className='grid grid-cols-2 gap-10'>
                        <div className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                            <Link href='https://www.linkedin.com/in/prabhjot-singh001/' target='_blank' className='text-xl border-2 border-black font-medium w-full p-4 flex justify-center'>LINKEDIN</Link>
                            <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
                        </div>
                        <div className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                            <Link href='https://github.com/prabhjot2001' target='_blank' className='text-xl border-2 border-black font-medium w-full p-4 flex justify-center'>GITHUB</Link>
                            <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
                        </div>
                        <div className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                            <Link href='https://profile.indeed.com/resume' target='_blank' className='text-xl border-2 border-black font-medium w-full p-4 flex justify-center'>INDEED</Link>
                            <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
                        </div>
                        <div className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                            <Link href='https://www.linkedin.com/in/prabhjot-singh001/' target='_blank' className='text-xl border-2 border-black font-medium w-full p-4 flex justify-center'>INSTAGRAM</Link>
                            <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
