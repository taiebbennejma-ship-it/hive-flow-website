/**
 * Composant Section réutilisable
 */
export default function Section({ 
  children, 
  className = '',
  background = 'white',
  ...props 
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    theme: 'bg-[var(--color-theme-50)]',
  };
  
  return (
    <section 
      className={`section-padding ${backgrounds[background]} ${className}`} 
      {...props}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}