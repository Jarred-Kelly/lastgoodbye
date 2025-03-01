'use client';

import React, { useRef } from 'react';
import ArrowRight from "@/public/icons/arrow-right.svg";
import starImage from '@/public/images/star.png';
import springImage from '@/public/images/spring.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
    const callToActionRef = useRef(null);
    const { scrollYProgress } = useScroll ({
        target: callToActionRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={callToActionRef} className='bg-gradient-to-b from-white to-[#D2DCFF]'>
            <div className="container">
                <div className=" py-24">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Contact Us Now!
                        </h2>
                        <p className="section-description mt-5">
                            Don't wait
                        </p>
                        <motion.img 
                            src={starImage.src}
                            alt="Star Image"
                            width={360}
                            className='absolute -left-[350px] -top-[137px] overflow-x-clip'
                            style={{
                                translateY: translateY,
                            }} 
                        />
                        <motion.img 
                            src={springImage.src}
                            alt='Spring Image'
                            width={360}
                            className='absolute -rigth-[331px] -top-[19px]' 
                            style={{
                                translateY: translateY,
                            }}
                        /> 
                    </div>
                    <div className="flex gap-2 mt-10 justify-center">
                        <button className="btn btn-primary">
                            Contact Us Now!
                        </button>
                        
                        <button className="btn btn-text gap-1">
                            <span>
                                Learn More!
                            </span>
                            <ArrowRight className='h-4 w-4 inline-flex justify-center items-center' />
                        </button>                        
                    </div>
                </div>
            </div>
        </section>
    )
  }
  
  export default CallToAction;