'use client';
import React from 'react';

const navItems: string[] = ['Service', 'Industries', 'Cases', 'Company', 'Contacts'];

const Logo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Web3 Solutions</h2>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-between ">
      <Logo />
      <nav className="mt-4 lg:mt-0">
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <button className='bg-[#075199] text-[#fff] py-2 px-6 rounded-[8px]'>Contactus</button>
    </header>
  );
};

export default Header;
