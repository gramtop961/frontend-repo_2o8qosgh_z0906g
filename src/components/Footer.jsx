import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10 py-8 text-center text-sm text-white/60">
      <p>
        © {new Date().getFullYear()} EverWant • A unified experience for shopping, music, booking, and gaming.
      </p>
      <p className="mt-2">Made with love and cosmic vibes.</p>
    </footer>
  );
};

export default Footer;
