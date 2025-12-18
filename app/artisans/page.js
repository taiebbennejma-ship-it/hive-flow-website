import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

/**
 * Page Artisans
 * Solutions d'automatisation pour artisans
 */
export const metadata = {
  title: 'Hive Flow pour Artisans - Automatisez votre gestion',
  description: 'Gagnez du temps sur vos tâches administratives et concentrez-vous sur votre savoir-faire.',
};

export default function ArtisansPage() {
  const features = [
    {
      icon: '📧',
      title: 'Gestion des emails',
      description: 'Triez et répondez automatiquement aux demandes de devis, confirmations de rendez-vous.',
    },
    {
      icon: '📅',
      title: 'Planning automatisé',
      description: 'Organisez vos interventions et envoyez des rappels automatiques à vos clients.',
    },
    {
      icon: '💰',
      title: 'Facturation simplifiée',
      description: 'Générez vos factures automatiquement après chaque intervention.',
    },
    {
      icon: '📱',
      title: 'Suivi client',
      description: 'Gardez le contact avec vos clients et relancez-les au bon moment.',
    },
  ];

  const offers = [
    {
      name: 'Essentiel',
      price: '29€',
      period: '/mois',
      description: 'Pour démarrer avec les bases',
      features: [
        'Automatisation des emails',
        'Gestion de planning',
        'Jusqu\'à 100 tâches/mois',
        'Support par email',
      ],
      cta: 'Commencer',
      variant: 'outline',
    },
    {
      name: 'Professionnel',
      price: '79€',
      period: '/mois',
      description: 'Pour optimiser votre activité',
      features: [
        'Tout l\'Essentiel',
        'Facturation automatique',
        'Tâches illimitées',
        'Support prioritaire',
        'Intégrations avancées',
      ],
      cta: 'Essayer gratuitement',
      variant: 'theme',
      popular: true,
    },
    {
      name: 'Sur mesure',
      price: 'Sur devis',
      period: '',
      description: 'Pour des besoins spécifiques',
      features: [
        'Tout le Professionnel',
        'Développements personnalisés',
        'Formation dédiée',
        'Account manager dédié',
      ],
      cta: 'Nous contacter',
      variant: 'outline',
    },
  ];

  const testimonials = [
    {
      name: 'Pierre Martin',
      role: 'Plombier-chauffagiste',
      content: 'Depuis que j\'utilise Hive Flow, je gagne 5 heures par semaine sur ma paperasse. Je peux enfin me concentrer sur mes chantiers.',
      avatar: '👨‍🔧',
    },
    {
      name: 'Sophie Dubois',
      role: 'Électricienne',
      content: 'La facturation automatique est un gain de temps incroyable. Plus besoin de passer mes soirées à faire des factures !',
      avatar: '👩‍🔧',
    },
    {
      name: 'Marc Lefebvre',
      role: 'Menuisier',
      content: 'Mes clients adorent recevoir leurs confirmations de rendez-vous automatiquement. Très professionnel.',
      avatar: '👨‍🏭',
    },
  ];

  return (
    <div data-theme="artisan">
      {/* Hero Section */}
      <Section background="theme" className="pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-artisan-100 text-artisan-700 text-sm font-medium mb-6">
              🔨 Solution pour artisans
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Concentrez-vous sur votre métier, on s'occupe du reste
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8">
              Hive Flow automatise vos tâches administratives pour que vous puissiez vous concentrer sur ce que vous faites de mieux : votre savoir-faire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="theme" size="lg" href="https://app.hiveflow.com">
                Accéder à Hive Flow
              </Button>
              <Button variant="outline" size="lg" href="#offres">
                Voir les tarifs
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-artisan rounded-2xl opacity-20"></div>
          </div>
        </div>
      </Section>

      {/* Section Qui sommes-nous */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-neutral-600 mb-6">
            Hive Flow est une solution conçue par et pour des professionnels qui veulent simplifier leur quotidien. 
            Nous comprenons que votre temps est précieux et que les tâches administratives peuvent être chronophages.
          </p>
          <p className="text-lg text-neutral-600">
            Notre mission : vous permettre de vous concentrer sur votre expertise en automatisant tout ce qui peut l'être, 
            de la gestion des emails à la facturation, en passant par le planning.
          </p>
        </div>
      </Section>

      {/* Section Notre concept */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Notre concept
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Un logiciel simple qui s'adapte à votre façon de travailler, pas l'inverse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section Qu'est-ce que l'automatisation */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Qu'est-ce que l'automatisation ?
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              L'automatisation, c'est comme avoir un assistant qui travaille pour vous 24h/24. 
              Au lieu de passer du temps sur des tâches répétitives, vous configurez une fois 
              comment elles doivent être faites, et Hive Flow s'en occupe automatiquement.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Par exemple : quand vous recevez un email de demande de devis, Hive Flow peut 
              automatiquement envoyer votre grille tarifaire, créer un rappel dans votre planning 
              et archiver l'échange. Tout ça sans que vous ayez à lever le petit doigt.
            </p>
            
            <div className="bg-artisan-50 border-l-4 border-artisan-500 p-6 rounded-lg">
              <p className="text-artisan-900 font-semibold mb-2">
                💡 Le saviez-vous ?
              </p>
              <p className="text-artisan-800">
                En moyenne, nos utilisateurs artisans gagnent 8 heures par semaine grâce à l'automatisation.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-artisan rounded-2xl opacity-20"></div>
          </div>
        </div>
      </Section>

      {/* Section Nos offres */}
      <Section background="gray" id="offres">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Nos offres
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à votre activité. Tous nos plans incluent un essai gratuit de 14 jours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              variant={offer.popular ? 'theme' : 'elevated'}
              className={`relative ${offer.popular ? 'ring-2 ring-artisan-500 scale-105' : ''}`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-artisan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Le plus populaire
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {offer.name}
                </h3>
                <p className="text-neutral-600 mb-4">{offer.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-neutral-900">{offer.price}</span>
                  <span className="text-neutral-600 ml-1">{offer.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-artisan-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={offer.variant} 
                className="w-full"
                href="https://app.hiveflow.com"
              >
                {offer.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section Avis clients */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez ce que nos utilisateurs artisans disent de Hive Flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="elevated">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-neutral-700 italic">
                "{testimonial.content}"
              </p>
              <div className="flex text-primary-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="theme">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Prêt à simplifier votre quotidien d'artisan ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Rejoignez des centaines d'artisans qui ont déjà gagné du temps avec Hive Flow.
          </p>
          <Button variant="theme" size="lg" href="https://app.hiveflow.com">
            Essayer gratuitement pendant 14 jours
          </Button>
          <p className="text-sm text-neutral-600 mt-4">
            Sans engagement • Sans carte bancaire
          </p>
        </div>
      </Section>
    </div>
  );
}