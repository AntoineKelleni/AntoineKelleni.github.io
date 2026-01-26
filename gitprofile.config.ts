// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AntoineKelleni', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Dépôts GitHub (code)',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
        'AntoineKelleni/Data-Entrainement-SQL-et-creation-BDD',
        'AntoineKelleni/Mettre-en-place-un-pipeline-d-orchestration-des-flux',
      ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projets GitHub (code)',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Création et automatisation d’une infrastructure de données',
          description:
            'L’objectif est d’analyser les pratiques sportives des employés d’une entreprise, afin de calculer des avantages sociaux liés au sport (primes sportives, jours wellness, indicateurs RH)',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/creation_et_automatisation_infrastructure_donnes/refs/heads/main/docs/images/Diagramme.png',
          link: 'https://github.com/AntoineKelleni/creation_et_automatisation_infrastructure_donnes',
        },
        {
          title: 'Conception et deploiement d’un système RAG',
          description:
            'Développement d’un système RAG (Retrieval-Augmented Generation) pour améliorer les réponses des modèles de langage en intégrant des données externes.',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/concevoir_et_deployer-_un_systeme_RAG/main/schéma_architecture_pipeline_RAG.png',
          link: 'https://github.com/AntoineKelleni/concevoir_et_deployer-_un_systeme_RAG',
        },

        {
          title: 'Système IA du POC au MVP',
          description:
            'Guide complet pour développer un système d\'IA évolutif, de la preuve de concept (POC) au produit minimum viable (MVP).',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/Passez_un_systeme_IA_du_POC_au_MVP/main/img/architecture%20MVP.png',
          link: 'https://github.com/AntoineKelleni/Passez_un_systeme_IA_du_POC_au_MVP',
        },
        {
          title: 'Construire et tester une infrastructure de données sur le cloud',
          description:
            'Automatiser la collecte, transformation, stockage et analyse des données pour simplifier la prise de décision.',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/Construire_et_tester_une_infrastructure_de_donnees_airbyte_mongodb_docker_aws/refs/heads/main/Screenshoot%20-/sch%C3%A9ma_architecture_pipeline_infra.png',
          link: 'https://github.com/AntoineKelleni/Construire_et_tester_une_infrastructure_de_donnees_airbyte_mongodb_docker_aws',
        },
        {
          title: 'Creation BDD NoSQL',
          description:
            'concevoir un modèle de données NoSQL, charger des jeux de données dans une base MongoDB, puis réaliser des analyses à l’aide de requêtes (mongosh) et d’un notebook Python (PyMongo + Polars).',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/Concevez-et-analysez-une-base-de-donnees-NoSQL_mongoDB_PyMongo-polar_PowerBI_ReplicatSet_Sharding/refs/heads/main/screenshot/visuel_portfolio.png',
          link: 'https://github.com/AntoineKelleni/Concevez-et-analysez-une-base-de-donnees-NoSQL_mongoDB_PyMongo-polar_PowerBI_ReplicatSet_Sharding',
        },
        {
          title: 'Creation BDD et entrainement SQL',
          description:
            'Le projet vise à collecter, modéliser, analyser et valoriser les données de transactions immobilières afin de répondre aux besoins stratégiques et opérationnels de l’entreprise.',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/Data-Entrainement-SQL-et-creation-BDD/refs/heads/main/visuel_projet.png',
          link: 'https://github.com/AntoineKelleni/Data-Entrainement-SQL-et-creation-BDD',
        },
        {
          title: 'Pipeline d’orchestration des flux de données',
          description:
            'Mise en place d’un pipeline data automatisé avec ingestion, transformations et orchestration.',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/Mettre-en-place-un-pipeline-d-orchestration-des-flux/main/screenshoot_diagram.png',
          link: 'https://github.com/AntoineKelleni/Mettre-en-place-un-pipeline-d-orchestration-des-flux',
        },
        {
          title: 'Auditez un environnement de donées d’un supermarche',
          description:
            'Audit complet d’un environnement de données pour un supermarché, incluant l’analyse des flux de données, la qualité des données et les recommandations d’amélioration.',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/Auditez-un-environnement-de-donnees-d-un-supermarche/main/diagram_relationel.png',
          link: 'https://github.com/AntoineKelleni/Auditez-un-environnement-de-donnees-d-un-supermarche',
        },
        {
          title: 'Analyser les abonnés du journal ParisMatch',
          description:
            'Analyse des données des abonnés du journal ParisMatch pour identifier les tendances et comportements d’achat.',
          imageUrl:
            'https://github.com/AntoineKelleni/Exercice_Alternance_Data_analyst_ParisMatch/blob/main/paris_match_Looker_studio_dashboard.png?raw=true',
          link: 'https://github.com/AntoineKelleni/Exercice_Alternance_Data_analyst_ParisMatch',
        },
        {
          title: 'World Population Dashboard - Looker Studio Dashboard',
          description:
            ' Croissance démographique par pays (1970-2022). Graphiques interactifs avec filtres par région et année. Indicateurs clés : densité, pourcentage mondial.',
          imageUrl:
            'https://raw.githubusercontent.com/AntoineKelleni/World-Population-Data-Analysis/refs/heads/main/population_mondiale_analysis.png',
          link: 'https://github.com/AntoineKelleni/World-Population-Data-Analysis',
        },

      ],
    },
  },
  seo: { title: 'Portfolio of Antoine Kelleni', description: '', imageURL: '' },
  social: {
    linkedin: 'www.linkedin.com/in/antoine-kelleni/',
    website: 'https://antoinekelleni.github.io/',
    phone: '+33 7 60 31 87 72',
    email: 'antoinekelleni@gmail.com',
  },
  resume: {
    fileUrl:
      'https://antoinekelleni.github.io/CV/Antoine_KELLENI_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
skills: [
  'Python',
  'SQL',
  'Linux',
  'Git',
  'Shell / Bash',
  'Docker',
  'Microsoft Azure',
  'AWS',
  'Google Cloud Platform',
  'Apache Airflow',
  'ETL / ELT',
  'Apache Spark',
  'Hadoop',
  'Power BI',
  'Tableau',
  'Jupyter Notebooks',
  'MapReduce',
  'Airbyte',
  'Redpanda',
  'PostgreSQL',
  'MongoDB',
  'Elasticsearch',
  'Vector Databases',
  'FAISS',
  'NLP',
  'RAG (Retrieval-Augmented Generation)',
  'LangChain',
  'Data Engineering',
  'Data Pipelines',
],

  experiences: [
    {
      company: 'NANOTERA',
      position: 'Digital Traffic Manager ',
      from: '09/2022',
      to: '08/2023',
      companyLink: 'https://nanotera.eu/',
    },
    {
      company: 'MonPetitTrésor',
      position: 'Assistant Web Marketing',
      from: '07/2018',
      to: '08/2018',
      companyLink: 'https://mon-petit-tresor.com/',
    },
    {
      company: 'Whynot Trading',
      position: 'Assistant Web Marketing',
      from: '06/2018',
      to: '08/2018',
      companyLink: 'https://whynot-trading.com/fr/',
    },
  ],
  
  educations: [
    {
      institution: 'OpenClassrooms',
      degree: 'Mastère Data Engineer',
      from: '2025',
      to: '2026',
    },
    {
      institution: 'HETIC',
      degree: 'Mastère Data & IA',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'IIM Digital School',
      degree: 'Bachelor Marketing & Communication digitale',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'SUPINFO',
      degree: '1er année cycle ingénieur informatique',
      from: '2017',
      to: '2018',
    },
  ],
  
 certifications: [
    {
      name: ' Google Ads sur le Réseau de Recherche',
      year: 'Mai 2023',
    },
        {
      name: ' Les bases de Google Ads',
      year: 'Mars  2018',
    },
        {
      name: ' Google Analytics Individual Qualification',
      year: 'Nov 2017',
    },
  ], 
  
/**
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
 */

  /** 
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  //** */ Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
