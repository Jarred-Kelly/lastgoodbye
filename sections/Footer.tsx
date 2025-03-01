import React from 'react';
import Image from 'next/image';
import Logo from '@/public/images/logosaas.png';
import SocialX from '@/public/icons/social-x.svg';
import SocialInsta from '@/public/icons/social-insta.svg';
import SocialFacebook from '@/public/icons/social-facebook.svg';

const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container">
                <div className='inline-flex realtive before:content-[""] before:top-2 before:bottom-0 before:h-full before:w-full   before:blur before:bg-[linear-gradient(to_right,#F87NFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute'>
                    <Image src={Logo} height={40} alt='SaaS Logo'className='relative' />
                </div>
                <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                    <a href='/'> About </a>
                    <a href='/'> Pricing </a>
                    <a href='/'> Customer </a>
                </nav>
                <div className='flex justify-center gap-6 mt-6'>
                    <SocialX />
                    <SocialInsta />
                    {/* <SocialFacebook /> */}
                </div>
                <p className='mt-6'>&copy; 2025 Last Goodbye, Inc. All rights reserved  </p>
            </div>
        </footer>
    )
  }
  
  export default Footer;