'use client'
import React from 'react'
import { logos } from '../_data/data'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Skills = () => {

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
        <>
            <motion.section
                ref={ref}
                initial={{ opacity: 0, color: '#666666' }}
                animate={controls}
                transition={{ duration: 0.8 }}
                className='scroll-mt-[132px] mt-20 flex flex-col'
                id='skills'>
                <h2 className='underline text-3xl sm:text-4xl font-medium text-[#111111]'>MY SKILLS</h2>
                <div className='sm:mt-20 mt-10 text-[#222222]'>
                    {
                        logos.map((item, i) => <div className='mt-1' key={i}>
                            <p className={`uppercase font-semibold text-xl sm:text-2xl flex items-center justify-between `} key={i}> {(item.name)}
                            </p>
                        </div>)
                    }
                </div>
            </motion.section>
        </>
    )
}

export default Skills