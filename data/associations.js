export const associationsData = {
  theme: 'association',

  hero: {
    badge: {
      icon: '🤝',
      text: 'Solution pour associations'
    },
    title: 'Mobilisez vos équipes, pas votre temps',
    description: 'Hive Flow simplifie la gestion de votre association pour que vous puissiez vous concentrer sur votre mission et vos membres.'
  },

  about: {
    paragraph1: 'Hive Flow est né de la volonté d\'aider les associations à se concentrer sur leur mission plutôt que sur la paperasse. Nous savons que le temps des bénévoles est précieux et que la charge administrative peut être décourageante.',
    paragraph2: 'Notre ambition : permettre à chaque association, quelle que soit sa taille, de bénéficier d\'outils professionnels pour automatiser sa gestion et libérer du temps pour ce qui compte vraiment : vos projets et vos membres.'
  },

  concept: {
    subtitle: 'Un logiciel pensé pour les associations, accessible à tous vos bénévoles.',
    features: [
      {
        icon: '👥',
        title: 'Gestion des membres',
        description: 'Automatisez les inscriptions, renouvellements et communications avec vos adhérents.'
      },
      {
        icon: '📆',
        title: 'Organisation d\'événements',
        description: 'Planifiez vos événements et envoyez des invitations automatiques à vos membres.'
      },
      {
        icon: '💳',
        title: 'Suivi des cotisations',
        description: 'Gérez les paiements et envoyez des rappels automatiques aux membres.'
      },
      {
        icon: '📊',
        title: 'Rapports d\'activité',
        description: 'Générez automatiquement vos bilans et rapports pour vos assemblées générales.'
      }
    ]
  },

  automation: {
    paragraph1: 'L\'automatisation, c\'est comme avoir un bénévole disponible 24h/24 qui gère les tâches répétitives. Vous définissez une fois comment certaines actions doivent se dérouler, et Hive Flow les exécute automatiquement à votre place.',
    paragraph2: 'Par exemple : quand un nouveau membre s\'inscrit, Hive Flow peut automatiquement lui envoyer un email de bienvenue, l\'ajouter à votre liste de diffusion, générer sa carte de membre et notifier le trésorier. Le tout sans aucune intervention manuelle.',
    fact: 'Les associations utilisant Hive Flow réduisent leur temps de gestion administrative de 60% en moyenne.'
  },

  offers: [
    {
      name: 'Starter',
      price: '19€',
      period: '/mois',
      description: 'Pour les petites associations',
      features: [
        'Gestion jusqu\'à 50 membres',
        'Automatisation des emails',
        'Planning d\'événements',
        'Support par email'
      ],
      cta: 'Commencer',
      popular: false
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
        'Intégrations comptables'
      ],
      cta: 'Essayer gratuitement',
      popular: true
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
        'Accompagnement dédié'
      ],
      cta: 'Nous contacter',
      popular: false
    }
  ],

  testimonials: [
    {
      name: 'Marie Durand',
      role: 'Présidente - Association culturelle',
      content: 'Hive Flow nous a fait gagner un temps précieux sur la gestion administrative. On peut enfin se concentrer sur nos projets culturels.',
      avatar: '👩‍💼'
    },
    {
      name: 'Thomas Bernard',
      role: 'Trésorier - Club sportif',
      content: 'Le suivi des cotisations automatique est génial. Plus de relances manuelles, tout se fait tout seul !',
      avatar: '👨‍💼'
    },
    {
      name: 'Claire Petit',
      role: 'Secrétaire - Association humanitaire',
      content: 'Nos bénévoles adorent la simplicité. En quelques clics, on organise nos événements et on mobilise nos équipes.',
      avatar: '👩‍🦰'
    }
  ],

  cta: {
    title: 'Prêt à simplifier la gestion de votre association ?',
    description: 'Rejoignez des centaines d\'associations qui ont déjà optimisé leur organisation avec Hive Flow.',
    buttonText: 'Essayer gratuitement pendant 14 jours'
  }
};
