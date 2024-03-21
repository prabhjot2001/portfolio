'use client'
import React from 'react'
import Link from 'next/link';
import { cardData } from '../_data/data';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from './Card';



const Work = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66%"]);
    return (
        <>
            <h2 id='portfolio' className='scroll-mt-[132px] underline text-3xl sm:text-4xl uppercase mt-20'>MY WORK</h2>

            <section ref={targetRef} className="hidden sm:flex relative h-[300vh] mt-20 ">
                <div className="sticky top-[132px] flex h-[500px] items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-20">
                        {cardData.map((card, i) => {
                            return <Card title={card.title} desc={card.description} img={card.img} link={card.link} key={i} />;
                        })}
                    </motion.div>
                </div>
            </section>


            <section className="sm:hidden mt-20 ">
                <div className="flex justify-center">
                    <div className="flex flex-col gap-10 sm:gap-40 sm:grid grid-cols-2">
                        {cardData.map((card, i) => {
                            return <Card title={card.title} desc={card.description} img={card.img} link={card.link} key={i} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work