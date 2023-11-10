// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faShoppingCart } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-200 text-gray-600 py-6 mt-6 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-icons px-4">
          {/* Add your e-commerce icons here */}
          <FontAwesomeIcon icon={faFacebook} className="text-2xl mr-3 px-4 hover:text-black" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl mr-3 px-4 hover:text-black" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl px-4 hover:text-black" />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
        <button onClick={scrollToTop} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
