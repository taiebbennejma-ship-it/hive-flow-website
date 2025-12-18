/**
 * Composant Button réutilisable
 * Supporte différentes variantes et tailles
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  className = '',
  ...props 
}) {
  // Styles de base
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variantes de couleur
  const variants = {
    primary: 'bg-primary-300 text-neutral-900 hover:bg-primary-400 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    outline: 'border-2 border-primary-300 text-primary-700 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
    theme: 'bg-[var(--color-theme-500)] text-white hover:bg-[var(--color-theme-600)] focus:ring-[var(--color-theme-500)]',
  };
  
  // Tailles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Si c'est un lien
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }
  
  // Sinon c'est un bouton
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}