'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Key, HardHat, Paintbrush } from 'lucide-react';

const services = [
  {
    title: 'Residential Building',
    icon: <Home size={28} />,
    description: 'We specialize in constructing high-quality residential buildings that cater to the diverse needs and preferences of our clients. Whether it\'s a single-family home, an apartment complex, or a gated community, we deliver space that is structurally sound and aesthetically pleasing.'
  },
  {
    title: 'Commercial Building',
    icon: <Building2 size={28} />,
    description: 'Our expertise extends to the construction of commercial buildings, including office complexes, retail outlets, industrial facilities, and more. We work closely with our clients to deliver spaces that meet business objectives and adhere to strict safety standards.'
  },
  {
    title: 'Turnkey Work',
    icon: <Key size={28} />,
    description: 'As a full-service construction firm, we offer turnkey solutions to streamline the building process. From conceptualization and design to construction and final handover, we provide a seamless and hassle-free experience.'
  },
  {
    title: 'Renovation Work',
    icon: <HardHat size={28} />,
    description: 'Whether it\'s revitalizing an existing space or restoring a historic building, we have the expertise to handle renovation projects of all sizes. Our team transforms outdated structures into modern, functional, and visually appealing spaces.'
  },
  {
    title: 'Interior Work',
    icon: <Paintbrush size={28} />,
    description: 'We offer comprehensive interior design and fit-out services to enhance the aesthetics and usability of your spaces. From space planning to finishing touches, we ensure every aspect aligns with our clients\' vision.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase text-black dark:text-white">Our Services</h2>
          <p className="max-w-2xl text-black/70 dark:text-white/70 font-medium">
            At MASS Developers, we are committed to delivering spaces that are not just structurally sound but also aesthetically pleasing and functional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-8 border border-black dark:border-white bg-white dark:bg-black transition-all duration-500 rounded-3xl group overflow-hidden shadow-none hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-transparent">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10 text-black dark:text-white uppercase tracking-wider">{service.title}</h3>
              <p className="text-black/70 dark:text-white/70 font-medium leading-relaxed text-sm relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
