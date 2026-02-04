import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-300 py-3 text-center shadow">
      <p className="flex items-center justify-center text-sm text-gray-700">
        © {new Date().getFullYear()} - All rights reserved
        <span
          title="Nure Alom"
          className="ml-2 cursor-pointer font-bold text-blue-600 hover:underline"
        >
          Nure Alom
        </span>
      </p>
    </footer>
  );
};

export default Footer;
