'use client';
import React from 'react';
 
const Footer = () => {
     console.log(" Footer component loaded");
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} New Generation High School. All rights reserved.
      </p>
      <p className="text-xs">123 Learning Lane, Calgary, AB</p>
    </footer>
  );
};
 
export default Footer;
 