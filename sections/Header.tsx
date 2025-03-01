"use client";

import React, { useState } from 'react';
import ArrowRight from "@/public/icons/arrow-right.svg";
import Menu from "@/public/icons/menu.svg";
import Logo from "@/public/images/logosaas.png";
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

const Header = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactFormOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
        <div className='py-5'> 
            <div className='container'> 
                <div className='flex items-center justify-between'> 
                    <Image src={Logo} alt="Logo" height={40} width={40} />
                    
                    <div className='md:hidden'>
                      <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='flex items-center justify-center'
                      >
                        <Menu className='h-5 w-5' />
                      </button>
                    </div>
                    
                    {/* Desktop Menu */}
                    <nav className='hidden md:flex gap-6 text-black font-serif font-semibold items-center'>
                        <a href='/'>About Us</a>
                        <a 
                          href='#' 
                          onClick={handleOpenContactForm}
                        >
                          Contact Us
                        </a>
                        <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>
                          Get a Quote!
                        </button>
                    </nav>
                </div>
                
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                  <div className='md:hidden mt-4 py-4 px-2 bg-white rounded-lg shadow-md'>
                    <nav className='flex flex-col gap-4 text-black font-serif font-semibold'>
                      <a href='/' className='px-4 py-2 hover:bg-gray-100 rounded-md'>About Us</a>
                      <a 
                        href='#' 
                        onClick={handleOpenContactForm}
                        className='px-5 py-2 hover:bg-gray-100 rounded-md'
                      >
                        Contact Us
                      </a>
                      <button className='mx-4 bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>
                        Get a Quote!
                      </button>
                    </nav>
                  </div>
                )}
            </div>
        </div>
        
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
    </header>
  )
}

export default Header;