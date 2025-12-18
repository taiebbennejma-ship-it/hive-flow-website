import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Hive Flow pour Entreprises - Automatisez vos processus',
  description: 'Optimisez vos processus métier et accélérez votre croissance avec des workflows intelligents.',
};

export default function EntreprisesPage() {
  const features = [
    {
      icon: '⚡',
      title: 'Automatisation avancée',
      description: 'Connectez tous vos outils et automatisez vos processus métier de bout en bout.',
    },
    {
      icon: '🔍',
      title: 'Accès intelligent aux données',
      description: 'Interrogez vos documents et bases de connaissances en langage naturel.',
    },
    {
      icon: '🔗',
      title: 'Intégrations multiples',
      description: 'Connectez vos outils CRM, ERP, comptabilité et communication.',
    },
    {
      icon: '📈',
      title: 'Analyses et rapports',
      description: 'Suivez vos indicateurs clés et générez des rapports automatiquement.',
    },
  ];

  const offers = [
    {
      name: 'Business',
      price: '199€',
      period: '/mois',
      description: 'Pour structurer vos processus',
      features: [
        'Jusqu\'à 10 utilisateurs',
        'Automatisations illimitées',
        'Toutes les intégrations',
        'Support prioritaire',
        'Rapports personnalisés',
      ],
      cta: 'Commencer',
      variant: 'outline',
    },
    {
      name: 'Enterprise',
      price: '499€',
      period: '/mois',
      description: 'Pour optimiser votre organisation',
      features: [
        'Utilisateurs illimités',
        'Tout le Business',
        'Accès intelligent aux données (RAG)',
        'Formations équipes',
        'Account manager dédié',
      ],
      cta: 'Essayer gratuitement',
      variant: 'theme',
      popular: true,
    },
    {
      name: 'Custom',
      price: 'Sur devis',
      period: '',
      description: 'Solution sur mesure',
      features: [
        'Tout l\'Enterprise',
        'Développements spécifiques',
        'Hébergement dédié',
        'SLA garantis',
      ],
      cta: 'Nous contacter',
      variant: 'outline',
    },
  ];

  const testimonials = [
    {
      name: 'Laurent Rousseau',
      role: 'CEO - Scale-up Tech',
      content: 'Hive Flow nous a permis de gagner 35% de productivité sur nos processus internes. Un vrai game-changer.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sophie Martinez',
      role: 'COO - PME industrielle',
      content: 'L\'accès intelligent aux données nous fait gagner un temps fou. Plus besoin de chercher dans des dizaines de documents.',
      avatar: '👩‍💼',
    },
    {
      name: 'David Chen',
      role: 'CTO - Startup SaaS',
      content: 'L\'intégration avec nos outils existants s\'est faite en quelques heures. Impressionnant.',
      avatar: '👨‍💻',
    },
  ];

  return (
    <div data-theme="enterprise">
      {/* Hero Section */}
      <Section background="theme" className="pt-20 lg:pt-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-enterprise-100 text-enterprise-700 text-sm font-medium mb-6">
                🏢 Solution pour entreprises
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Accélérez votre croissance avec l'automatisation
              </h1>
              
              <div className="mb-8">
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Hive Flow optimise vos processus métier et libère vos équipes des tâches répétitives pour qu'elles se concentrent sur la création de valeur.
                </p>
              </div>
              
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
              <div className="aspect-square bg-gradient-enterprise rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Qui sommes-nous */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-center">
            Qui sommes-nous ?
          </h2>
          <div className="flex justify-center mb-6">
            <p className="text-lg text-neutral-600 leading-relaxed text-center max-w-3xl">
              Hive Flow est une plateforme d'automatisation conçue pour les entreprises modernes qui veulent 
              optimiser leurs processus sans multiplier les outils. Nous croyons que la technologie doit 
              simplifier le travail, pas le complexifier.
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-lg text-neutral-600 leading-relaxed text-center max-w-3xl">
              Notre vision : permettre à chaque entreprise d'accéder à l'automatisation intelligente, 
              quelles que soient sa taille et ses ressources techniques, pour se concentrer sur l'innovation 
              et la croissance.
            </p>
          </div>
        </div>
      </Section>

      {/* Section Notre concept */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Notre concept
            </h2>
            <div className="flex justify-center">
              <p className="text-lg text-neutral-600 max-w-3xl">
                Une plateforme complète qui s'adapte à votre stack technologique existant.
              </p>
            </div>
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
        </div>
      </Section>

      {/* Section Qu'est-ce que l'automatisation */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Qu'est-ce que l'automatisation ?
              </h2>
              <div className="mb-4">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  L'automatisation transforme vos processus manuels en workflows automatiques. 
                  Au lieu que vos équipes passent du temps sur des tâches répétitives, Hive Flow 
                  orchestre vos outils et vos données pour que tout se déroule automatiquement.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Par exemple : quand un client potentiel remplit un formulaire, Hive Flow peut automatiquement 
                  créer une opportunité dans votre CRM, notifier le commercial concerné, programmer un rappel, 
                  et envoyer une séquence d'emails personnalisés. Le tout sans aucune intervention manuelle.
                </p>
              </div>
              
              <div className="bg-enterprise-50 border-l-4 border-enterprise-500 p-6 rounded-lg mb-6">
                <p className="text-enterprise-900 font-semibold mb-2">
                  💡 Le saviez-vous ?
                </p>
                <p className="text-enterprise-800">
                  Les entreprises utilisant Hive Flow réduisent leurs coûts opérationnels de 35% en moyenne.
                </p>
              </div>

              <div className="bg-neutral-50 border-l-4 border-neutral-400 p-6 rounded-lg">
                <p className="text-neutral-900 font-semibold mb-2">
                  🔍 Accès intelligent aux données (RAG)
                </p>
                <p className="text-neutral-700 mb-3">
                  Notre technologie permet à vos équipes d'interroger vos bases de connaissances 
                  en langage naturel. C'est comme avoir un expert qui connaît toute votre documentation 
                  et peut répondre instantanément à n'importe quelle question.
                </p>
                <p className="text-neutral-700">
                  <strong>Bénéfices concrets :</strong> Support client instantané, onboarding accéléré, 
                  prise de décision éclairée par vos données.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-enterprise rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Nos offres */}
      <Section background="gray" id="offres">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Nos offres
            </h2>
            <div className="flex justify-center">
              <p className="text-lg text-neutral-600 max-w-3xl">
                Des solutions adaptées à votre taille et vos ambitions. Essai gratuit de 14 jours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card 
                key={index} 
                variant={offer.popular ? 'theme' : 'elevated'}
                className={`relative ${offer.popular ? 'ring-2 ring-enterprise-500 scale-105' : ''}`}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-enterprise-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                      <svg className="w-5 h-5 text-enterprise-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
        </div>
      </Section>

      {/* Section Avis clients */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Ils nous font confiance
            </h2>
            <div className="flex justify-center">
              <p className="text-lg text-neutral-600 max-w-3xl">
                Découvrez ce que nos clients entreprises disent de Hive Flow.
              </p>
            </div>
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
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="theme">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <div className="flex justify-center mb-8">
            <p className="text-lg text-neutral-600 max-w-3xl">
              Rejoignez des centaines d'entreprises qui ont déjà optimisé leurs processus avec Hive Flow.
            </p>
          </div>
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