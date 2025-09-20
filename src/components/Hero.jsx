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
    <section className="min-h-screen flex items-center pt-20 pb-10 bg-[#1a1a1a] text-white">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <motion.div className="md:col-span-4 space-y-4 text-center md:text-left" variants={itemVariants}>
          <h1 className="text-7xl lg:text-8xl font-black tracking-tighter leading-tight">Hello.</h1>
          <div className="flex items-center gap-4 justify-center md:justify-start my-4">
            <span className="h-px w-12 bg-white mr-4"></span>
            <h2 className="text-2xl md:text-3xl font-light">I'm James Barnes</h2>
          </div>
          <p className="text-lg text-white/80">
            Professional Graphics Designer
          </p>
          <motion.button
            className="group mt-4 inline-flex items-center gap-3 bg-[#dac5a7] text-black font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-[#c9b084] w-fit mx-auto md:mx-0"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-5 w-5" />
            Download CV
          </motion.button>
        </motion.div>

        {/* Center Image with Yellow Patch */}
        <motion.div 
          className="md:col-span-4 relative flex justify-center items-center order-first md:order-none h-[450px]" 
          variants={imageVariants}
        >
          {/* Yellow-beige background patch */}
          <div className="absolute top-0 w-[80%] h-full bg-[#dac5a7] rounded-lg"></div>
          
          {/* Profile Image (adjusted to sit at the bottom of the patch) */}
          <img
            src={profileImg}
            alt="James Barnes"
            className="absolute bottom-0 h-[95%] w-auto object-cover z-10" // Adjust h-[95%] to control image height relative to patch
          />
        </motion.div>

        {/* Right Column */}
        <motion.div className="md:col-span-4 text-center md:text-left" variants={itemVariants}>
          {/* "Blake" text as a lighter, larger element */}
          <h3 className="text-5xl font-black text-white/10 mb-6">
            Blake
          </h3>
          <p className="mb-6 text-white/80 leading-relaxed">
            I am a UI/UX Designer. My specialty lies in the pre-production design process. That's creativity in determining the design that fits the company's goals.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2 text-lg font-semibold text-[#dac5a7]">
            Let's Talk
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;