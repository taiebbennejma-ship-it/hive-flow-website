/**
 * Composant Button - Bouton ou lien stylisé
 *
 * @param {ReactNode} children - Contenu du bouton (texte + icônes)
 * @param {string} variant - 'primary' | 'outline' | 'ghost' | 'theme'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} href - Si défini, rend un <a> au lieu d'un <button>
 * @param {string} className - Classes additionnelles
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary-500 shadow-md',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-neutral-500',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
    theme: 'bg-[var(--color-theme-500)] text-white hover:bg-[var(--color-theme-600)] hover:shadow-lg hover:-translate-y-0.5 focus:ring-[var(--color-theme-500)] shadow-md',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-2',
    md: 'px-7 py-3.5 text-base gap-2',
    lg: 'px-9 py-4 text-lg gap-3',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}