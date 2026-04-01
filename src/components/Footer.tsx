'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">
            MASS<span className="text-gray-500">.</span>DEVELOPERS
          </h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Building better together. We are a construction and interior design firm dedicated to honesty, quality, and excellence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 border border-border hover:bg-foreground hover:text-background transition-all rounded-full">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="p-2 border border-border hover:bg-foreground hover:text-background transition-all rounded-full">
              <FacebookIcon size={20} />
            </a>
            <a href="mailto:project@massdevelopers.in" className="p-2 border border-border hover:bg-foreground hover:text-background transition-all rounded-full">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Our Services</a></li>
            <li><a href="#projects" className="hover:text-foreground transition-colors">Latest Projects</a></li>
            <li><a href="#blogs" className="hover:text-foreground transition-colors">Read Blogs</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-bold mb-6">Contact Us</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 text-gray-400 shrink-0" size={20} />
                <p className="text-sm text-gray-500 leading-relaxed">
                  46/1169- A1, Madappat Road, <br />
                  Chalikavattom, Vennala PO, <br />
                  Ernakulam, 682028
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-gray-400 shrink-0" size={20} />
                <div className="text-sm text-gray-500">
                  <p>+91 7025576777</p>
                  <p>+91 8089248246</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gray-400 shrink-0" size={20} />
                <div className="text-sm text-gray-500">
                  <p>project@massdevelopers.in</p>
                  <p>massdevelopers@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} MASS Developers. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
