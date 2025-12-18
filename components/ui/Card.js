/**
 * Composant Card - Conteneur stylisé pour afficher du contenu
 *
 * @param {ReactNode} children - Contenu de la card
 * @param {string} variant - 'default' | 'elevated' | 'theme' | 'hexagon'
 * @param {boolean} hover - Active l'effet hover (lift + shadow)
 * @param {string} className - Classes additionnelles
 */
export default function Card({
  children,
  variant = 'default',
  hover = false,
  className = '',
  ...props
}) {
  const variants = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-soft',
    theme: 'bg-[var(--color-theme-50)] border border-[var(--color-theme-100)]',
    hexagon: 'bg-white shadow-soft relative overflow-hidden',
  };

  const hoverClass = hover ? 'card-hover' : '';

  const cardClasses = `rounded-xl p-6 lg:p-8 transition-all duration-300 ${variants[variant]} ${hoverClass} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {variant === 'hexagon' && (
        <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-theme-500)] opacity-5 hexagon-shape translate-x-8 -translate-y-8"></div>
      )}
      {children}
    </div>
  );
}