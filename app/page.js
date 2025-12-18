import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function HomePage() {
  const targets = [
    {
      id: 'artisans',
      title: 'Artisans',
      description: 'Gagnez du temps sur vos tâches administratives et concentrez-vous sur votre savoir-faire.',
      icon: '🔨',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/artisans',
    },
    {
      id: 'associations',
      title: 'Associations',
      description: 'Simplifiez la gestion de votre association et mobilisez vos équipes plus efficacement.',
      icon: '🤝',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/associations',
    },
    {
      id: 'entreprises',
      title: 'Entreprises',
      description: 'Optimisez vos processus métier et accélérez votre croissance avec des workflows intelligents.',
      icon: '🏢',
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/entreprises',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="relative overflow-hidden pt-24 lg:pt-32 pb-20 lg:pb-28">
        <div className="absolute inset-0 hexagon-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"></div>
        
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 text-amber-800 text-sm font-medium shadow-sm">
                <span className="text-lg">✨</span>
                <span>Automatisez vos processus en quelques clics</span>
              </div>
            </div>
            
            {/* Titre */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight text-center">
              Simplifiez votre quotidien avec{' '}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Hive Flow
              </span>
            </h1>
            
            {/* Sous-titre */}
            <div className="flex justify-center mb-12">
              <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed text-center max-w-4xl px-4">
                Automatisez vos tâches répétitives, gagnez du temps et concentrez-vous sur ce qui compte vraiment pour votre activité.
              </p>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
              <Button variant="primary" size="lg" href="https://app.hiveflow.com" className="shadow-lg hover:shadow-xl">
                Accéder à Hive Flow
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" href="#decouvrir">
                Découvrir nos solutions
              </Button>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Essai gratuit 14 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Sans carte bancaire</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Support francophone</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section cibles */}
      <Section background="white" id="decouvrir">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Quelle est votre activité ?
            </h2>
            <div className="flex justify-center">
              <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl px-4">
                Choisissez votre profil pour découvrir comment Hive Flow peut vous aider au quotidien.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targets.map((target) => (
              <Link key={target.id} href={target.href} className="group">
                <div className="relative h-full bg-white rounded-2xl border-2 border-neutral-200 p-8 transition-all duration-300 hover:border-transparent hover:shadow-strong hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${target.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl ${target.bgColor} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                      {target.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {target.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {target.description}
                    </p>
                    
                    <div className={`flex items-center ${target.textColor} font-semibold group-hover:gap-3 gap-2 transition-all`}>
                      <span>En savoir plus</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Bénéfices */}
      <Section background="gray" className="relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Pourquoi choisir Hive Flow ?
            </h2>
            <div className="flex justify-center">
              <p className="text-xl text-neutral-600 max-w-3xl px-4">
                Une solution pensée pour simplifier votre quotidien professionnel
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Rapide et simple
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Mettez en place vos automatisations en quelques minutes, sans compétences techniques requises.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Gagnez du temps
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Automatisez vos tâches répétitives et libérez jusqu'à 10 heures par semaine pour l'essentiel.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Fiable et sécurisé
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Vos données sont protégées et vos processus fonctionnent 24h/24, 7j/7 sans interruption.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="white" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 hexagon-pattern"></div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Prêt à transformer votre quotidien ?
            </h2>
            <div className="flex justify-center mb-10">
              <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl px-4">
                Rejoignez des centaines d'utilisateurs qui ont déjà simplifié leur travail avec Hive Flow.
              </p>
            </div>
            <div className="flex justify-center mb-6">
              <Button variant="primary" size="lg" href="https://app.hiveflow.com" className="shadow-lg hover:shadow-xl">
                Commencer gratuitement
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
            <p className="text-sm text-neutral-500">
              Essai gratuit 14 jours • Sans carte bancaire • Support inclus
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}