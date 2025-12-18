export const artisansData = {
  theme: 'artisan',

  hero: {
    badge: {
      icon: '🔨',
      text: 'Solution pour artisans'
    },
    title: 'Concentrez-vous sur votre métier, on s\'occupe du reste',
    description: 'Hive Flow automatise vos tâches administratives pour que vous puissiez vous concentrer sur ce que vous faites de mieux : votre savoir-faire.'
  },

  about: {
    paragraph1: 'Hive Flow est une solution conçue par et pour des professionnels qui veulent simplifier leur quotidien. Nous comprenons que votre temps est précieux et que les tâches administratives peuvent être chronophages.',
    paragraph2: 'Notre mission : vous permettre de vous concentrer sur votre expertise en automatisant tout ce qui peut l\'être, de la gestion des emails à la facturation, en passant par le planning.'
  },

  concept: {
    subtitle: 'Un logiciel simple qui s\'adapte à votre façon de travailler, pas l\'inverse.',
    features: [
      {
        icon: '📧',
        title: 'Gestion des emails',
        description: 'Triez et répondez automatiquement aux demandes de devis, confirmations de rendez-vous.'
      },
      {
        icon: '📅',
        title: 'Planning automatisé',
        description: 'Organisez vos interventions et envoyez des rappels automatiques à vos clients.'
      },
      {
        icon: '💰',
        title: 'Facturation simplifiée',
        description: 'Générez vos factures automatiquement après chaque intervention.'
      },
      {
        icon: '📱',
        title: 'Suivi client',
        description: 'Gardez le contact avec vos clients et relancez-les au bon moment.'
      }
    ]
  },

  automation: {
    paragraph1: 'L\'automatisation, c\'est comme avoir un assistant qui travaille pour vous 24h/24. Au lieu de passer du temps sur des tâches répétitives, vous configurez une fois comment elles doivent être faites, et Hive Flow s\'en occupe automatiquement.',
    paragraph2: 'Par exemple : quand vous recevez un email de demande de devis, Hive Flow peut automatiquement envoyer votre grille tarifaire, créer un rappel dans votre planning et archiver l\'échange. Tout ça sans que vous ayez à lever le petit doigt.',
    fact: 'En moyenne, nos utilisateurs artisans gagnent 8 heures par semaine grâce à l\'automatisation.'
  },

  offers: [
    {
      name: 'Essentiel',
      price: '29€',
      period: '/mois',
      description: 'Pour démarrer avec les bases',
      features: [
        'Automatisation des emails',
        'Gestion de planning',
        'Jusqu\'à 100 tâches/mois',
        'Support par email'
      ],
      cta: 'Commencer',
      popular: false
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
        'Intégrations avancées'
      ],
      cta: 'Essayer gratuitement',
      popular: true
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
        'Account manager dédié'
      ],
      cta: 'Nous contacter',
      popular: false
    }
  ],

  testimonials: [
    {
      name: 'Pierre Martin',
      role: 'Plombier-chauffagiste',
      content: 'Depuis que j\'utilise Hive Flow, je gagne 5 heures par semaine sur ma paperasse. Je peux enfin me concentrer sur mes chantiers.',
      avatar: '👨‍🔧'
    },
    {
      name: 'Sophie Dubois',
      role: 'Électricienne',
      content: 'La facturation automatique est un gain de temps incroyable. Plus besoin de passer mes soirées à faire des factures !',
      avatar: '👩‍🔧'
    },
    {
      name: 'Marc Lefebvre',
      role: 'Menuisier',
      content: 'Mes clients adorent recevoir leurs confirmations de rendez-vous automatiquement. Très professionnel.',
      avatar: '👨‍🏭'
    }
  ],

  cta: {
    title: 'Prêt à simplifier votre quotidien d\'artisan ?',
    description: 'Rejoignez des centaines d\'artisans qui ont déjà gagné du temps avec Hive Flow.',
    buttonText: 'Essayer gratuitement pendant 14 jours'
  }
};
