// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import aboutImg from '../assets/logos/om_logo-removebg-preview.png';

// A small sub-component to keep the detail items clean and reusable
const DetailItem = ({ label, value }) => (
  <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/10">
    <p className="text-xs text-white/50">{label}</p>
    <p className="font-semibold text-white/90">{value}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-[--color-brand-yellow] tracking-widest uppercase">BIOGRAPHY</p>
          <h2 className="text-4xl md:text-5xl font-bold my-3">Who am I?</h2>
          <div className="w-16 h-0.5 bg-[--color-brand-yellow] mx-auto"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Dotted background element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[radial-gradient(circle_at_center,#333_1px,transparent_1px)] [background-size:1rem_1rem] -z-0"></div>
            <img 
              src={aboutImg} 
              alt="About me" 
              className="rounded-lg object-cover w-full h-full shadow-2xl relative z-10"
            />
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white">Emma Watson's Details</h3>
            <p className="text-white/70 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailItem label="Name" value="Emma Watson" />
              <DetailItem label="Email" value="example@yahoo.com" />
              <DetailItem label="Address" value="Surat, Gujarat" />
              <DetailItem label="Phone No." value="+99 123 (456) 789" />
            </div>
            <button className="group mt-4 inline-flex items-center gap-3 bg-transparent border-2 border-[--color-brand-yellow] text-[--color-brand-yellow] font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[--color-brand-yellow] hover:text-black">
              Download CV
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;