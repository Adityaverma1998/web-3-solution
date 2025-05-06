'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems: string[] = ['Service', 'Industries', 'Cases', 'Company', 'Contacts'];

const Logo = () => (
  <div>
    <h2 className="text-2xl font-bold">Web3 Solutions</h2>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024; // Tailwind 'lg' breakpoint
      setIsMobile(mobile);

      if (!mobile) setIsOpen(false); // Auto-close drawer on desktop
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative z-50 flex items-center justify-between px-4 py-4 lg:px-12">
      <Logo />

      {/* Desktop Nav */}
      {!isMobile && (
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-blue-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <button className="ml-6 bg-[#075199] text-white py-2 px-6 rounded-[8px]">
            Contact Us
          </button>
        </nav>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Drawer */}
      {isMobile && isOpen && (
        <div className="fixed top-0 right-0 w-[80%] h-full bg-[#000] shadow-lg p-6 flex flex-col gap-6 z-40 transition-all duration-300 ease-in-out">
          <button className="self-end" onClick={toggleMenu}>
            <X size={24} />
          </button>
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-blue-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#075199] text-white py-2 px-6 rounded-[8px] w-fit mt-4">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
