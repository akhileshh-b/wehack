import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Navigation from '../navigation/Navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          FraudGuard
        </Link>
        <Navigation />
      </div>
    </header>
  );
} 