// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import profileImg from '../assets/logos/om_logo-removebg-preview.png';

const Hero = () => {
  // Animation variants for Framer Motion to stagger the animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 bg-[#111111]">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <motion.div className="md:col-span-4 space-y-4 text-center md:text-left" variants={itemVariants}>
          <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter">Hello.</h1>
          <div className="flex items-center justify-center md:justify-start my-4">
            <span className="h-px w-12 bg-white mr-4"></span>
            <h2 className="text-2xl md:text-3xl font-bold">I'm James Barnes</h2>
          </div>
          <p className="text-lg text-white/70">
            Professional Graphics Designer
          </p>
          <motion.button
            className="group mt-4 inline-flex items-center gap-3 bg-transparent border-2 border-[--color-brand-yellow] text-[--color-brand-yellow] font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[--color-brand-yellow] hover:text-black"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
            <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.button>
        </motion.div>

        {/* Center Image */}
        <motion.div className="md:col-span-4 relative flex justify-center order-first md:order-none" variants={imageVariants}>
          <img
            src={profileImg}
            alt="James Barnes"
            className="max-w-xs md:max-w-full h-auto object-cover z-10"
          />
          {/* Circular Text Placeholder - A real implementation would use an SVG */}
          <div className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 w-36 h-36 border-2 border-dashed border-[--color-brand-yellow] rounded-full flex items-center justify-center text-center text-[10px] font-bold uppercase text-[--color-brand-yellow] leading-tight animate-spin"
            style={{ animationDuration: '20s' }}
          >
             Professional • UI / UX Designer • 
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="md:col-span-4 text-center md:text-left" variants={itemVariants}>
          <p className="mb-6 text-white/80 leading-relaxed">
            I am a UI/UX Designer. My specialty lies in the pre-production design process. That's creativity in determining the design that fits the company's goals.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2 text-lg font-semibold text-[--color-brand-yellow]">
            Let's Talk
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;