"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import cogImage from '@/public/images/cog.png';
import Dove from '@/public/images/spring.png';
import noodleImage from '@/public/images/noodle.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll ({
        target: heroRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
            <div className='container'>
                <div className='md:flex items-center'>
                    <div className='md:w-[478px]'>
                        <div className='tex-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>Blah Blah</div>
                        <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Say Goodbye</h1>
                        <p className='tex-xl text-[#010D3E] tracking-tight mt-6'>Don't miss</p>
                        <div className='flex gap-1 items-center mt-[30px]'>
                            <button className='btn btn-primary'>Learn More!</button>
                        </div>
                    </div>
                    <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
                        <motion.div
                            animate={{
                                translateY: [-25, 25],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'mirror',
                                duration: 2.5,
                                ease: 'easeInOut',
                            }}
                            className='md:absolute md:h-full md:w-auto md:-left-6 lg:left-0'
                        >
                            <Image 
                                src={cogImage}
                                alt='Cog Image'
                                width={500}
                                height={648}
                                className='md:h-full md:w-auto md:max-w-none'
                            />
                        </motion.div>
                        
                        <motion.div
                            style={{
                                translateY: translateY,
                            }}
                            className='hidden md:block absolute -top-8 -left-32'
                        >
                            <Image 
                                src={Dove}
                                alt='Cylinder Image'
                                width={300}
                                height={300}
                            />
                        </motion.div>
                        
                        <motion.div
                            style={{
                                rotate: 30,
                                translateY: translateY,
                            }}
                            className='hidden lg:block absolute top-[524px] left-[448px]'
                        >
                            <Image 
                                src={noodleImage}
                                alt='Noodle Image'
                                width={220}
                                height={220}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;