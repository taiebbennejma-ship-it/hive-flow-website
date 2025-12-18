import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

/**
 * Page d'accueil - Onboarding
 * Choix de la cible utilisateur
 */
export default function HomePage() {
  const targets = [
    {
      id: 'artisans',
      title: 'Artisans',
      description: 'Gagnez du temps sur vos tâches administratives et concentrez-vous sur votre savoir-faire.',
      icon: '🔨',
      color: 'artisan',
      gradient: 'from-artisan-400 to-artisan-600',
      href: '/artisans',
    },
    {
      id: 'associations',
      title: 'Associations',
      description: 'Simplifiez la gestion de votre association et mobilisez vos équipes plus efficacement.',
      icon: '🤝',
      color: 'association',
      gradient: 'from-association-400 to-association-600',
      href: '/associations',
    },
    {
      id: 'entreprises',
      title: 'Entreprises',
      description: 'Optimisez vos processus métier et accélérez votre croissance avec des workflows intelligents.',
      icon: '🏢',
      color: 'enterprise',
      gradient: 'from-enterprise-400 to-enterprise-600',
      href: '/entreprises',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-20 lg:pt-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            ✨ Automatisez vos processus en quelques clics
          </div>
          
          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Simplifiez votre quotidien avec{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hive Flow
            </span>
          </h1>
          
          {/* Sous-titre */}
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            Automatisez vos tâches répétitives, gagnez du temps et concentrez-vous sur ce qui compte vraiment pour votre activité.
          </p>
          
          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" size="lg" href="https://app.hiveflow.com">
              Accéder à Hive Flow
            </Button>
            <Button variant="outline" size="lg" href="#decouvrir">
              Découvrir nos solutions
            </Button>
          </div>
        </div>
      </Section>

      {/* Section choix des cibles */}
      <Section background="gray" id="decouvrir">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Quelle est votre activité ?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choisissez votre profil pour découvrir comment Hive Flow peut vous aider au quotidien.
          </p>
        </div>

        {/* Cards des cibles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {targets.map((target) => (
            <Link key={target.id} href={target.href} className="group">
              <Card 
                variant="elevated" 
                className="h-full hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Icône avec gradient */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${target.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {target.icon}
                </div>
                
                {/* Titre */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {target.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-600 mb-6">
                  {target.description}
                </p>
                
                {/* Lien */}
                <div className="flex items-center text-primary-700 font-medium group-hover:text-primary-800">
                  En savoir plus
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Section Bénéfices rapides */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Pourquoi choisir Hive Flow ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bénéfice 1 */}
          <div className="text-center">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Rapide et simple
            </h3>
            <p className="text-neutral-600">
              Mettez en place vos automatisations en quelques minutes, sans compétences techniques.
            </p>
          </div>

          {/* Bénéfice 2 */}
          <div className="text-center">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Gagnez du temps
            </h3>
            <p className="text-neutral-600">
              Automatisez vos tâches répétitives et libérez jusqu'à 10 heures par semaine.
            </p>
          </div>

          {/* Bénéfice 3 */}
          <div className="text-center">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Fiable et sécurisé
            </h3>
            <p className="text-neutral-600">
              Vos données sont protégées et vos processus fonctionnent 24h/24.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Prêt à transformer votre quotidien ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Rejoignez des centaines d'utilisateurs qui ont déjà simplifié leur travail avec Hive Flow.
          </p>
          <Button variant="primary" size="lg" href="https://app.hiveflow.com">
            Commencer gratuitement
          </Button>
        </div>
      </Section>
    </>
  );
}