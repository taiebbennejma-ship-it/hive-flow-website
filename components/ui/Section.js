/**
 * Composant Section - Wrapper responsive avec backgrounds
 *
 * @param {ReactNode} children - Contenu de la section
 * @param {string} background - 'white' | 'gray' | 'theme' | 'gradient'
 * @param {string} pattern - 'none' | 'hexagon' | 'honeycomb'
 * @param {boolean} narrow - Utilise content-wrapper (65ch) pour meilleure lecture
 * @param {string} className - Classes additionnelles
 */
export default function Section({
  children,
  className = '',
  background = 'white',
  pattern = 'none',
  narrow = false,
  ...props
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    theme: 'bg-[var(--color-theme-50)]',
    gradient: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50',
  };

  const patterns = {
    none: '',
    hexagon: 'hexagon-pattern',
    honeycomb: 'honeycomb-pattern',
  };

  return (
    <section
      className={`section-padding ${backgrounds[background]} ${patterns[pattern]} ${className}`}
      {...props}
    >
      <div className={narrow ? 'content-wrapper' : 'container-custom'}>
        {children}
      </div>
    </section>
  );
}