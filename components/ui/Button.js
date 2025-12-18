/**
 * Composant Button réutilisable - Version améliorée
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
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variantes de couleur
  const variants = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 focus:ring-amber-500 shadow-md hover:shadow-lg',
    secondary: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 focus:ring-amber-500',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-neutral-500',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
    theme: 'bg-[var(--color-theme-500)] text-white hover:bg-[var(--color-theme-600)] focus:ring-[var(--color-theme-500)] shadow-md hover:shadow-lg',
  };
  
  // Tailles avec plus d'espace
  const sizes = {
    sm: 'px-6 py-3 text-sm gap-2',
    md: 'px-8 py-4 text-base gap-2',
    lg: 'px-10 py-5 text-lg gap-3',
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