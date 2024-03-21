
import React from 'react'
import ExperienceCard from './ExperienceCard'

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const Experience = () => {
    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, color: '#222222' });
        } else {
            controls.start({ opacity: 0, y: 20, color: '#222222' });
        }
    }, [controls, inView]);


    return (
        <>
            <motion.section
                ref={ref}
                initial={{ opacity: 0, color: '#666666' }}
                animate={controls}
                transition={{ duration: 0.8 }}
                className='mt-20 flex flex-col'>

                <h2 className='underline text-3xl sm:text-4xl font-medium text-[#111111]'>PROJECT EXPERIENCE</h2>
                <div className='mt-20'>
                    <ExperienceCard />
                </div>

            </motion.section>
        </>
    )
}

export default Experience