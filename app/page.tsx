import React from 'react';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Testimonials from '@/sections/Testimonials';
import CallToAction from '@/sections/CallToAction';
import Footer from '@/sections/Footer';

const LandingPage = () => {
  return (
    <section className='bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
      <Header />
      <Hero />
      <Testimonials />
      <CallToAction />
      <Footer />
    </section>
  )
}

export default LandingPage;