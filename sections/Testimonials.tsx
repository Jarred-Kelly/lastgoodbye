"use client";

import React from 'react';
import avatar1 from "@/public/images/avatar-1.jpeg";
import avatar2 from "@/public/images/avatar-2.jpeg";
import avatar3 from "@/public/images/avatar-3.png";
import avatar4 from "@/public/images/avatar-4.png";
import avatar5 from "@/public/images/avatar-5.png";
import avatar6 from "@/public/images/avatar-6.png";
import avatar7 from "@/public/images/avatar-7.png";
import avatar8 from "@/public/images/avatar-8.png";
import avatar9 from "@/public/images/avatar-9.png";
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    image: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    image: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    image: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    image: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    image: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    image: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    image: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    image: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    image: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string; 
  testimonials: typeof testimonials;
  duration?: number;
  }) => (
  <div className={props.className}>
    <motion.div 
    animate={{
      translateY: "-50%",
    }} 
    transition={{
      duration: props.duration || 10,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    }}
    className='flex flex-col gap-6 pb-6'>
      {[... new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, image, name }) => (
            <div className='card' key={`${name}-${index}`}>
                <div>
                    <div>{text}</div>
                    <div className='flex items-center gap-3 mt-5'>
                        <div className=''>
                            <Image 
                              src={image} 
                              alt={name} 
                              height={40} 
                              width={40} 
                              className="rounded-full" 
                            />
                        </div>
                        <div className='font-medium tracking-tight leading-5'>{name}</div>
                    </div>
                </div>
            </div>
          ))}
        </React.Fragment>
      ))} 
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section className='bg-white pt-5'>
        <div className='container'>
            <div className='section-heading'>
                <div className='flex justify-center'>
                    <div className='tag'>Testimonials</div>
                </div>
                <h2 className='section-title mt-5'>What our users say</h2>
                <p className='section-description mt-5'>Look at the lives we touched</p>
            </div>
            <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden'>
                <TestimonialsColumn testimonials={firstCol} duration={15}/>    
                <TestimonialsColumn testimonials={secondCol} className='hidden md:block' duration={19}/>    
                <TestimonialsColumn testimonials={thirdCol} className='hidden lg:block' duration={17}/>    
            </div>
        </div>
    </section>
  )
}

export default Testimonials;