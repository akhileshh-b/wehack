import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Detect', href: '/detect' },
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  return (
    <nav>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            `nav-link ${isActive ? 'active' : ''}`
          }
        >
          {({ isActive }) => (
            <motion.span
              initial={false}
              animate={{
                color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                borderBottomColor: isActive ? 'var(--primary-color)' : 'transparent',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.span>
          )}
        </NavLink>
      ))}
    </nav>
  );
} 