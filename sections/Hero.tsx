"use client";

import React from 'react';
import cogImage from '@/public/images/cog.png';
import cylinderImage from '@/public/images/cylinder.png';
import noodleImage from '@/public/images/noodle.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
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
                    <Image src={cogImage} alt='Cog Image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' /> 
                    <Image src={cylinderImage} alt='Cylinder Image' className='hidden md:block -top-8 -left-32 md:absolute' /> 
                    <Image src={noodleImage} alt='Noodle Image' width={220} className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' /> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;