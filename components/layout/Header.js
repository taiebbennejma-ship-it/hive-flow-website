'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

/**
 * Header global du site
 * Navigation + Logo + CTA
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Artisans', href: '/artisans' },
    { name: 'Associations', href: '/associations' },
    { name: 'Entreprises', href: '/entreprises' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-900">H</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">Hive Flow</span>
          </Link>
          
          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" href="https://app.hiveflow.com/login">
              Se connecter
            </Button>
            <Button variant="primary" size="sm" href="https://app.hiveflow.com">
              Accéder à Hive Flow
            </Button>
          </div>
          
          {/* Menu Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-neutral-900 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" size="sm" href="https://app.hiveflow.com/login">
                  Se connecter
                </Button>
                <Button variant="primary" size="sm" href="https://app.hiveflow.com">
                  Accéder à Hive Flow
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}