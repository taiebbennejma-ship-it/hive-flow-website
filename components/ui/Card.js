/**
 * Composant Card réutilisable
 * Pour afficher du contenu encadré
 */
export default function Card({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) {
  const variants = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-lg',
    theme: 'bg-[var(--color-theme-50)] border border-[var(--color-theme-100)]',
  };
  
  const cardClasses = `rounded-xl p-6 transition-all duration-200 ${variants[variant]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}