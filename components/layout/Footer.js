import Link from 'next/link';

/**
 * Footer global du site
 * Liens + Informations légales
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    solutions: [
      { name: 'Artisans', href: '/artisans' },
      { name: 'Associations', href: '/associations' },
      { name: 'Entreprises', href: '/entreprises' },
    ],
    company: [
      { name: 'À propos', href: '/a-propos' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/confidentialite' },
      { name: 'CGU', href: '/cgu' },
    ],
  };
  
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-neutral-900">H</span>
              </div>
              <span className="text-xl font-bold text-white">Hive Flow</span>
            </div>
            <p className="text-sm text-neutral-400">
              Simplifiez vos processus métier grâce à l'automatisation intelligente.
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Entreprise */}
          <div>
            <h3 className="font-semibold text-white mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Légal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 text-center">
            © {currentYear} Hive Flow. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}