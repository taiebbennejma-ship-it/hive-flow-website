import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

/**
 * Page Associations
 * Solutions d'automatisation pour associations
 */
export const metadata = {
  title: 'Hive Flow pour Associations - Automatisez votre gestion',
  description: 'Simplifiez la gestion de votre association et mobilisez vos équipes plus efficacement.',
};

export default function AssociationsPage() {
  const features = [
    {
      icon: '👥',
      title: 'Gestion des membres',
      description: 'Automatisez les inscriptions, renouvellements et communications avec vos adhérents.',
    },
    {
      icon: '📆',
      title: 'Organisation d\'événements',
      description: 'Planifiez vos événements et envoyez des invitations automatiques à vos membres.',
    },
    {
      icon: '💳',
      title: 'Suivi des cotisations',
      description: 'Gérez les paiements et envoyez des rappels automatiques aux membres.',
    },
    {
      icon: '📊',
      title: 'Rapports d\'activité',
      description: 'Générez automatiquement vos bilans et rapports pour vos assemblées générales.',
    },
  ];

  const offers = [
    {
      name: 'Starter',
      price: '19€',
      period: '/mois',
      description: 'Pour les petites associations',
      features: [
        'Gestion jusqu\'à 50 membres',
        'Automatisation des emails',
        'Planning d\'événements',
        'Support par email',
      ],
      cta: 'Commencer',
      variant: 'outline',
    },
    {
      name: 'Collectif',
      price: '59€',
      period: '/mois',
      description: 'Pour structurer votre association',
      features: [
        'Membres illimités',
        'Gestion des cotisations',
        'Rapports automatiques',
        'Support prioritaire',
        'Intégrations comptables',
      ],
      cta: 'Essayer gratuitement',
      variant: 'theme',
      popular: true,
    },
    {
      name: 'Fédération',
      price: 'Sur devis',
      period: '',
      description: 'Pour les grandes structures',
      features: [
        'Tout le Collectif',
        'Multi-associations',
        'Formation des équipes',
        'Accompagnement dédié',
      ],
      cta: 'Nous contacter',
      variant: 'outline',
    },
  ];

  const testimonials = [
    {
      name: 'Marie Durand',
      role: 'Présidente - Association culturelle',
      content: 'Hive Flow nous a fait gagner un temps précieux sur la gestion administrative. On peut enfin se concentrer sur nos projets culturels.',
      avatar: '👩‍💼',
    },
    {
      name: 'Thomas Bernard',
      role: 'Trésorier - Club sportif',
      content: 'Le suivi des cotisations automatique est génial. Plus de relances manuelles, tout se fait tout seul !',
      avatar: '👨‍💼',
    },
    {
      name: 'Claire Petit',
      role: 'Secrétaire - Association humanitaire',
      content: 'Nos bénévoles adorent la simplicité. En quelques clics, on organise nos événements et on mobilise nos équipes.',
      avatar: '👩‍🦰',
    },
  ];

  return (
    <div data-theme="association">
      {/* Hero Section */}
      <Section background="theme" className="pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-association-100 text-association-700 text-sm font-medium mb-6">
              🤝 Solution pour associations
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Mobilisez vos équipes, pas votre temps
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8">
              Hive Flow simplifie la gestion de votre association pour que vous puissiez vous concentrer sur votre mission et vos membres.
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
            <div className="aspect-square bg-gradient-association rounded-2xl opacity-20"></div>
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
            Hive Flow est né de la volonté d'aider les associations à se concentrer sur leur mission plutôt que sur la paperasse. 
            Nous savons que le temps des bénévoles est précieux et que la charge administrative peut être décourageante.
          </p>
          <p className="text-lg text-neutral-600">
            Notre ambition : permettre à chaque association, quelle que soit sa taille, de bénéficier d'outils professionnels 
            pour automatiser sa gestion et libérer du temps pour ce qui compte vraiment : vos projets et vos membres.
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
            Un logiciel pensé pour les associations, accessible à tous vos bénévoles.
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
              L'automatisation, c'est comme avoir un bénévole disponible 24h/24 qui gère les tâches répétitives. 
              Vous définissez une fois comment certaines actions doivent se dérouler, et Hive Flow les exécute 
              automatiquement à votre place.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Par exemple : quand un nouveau membre s'inscrit, Hive Flow peut automatiquement lui envoyer 
              un email de bienvenue, l'ajouter à votre liste de diffusion, générer sa carte de membre et 
              notifier le trésorier. Le tout sans aucune intervention manuelle.
            </p>
            
            <div className="bg-association-50 border-l-4 border-association-500 p-6 rounded-lg">
              <p className="text-association-900 font-semibold mb-2">
                💡 Le saviez-vous ?
              </p>
              <p className="text-association-800">
                Les associations utilisant Hive Flow réduisent leur temps de gestion administrative de 60% en moyenne.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-association rounded-2xl opacity-20"></div>
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
            Des tarifs adaptés à la taille de votre association. Essai gratuit de 14 jours sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              variant={offer.popular ? 'theme' : 'elevated'}
              className={`relative ${offer.popular ? 'ring-2 ring-association-500 scale-105' : ''}`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-association-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    <svg className="w-5 h-5 text-association-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            Découvrez ce que nos utilisateurs associatifs disent de Hive Flow.
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
            Prêt à simplifier la gestion de votre association ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Rejoignez des centaines d'associations qui ont déjà optimisé leur organisation avec Hive Flow.
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