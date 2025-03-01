"use client";

import React from 'react';
import ArrowRight from "@/public/icons/arrow-right.svg";
import Menu from "@/public/icons/menu.svg";
import Logo from "@/public/images/logosaas.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
        <div className='py-5'> 
            <div className='container'> 
                <div className='flex items-center justify-between'> 
                    <Image src={Logo} alt="Logo" height={40} width={40} />
                    <Menu className='h-4 w-4 md:hidden' />
                    <nav className='flex gap-6 text-black font-serif font-semibold items-center'>
                        <a href='/'>About Us</a>
                        <a href='/'>Contact Us</a>
                        <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>Get a Quote!</button>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;