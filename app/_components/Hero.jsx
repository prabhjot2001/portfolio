'use client'
import Image from 'next/image';
import { React, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Skills from './Skills';
import img from '../../public/hero.jpg'
import Experience from './Experience';
import { Parallax } from './Parallax';

const Hero = () => {

    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, color: '#111111' });
        } else {
            controls.start({ opacity: 0, y: 20, color: '#656565' });
        }
    }, [controls, inView]);


    return (
        <div id='home' className='scroll-mt-[132px] flex flex-col-reverse md:flex-row gap-[3rem] sm:gap-[7rem]'>


            <div className='flex-[1.5]'>
                <div className='flex flex-col gap-[1rem] sm:gap-[2.0rem]'>

                    <motion.h1
                        ref={ref}
                        initial={{ opacity: 0, color: '#666666' }}
                        animate={controls}
                        transition={{ duration: 0.8 }} className='text-6xl sm:text-8xl'>HEY, I&apos;M PRABHJOT</motion.h1>

                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, color: '#666666' }}
                        animate={controls}
                        transition={{ duration: 0.8 }}
                        className='scroll-mt-[132px] uppercase text-gray-500 mt-8 sm:mt-20 sm:leading-[3rem] text-2xl sm:text-3xl font-bold'
                        id='about'
                    >
                        I&apos;m a recent graduate and a passionate full-stack developer with a strong focus on building innovative and impactful solutions. With expertise in the latest technologies like the
                        Spring Boot, Node.js, DBMS, UNIX, and more.
                    </motion.p>
                </div>

                <Skills />
                <Experience />
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------- */}

            <div className='flex-[1] relative'>
                <div className='sticky top-[180px]'>
                    <Image src={img} width={1000} height={1000} alt='' className='h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero