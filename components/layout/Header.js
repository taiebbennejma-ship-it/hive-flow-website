'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

/**
 * Header global du site - Version améliorée
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Artisans', href: '/artisans' },
    { name: 'Associations', href: '/associations' },
    { name: 'Entreprises', href: '/entreprises' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <span className="text-2xl font-bold text-white">H</span>
            </div>
            <span className="text-xl font-bold text-neutral-900 tracking-tight">Hive Flow</span>
          </Link>
          
          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors px-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" href="https://app.hiveflow.com/login">
              Se connecter
            </Button>
            <Button variant="primary" size="sm" href="https://app.hiveflow.com">
              Accéder à Hive Flow
            </Button>
          </div>
          
          {/* Menu Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
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
          <div className="md:hidden py-6 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-neutral-200">
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