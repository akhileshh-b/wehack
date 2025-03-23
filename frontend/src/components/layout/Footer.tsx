import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = {
  product: [
    { name: 'Features', href: '/about' },
    { name: 'Pricing', href: '/about' },
    { name: 'Security', href: '/about' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/about' },
    { name: 'Careers', href: '/about' },
  ],
  legal: [
    { name: 'Privacy', href: '/about' },
    { name: 'Terms', href: '/about' },
    { name: 'Cookie Policy', href: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Product</h3>
            <ul className="footer-links">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 