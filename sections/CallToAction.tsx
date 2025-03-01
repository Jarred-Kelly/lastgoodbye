'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ArrowRight from "@/public/icons/arrow-right.svg";
import starImage from '@/public/images/star.png';
import springImage from '@/public/images/spring.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const CallToAction = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const callToActionRef = useRef(null);
    const { scrollYProgress } = useScroll ({
        target: callToActionRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={callToActionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] relative'>
            <div className="container">
                <div className="py-24">
                    <div className="section-heading">
                        <h2 className="section-title">
                            Contact Us Now!
                        </h2>
                        <p className="section-description mt-5">
                            Don't wait to arrange a livestream for your loved one's service
                        </p>
                        <div className="absolute -left-[350px] -top-[137px] overflow-x-clip">
                            <motion.div
                                style={{
                                    translateY: translateY,
                                }}
                            >
                                <Image 
                                    src={starImage}
                                    alt="Star Image"
                                    width={360}
                                    height={360}
                                />
                            </motion.div>
                        </div>
                        <div className="absolute -right-[331px] -top-[19px]">
                            <motion.div
                                style={{
                                    translateY: translateY,
                                }}
                            >
                                <Image 
                                    src={springImage}
                                    alt='Spring Image'
                                    width={360}
                                    height={360}
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-10 justify-center">
                        <button 
                            className="btn btn-primary"
                            onClick={() => setIsContactFormOpen(true)}
                        >
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
            
            <ContactForm 
                isOpen={isContactFormOpen} 
                onClose={() => setIsContactFormOpen(false)} 
            />
        </section>
    )
}
  
export default CallToAction;