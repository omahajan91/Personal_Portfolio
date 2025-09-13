// src/components/LogoBanner.jsx
import React from 'react';

// Using text placeholders. Replace these with your actual logo imports.
const logoPlaceholders = [
  'LOGOIPSUM',
  'N COMPANY',
  'LOGO',
  'YOURBRAND',
  'CLIENT',
  'ENTERPRISE',
  'FRAMEWORK',
];

// We duplicate the logos to create a seamless, infinite scrolling effect
const extendedLogos = [...logoPlaceholders, ...logoPlaceholders];

const LogoBanner = () => {
  return (
    <div className="w-full py-8 bg-[--color-brand-yellow] overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll">
        {extendedLogos.map((logo, index) => (
          <div key={index} className="inline-flex items-center justify-center mx-10 w-40">
            <span className="text-2xl font-bold text-black/60 tracking-widest">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;