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
import { twMerge } from 'tailwind-merge';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {className?: string; testimonials: typeof testimonials}) => (
    <div className={twMerge('flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',
         props.className
    )}>
        {props.testimonials.map(({ text, imageSrc, name }) => (
            <div className='card' key={name}>
                <div>
                    <div>{text}</div>
                    <div className='flex items-center gap-3 mt-5'>
                        <div className=''>
                            <Image src={imageSrc} alt={name} height={40} width={40} className="rounded-full" />
                        </div>
                        <div className='font-medium tracking-tight leading-5'>{name}</div>
                    </div>
                </div>
            </div>
        ))}
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
                <h2 className='section-title mt-5'>What out users say</h2>
                <p className='section-description mt-5'>Look ath lives we touched</p>
            </div>
            <div className='flex justify-center gap-6'>
                <TestimonialsColumn testimonials={firstCol}/>    
                <TestimonialsColumn testimonials={secondCol} className='hidden md:flex'/>    
                <TestimonialsColumn testimonials={thirdCol} className='hidden lg:flex'/>    
            </div>
        </div>
    </section>
  )
}

export default Testimonials;