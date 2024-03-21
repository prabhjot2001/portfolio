"use client"
import React from 'react'
import { links } from '../_data/data'
import Link from 'next/link';
// import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from 'react';
import MobileNavLink from './MobileNavLink';
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuAnimation = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerAnimation = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };
    return (

        <header className='flex bg-white sticky top-0 left-0 w-full justify-between border-b-2 border-black z-10'>

            <div className='flex h-[70px] sm:h-[132px]'>
                <Link href={'/'} className='flex items-center text-3xl sm:text-4xl px-4 sm:px-24 sm:border-r-2 border-black'>PRABHJOT</Link>
            </div>

            <div className='flex items-center sm:mr-5'>
                <div className='hidden sm:flex items-center gap-10 px-10  h-full'>
                    {
                        links.map((item, i) => <Link key={i} href={item.path} className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                            <p className='font-bold text-xl p-3'>{item.link}</p>
                            <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
                        </Link>
                        )
                    }
                </div>
                <span
                    className={`sm:hidden flex flex-col gap-3 px-4 cursor-pointer z-10`}
                    onClick={toggleMenu}
                >
                    <div
                        className={`bg-black h-1 w-10 transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    ></div>
                    <div
                        className={`bg-black h-1 w-10 transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    ></div>
                </span>


                <AnimatePresence>
                    {isOpen &&
                        <motion.div variants={menuAnimation} initial="initial" animate="animate" exit="exit" className='fixed origin-top left-0 top-0 w-full h-screen bg-[#ffd931] text-black p-4'>


                            <div className='flex h-full flex-col'>
                                <div className="flex justify-between">
                                    <h1 className='text-3xl text-black'>PRABHJOT</h1>
                                </div>

                                <motion.div
                                    variants={containerAnimation}
                                    initial="initial"
                                    animate="open"
                                    exit="initial"
                                    className="flex flex-col h-full justify-center text-xl items-center gap-4 "
                                >
                                    {
                                        links.map((item, i) => <div key={i} className='overflow-hidden'>
                                            <MobileNavLink toggleMenu={toggleMenu} setIsOpen={setIsOpen} isOpen={isOpen} key={i} title={item.link} to={item.path} />
                                        </div>)
                                    }
                                </motion.div>

                            </div>
                        </motion.div>}


                </AnimatePresence>
            </div>
        </header>
    )
}

export default Navigation