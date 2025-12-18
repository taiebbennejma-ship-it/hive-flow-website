import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

/**
 * Page Entreprises
 * Solutions d'automatisation + RAG pour entreprises
 */
export const metadata = {
  title: 'Hive Flow pour Entreprises - Automatisation & RAG',
  description: 'Optimisez vos processus métier et accélérez votre croissance avec des workflows intelligents.',
};

export default function EntreprisesPage() {
  const features = [
    {
      icon: '⚙️',
      title: 'Automatisation avancée',
      description: 'Orchestrez des workflows complexes entre tous vos outils métier.',
    },
    {
      icon: '📚',
      title: 'Accès intelligent aux données',
      description: 'Interrogez instantanément vos documents et bases de connaissances.',
    },
    {
      icon: '🔄',
      title: 'Intégrations multiples',
      description: 'Connectez tous vos systèmes (CRM, ERP, outils métier) en un seul endroit.',
    },
    {
      icon: '📊',
      title: 'Analytics & reporting',
      description: 'Suivez vos KPIs et générez des rapports automatiquement.',
    },
  ];

  const ragBenefits = [
    {
      title: 'Support client instantané',
      description: 'Vos équipes trouvent les réponses dans votre documentation en quelques secondes.',
    },
    {
      title: 'Onboarding accéléré',
      description: 'Les nouveaux collaborateurs accèdent rapidement aux connaissances de l\'entreprise.',
    },
    {
      title: 'Décisions éclairées',
      description: 'Analysez vos données historiques pour prendre de meilleures décisions.',
    },
  ];

  const offers = [
    {
      name: 'Business',
      price: '199€',
      period: '/mois',
      description: 'Pour les PME en croissance',
      features: [
        'Workflows illimités',
        'Jusqu\'à 10 utilisateurs',
        'Intégrations standard',
        'Support par email et chat',
        'Analytics de base',
      ],
      cta: 'Commencer',
      variant: 'outline',
    },
    {
      name: 'Enterprise',
      price: '499€',
      period: '/mois',
      description: 'Pour les grandes organisations',
      features: [
        'Tout le Business',
        'Utilisateurs illimités',
        'Accès intelligent aux données (RAG)',
        'Intégrations personnalisées',
        'Support prioritaire 24/7',
        'Account manager dédié',
      ],
      cta: 'Essayer gratuitement',
      variant: 'theme',
      popular: true,
    },
    {
      name: 'Sur mesure',
      price: 'Sur devis',
      period: '',
      description: 'Solution entièrement personnalisée',
      features: [
        'Tout l\'Enterprise',
        'Développements spécifiques',
        'Déploiement on-premise',
        'Formation équipes',
        'SLA garanti',
      ],
      cta: 'Nous contacter',
      variant: 'outline',
    },
  ];

  const testimonials = [
    {
      name: 'Laurent Mercier',
      role: 'Directeur des Opérations - TechCorp',
      content: 'Hive Flow nous a permis de réduire nos délais de traitement de 40%. L\'accès instantané à nos connaissances métier a transformé notre support client.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sophie Lambert',
      role: 'DSI - InnovatePlus',
      content: 'L\'intégration avec nos systèmes existants s\'est faite en quelques jours. L\'équipe technique est très réactive et compétente.',
      avatar: '👩‍💼',
    },
    {
      name: 'Alexandre Roux',
      role: 'CEO - StartupLab',
      content: 'Depuis que nous utilisons Hive Flow, nos équipes gagnent 15 heures par semaine. C\'est devenu notre hub central d\'automatisation.',
      avatar: '👨‍💻',
    },
  ];

  return (
    <div data-theme="enterprise">
      {/* Hero Section */}
      <Section background="theme" className="pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-enterprise-100 text-enterprise-700 text-sm font-medium mb-6">
              🏢 Solution pour entreprises
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Accélérez votre croissance avec l'automatisation intelligente
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8">
              Hive Flow connecte vos outils, automatise vos processus et donne à vos équipes un accès instantané à toutes vos connaissances métier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="theme" size="lg" href="https://app.hiveflow.com">
                Accéder à Hive Flow
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                Demander une démo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-enterprise rounded-2xl opacity-20"></div>
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
            Hive Flow est une plateforme d'automatisation conçue pour les entreprises qui veulent gagner en efficacité 
            sans sacrifier la qualité. Nous aidons les organisations à transformer leurs processus manuels en workflows 
            automatisés et à exploiter intelligemment leurs données.
          </p>
          <p className="text-lg text-neutral-600">
            Notre vision : permettre à chaque entreprise, quelle que soit sa taille, de bénéficier d'outils d'automatisation 
            professionnels et d'un accès intelligent à ses connaissances métier, sans nécessiter d'équipe technique dédiée.
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
            Une plateforme unifiée pour automatiser, connecter et exploiter vos données métier.
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
              L'automatisation, c'est la capacité de faire exécuter des tâches répétitives par des systèmes 
              sans intervention humaine. Dans le contexte entreprise, cela signifie connecter vos différents 
              outils (CRM, ERP, emails, bases de données) pour qu'ils communiquent et agissent automatiquement.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Par exemple : quand un nouveau client s'inscrit sur votre site, Hive Flow peut automatiquement 
              créer sa fiche dans votre CRM, l'ajouter à votre liste de diffusion, générer un contrat, 
              notifier votre équipe commerciale et programmer un premier rendez-vous. Le tout en quelques secondes.
            </p>
            
            <div className="bg-enterprise-50 border-l-4 border-enterprise-500 p-6 rounded-lg">
              <p className="text-enterprise-900 font-semibold mb-2">
                💡 Impact mesurable
              </p>
              <p className="text-enterprise-800">
                Nos clients entreprises réduisent leurs coûts opérationnels de 35% en moyenne grâce à l'automatisation.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-enterprise rounded-2xl opacity-20"></div>
          </div>
        </div>
      </Section>

      {/* Section RAG - Accès intelligent aux données */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-gradient-enterprise rounded-2xl opacity-20"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-enterprise-100 text-enterprise-700 text-sm font-medium mb-6">
              🔍 Fonctionnalité avancée
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Accès intelligent à vos connaissances (RAG)
            </h2>
            
            <p className="text-lg text-neutral-600 mb-4">
              Le RAG (Retrieval Augmented Generation) est une technologie qui permet à vos équipes d'interroger 
              instantanément l'ensemble de vos documents, bases de connaissances et données métier en langage naturel.
            </p>
            
            <p className="text-lg text-neutral-600 mb-6">
              Concrètement, au lieu de chercher pendant 20 minutes dans vos dossiers pour trouver une procédure 
              ou un contrat, vos collaborateurs posent simplement leur question et obtiennent la réponse exacte 
              avec la source. C'est comme avoir un expert qui connaît parfaitement toute votre documentation.
            </p>

            <div className="space-y-4">
              {ragBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-enterprise-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section Nos offres */}
      <Section background="white" id="offres">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Nos offres
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Des solutions adaptées à chaque taille d'entreprise. Démo personnalisée sur demande.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </Section>

      {/* Section Avis clients */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez comment nos clients entreprises optimisent leur organisation avec Hive Flow.
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
      <Section background="theme" id="contact">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Échangeons sur vos besoins et découvrez comment Hive Flow peut accélérer votre croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="theme" size="lg" href="https://app.hiveflow.com">
              Demander une démo
            </Button>
            <Button variant="outline" size="lg" href="https://app.hiveflow.com">
              Accéder à Hive Flow
            </Button>
          </div>
          <p className="text-sm text-neutral-600 mt-4">
            Démo personnalisée • Sans engagement
          </p>
        </div>
      </Section>
    </div>
  );
}