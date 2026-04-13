/**
 * =============================================================================
 *  SCRIPTS.JS — Portafolio Personal Profesional Tech
 *  Autor: [TU NOMBRE]
 *
 *  CONTENIDO DE ESTE ARCHIVO:
 *  1. TRADUCCIONES (i18n) — Textos en ES / EN / FR
 *  2. DATOS — Experiencia, Educación, Certificaciones, Habilidades, Proyectos
 *  3. RENDERIZADO DINÁMICO — Genera el HTML a partir de los datos
 *  4. INTERNACIONALIZACIÓN — Lógica para cambio de idioma sin recarga
 *  5. NAVEGACIÓN — Header fijo, scroll, menú hamburger, active links
 *  6. ANIMACIONES — Intersection Observer para efectos de scroll
 *  7. FORMULARIO — Validación del formulario de demostración
 *  8. INICIALIZACIÓN — Punto de entrada principal
 * =============================================================================
 */

'use strict';

/* ============================================================================
   1. TRADUCCIONES (i18n)
   INSTRUCCIONES: Reemplaza los valores de cada clave con tu texto real.
   Mantén las tres versiones (es, en, fr) sincronizadas.
   ============================================================================ */
const TRANSLATIONS = {

  es: {
    /* Navegación */
    nav_about:      'Sobre mí',
    nav_experience: 'Experiencia',
    nav_education:  'Educación',
    nav_skills:     'Habilidades',
    nav_projects:   'Proyectos',
    nav_contact:    'Contacto',
    nav_cv:         'Descargar CV',

    /* Hero */
    hero_available:     'Disponible para nuevos proyectos',
    hero_title:         'Data Analyst · Product Owner · Scrum Master',
    hero_pitch:         'Transformo datos en decisiones estratégicas y lidero equipos Agile para construir productos digitales que generan impacto real en el negocio.',
    hero_cta_projects:  'Ver proyectos',
    hero_cta_contact:   'Hablemos',
    stat_years:         'años de experiencia',
    stat_projects:      'proyectos entregados',
    stat_certs:         'certificaciones',
    hero_scroll:        'Scroll',

    /* Sobre mí */
    about_tag:           'Sobre mí',
    about_heading:       'Quien está detrás de los datos',
    about_p1:            'Soy analista de datos con más de 6 años de experiencia convirtiendo conjuntos de datos complejos en narrativas claras que impulsan la toma de decisiones estratégicas. Mi trabajo combina rigor técnico con visión de negocio.',
    about_p2:            'Como Product Owner certificada, he liderado roadmaps de producto en entornos Agile, priorizando el backlog con enfoque en el valor para el usuario y los OKRs corporativos. Creo en los datos como el lenguaje universal del progreso.',
    about_p3:            'Mi rol como Scrum Master me ha enseñado que la excelencia técnica sin colaboración humana es incompleta. Facilito ceremonias, elimino impedimentos y construyo equipos de alto rendimiento con propósito compartido.',
    about_story_heading: 'Mi historia',
    about_story_p1:      'Crecí entre sistemas, curiosidad y la convicción de que los números cuentan historias. Comencé mi carrera en consultoría, donde aprendí a hablar tanto el idioma del negocio como el del código. Ese puente entre ambos mundos define mi perfil único.',
    about_story_p2:      'Fuera de la pantalla, me apasiona la fotografía urbana, los podcasts de economía conductual y el senderismo. Creo firmemente que las mejores ideas nacen lejos del escritorio.',
    about_soft_heading:  'Habilidades blandas',
    about_values_heading:'Valores profesionales',
    soft_1: 'Liderazgo orientado a personas',
    soft_2: 'Comunicación ejecutiva',
    soft_3: 'Pensamiento analítico',
    soft_4: 'Resolución de conflictos',
    soft_5: 'Gestión del cambio',
    soft_6: 'Facilitación de talleres',
    soft_7: 'Trabajo en equipo multidisciplinar',
    soft_8: 'Orientación a resultados',
    value_1_title: 'Aprendizaje continuo',
    value_1_desc:  'Cada proyecto es una oportunidad de crecer',
    value_2_title: 'Calidad sobre velocidad',
    value_2_desc:  'Entrego trabajo bien hecho, siempre',
    value_3_title: 'Transparencia',
    value_3_desc:  'Comunicación honesta y directa con todos',
    value_4_title: 'Impacto medible',
    value_4_desc:  'Si no se puede medir, no se puede mejorar',

    /* Experiencia */
    exp_tag:     'Trayectoria',
    exp_heading: 'Experiencia laboral',
    exp_responsibilities: 'Responsabilidades',
    exp_achievements:     'Logros clave',

    /* Educación */
    edu_tag:     'Formación',
    edu_heading: 'Educación y certificaciones',
    edu_formal:  'Estudios formales',
    edu_certs:   'Certificaciones y cursos',

    /* Habilidades */
    skills_tag:     'Competencias',
    skills_heading: 'Habilidades técnicas',

    /* Proyectos */
    proj_tag:     'Portafolio',
    proj_heading: 'Proyectos destacados',
    proj_demo:    'Demo',
    proj_code:    'Código',

    /* Contacto */
    contact_tag:          'Contacto',
    contact_heading:      'Hablemos',
    contact_subtitle:     '¿Tienes un proyecto interesante o una oportunidad para explorar? Escríbeme.',
    form_notice:          'Este formulario es de demostración y no envía datos reales. Para contacto real, usa el correo o LinkedIn.',
    form_name:            'Nombre completo',
    form_email:           'Correo electrónico',
    form_message:         'Mensaje',
    form_submit:          'Enviar mensaje',
    form_success:         '✓ Mensaje de prueba enviado correctamente (demostración).',
    form_error:           '⚠ Por favor completa todos los campos correctamente.',
    contact_info_heading: 'Encuéntrame en',
    availability_title:   'Disponible para proyectos',
    availability_desc:    'Abierta a roles full-time, freelance y consultoría en remoto o híbrido.',

    /* Footer */
    footer_rights: 'Todos los derechos reservados.',
    footer_built:  'Construido con HTML, CSS y JavaScript puro · Desplegado en GitHub Pages',
  },

  /* ── INGLÉS ─────────────────────────────────────────────────────────── */
  en: {
    nav_about:      'About',
    nav_experience: 'Experience',
    nav_education:  'Education',
    nav_skills:     'Skills',
    nav_projects:   'Projects',
    nav_contact:    'Contact',
    nav_cv:         'Download CV',

    hero_available:     'Open to new opportunities',
    hero_title:         'Data Analyst · Product Owner · Scrum Master',
    hero_pitch:         'I transform data into strategic decisions and lead Agile teams to build digital products that create real business impact.',
    hero_cta_projects:  'View projects',
    hero_cta_contact:   "Let's talk",
    stat_years:         'years of experience',
    stat_projects:      'projects delivered',
    stat_certs:         'certifications',
    hero_scroll:        'Scroll',

    about_tag:           'About me',
    about_heading:       'The person behind the data',
    about_p1:            'I am a data analyst with over 6 years of experience turning complex datasets into clear narratives that drive strategic decision-making. My work blends technical rigor with business vision.',
    about_p2:            'As a certified Product Owner, I have led product roadmaps in Agile environments, prioritizing the backlog with a focus on user value and corporate OKRs. I believe in data as the universal language of progress.',
    about_p3:            'My role as a Scrum Master has taught me that technical excellence without human collaboration is incomplete. I facilitate ceremonies, remove impediments, and build high-performing teams with shared purpose.',
    about_story_heading: 'My story',
    about_story_p1:      'I grew up surrounded by systems, curiosity, and the conviction that numbers tell stories. I started my career in consulting, where I learned to speak both the language of business and the language of code. That bridge between two worlds defines my unique profile.',
    about_story_p2:      'Outside of work, I am passionate about urban photography, behavioral economics podcasts, and hiking. I firmly believe that the best ideas are born far from the desk.',
    about_soft_heading:  'Soft skills',
    about_values_heading:'Professional values',
    soft_1: 'People-oriented leadership',
    soft_2: 'Executive communication',
    soft_3: 'Analytical thinking',
    soft_4: 'Conflict resolution',
    soft_5: 'Change management',
    soft_6: 'Workshop facilitation',
    soft_7: 'Cross-functional teamwork',
    soft_8: 'Results-driven mindset',
    value_1_title: 'Continuous learning',
    value_1_desc:  'Every project is a chance to grow',
    value_2_title: 'Quality over speed',
    value_2_desc:  'I always deliver high-quality work',
    value_3_title: 'Transparency',
    value_3_desc:  'Honest and direct communication with everyone',
    value_4_title: 'Measurable impact',
    value_4_desc:  "If you can't measure it, you can't improve it",

    exp_tag:     'Career',
    exp_heading: 'Work experience',
    exp_responsibilities: 'Responsibilities',
    exp_achievements:     'Key achievements',

    edu_tag:     'Education',
    edu_heading: 'Education & Certifications',
    edu_formal:  'Formal education',
    edu_certs:   'Certifications & courses',

    skills_tag:     'Competencies',
    skills_heading: 'Technical skills',

    proj_tag:     'Portfolio',
    proj_heading: 'Featured projects',
    proj_demo:    'Demo',
    proj_code:    'Code',

    contact_tag:          'Contact',
    contact_heading:      "Let's talk",
    contact_subtitle:     'Have an interesting project or opportunity to explore? Write to me.',
    form_notice:          'This form is for demonstration only and does not send real data. For real contact, use email or LinkedIn.',
    form_name:            'Full name',
    form_email:           'Email address',
    form_message:         'Message',
    form_submit:          'Send message',
    form_success:         '✓ Demo message sent successfully (demonstration).',
    form_error:           '⚠ Please complete all fields correctly.',
    contact_info_heading: 'Find me on',
    availability_title:   'Available for projects',
    availability_desc:    'Open to full-time, freelance and consulting roles, remote or hybrid.',

    footer_rights: 'All rights reserved.',
    footer_built:  'Built with pure HTML, CSS and JavaScript · Deployed on GitHub Pages',
  },

  /* ── FRANCÉS ─────────────────────────────────────────────────────────── */
  fr: {
    nav_about:      'À propos',
    nav_experience: 'Expérience',
    nav_education:  'Formation',
    nav_skills:     'Compétences',
    nav_projects:   'Projets',
    nav_contact:    'Contact',
    nav_cv:         'Télécharger CV',

    hero_available:     'Disponible pour de nouvelles opportunités',
    hero_title:         'Analyste de Données · Product Owner · Scrum Master',
    hero_pitch:         'Je transforme les données en décisions stratégiques et dirige des équipes Agile pour construire des produits digitaux à fort impact métier.',
    hero_cta_projects:  'Voir les projets',
    hero_cta_contact:   'Discutons',
    stat_years:         "années d'expérience",
    stat_projects:      'projets livrés',
    stat_certs:         'certifications',
    hero_scroll:        'Défiler',

    about_tag:           'À propos',
    about_heading:       'La personne derrière les données',
    about_p1:            "Je suis analyste de données avec plus de 6 ans d'expérience à transformer des jeux de données complexes en récits clairs qui pilotent la prise de décision stratégique. Mon travail allie rigueur technique et vision métier.",
    about_p2:            "En tant que Product Owner certifiée, j'ai dirigé des feuilles de route produit dans des environnements Agile, en priorisant le backlog avec un focus sur la valeur utilisateur et les OKR de l'entreprise.",
    about_p3:            "Mon rôle de Scrum Master m'a appris que l'excellence technique sans collaboration humaine est incomplète. Je facilite les cérémonies, lève les obstacles et construis des équipes performantes avec un objectif commun.",
    about_story_heading: 'Mon histoire',
    about_story_p1:      "J'ai grandi entre les systèmes, la curiosité et la conviction que les chiffres racontent des histoires. J'ai commencé ma carrière en conseil, où j'ai appris à parler à la fois le langage des affaires et celui du code.",
    about_story_p2:      "En dehors du travail, je suis passionnée de photographie urbaine, de podcasts d'économie comportementale et de randonnée. Je crois fermement que les meilleures idées naissent loin du bureau.",
    about_soft_heading:  'Compétences interpersonnelles',
    about_values_heading:'Valeurs professionnelles',
    soft_1: 'Leadership centré sur les personnes',
    soft_2: 'Communication exécutive',
    soft_3: 'Pensée analytique',
    soft_4: 'Résolution de conflits',
    soft_5: 'Gestion du changement',
    soft_6: "Animation d'ateliers",
    soft_7: 'Travail en équipe pluridisciplinaire',
    soft_8: 'Orientation résultats',
    value_1_title: 'Apprentissage continu',
    value_1_desc:  'Chaque projet est une opportunité de grandir',
    value_2_title: 'Qualité avant vitesse',
    value_2_desc:  'Je livre toujours un travail de qualité',
    value_3_title: 'Transparence',
    value_3_desc:  'Communication honnête et directe avec tous',
    value_4_title: 'Impact mesurable',
    value_4_desc:  'Ce qui ne se mesure pas ne peut pas être amélioré',

    exp_tag:     'Parcours',
    exp_heading: 'Expérience professionnelle',
    exp_responsibilities: 'Responsabilités',
    exp_achievements:     'Réalisations clés',

    edu_tag:     'Formation',
    edu_heading: 'Formation et certifications',
    edu_formal:  'Études formelles',
    edu_certs:   'Certifications et cours',

    skills_tag:     'Compétences',
    skills_heading: 'Compétences techniques',

    proj_tag:     'Portfolio',
    proj_heading: 'Projets en vedette',
    proj_demo:    'Démo',
    proj_code:    'Code',

    contact_tag:          'Contact',
    contact_heading:      'Parlons-en',
    contact_subtitle:     "Vous avez un projet intéressant ou une opportunité à explorer ? Écrivez-moi.",
    form_notice:          "Ce formulaire est une démonstration et n'envoie pas de données réelles. Pour un vrai contact, utilisez l'email ou LinkedIn.",
    form_name:            'Nom complet',
    form_email:           'Adresse e-mail',
    form_message:         'Message',
    form_submit:          'Envoyer le message',
    form_success:         '✓ Message de démonstration envoyé avec succès.',
    form_error:           '⚠ Veuillez remplir correctement tous les champs.',
    contact_info_heading: 'Retrouvez-moi sur',
    availability_title:   'Disponible pour des projets',
    availability_desc:    'Ouverte aux postes temps plein, freelance et conseil, télétravail ou hybride.',

    footer_rights: 'Tous droits réservés.',
    footer_built:  'Construit en HTML, CSS et JavaScript pur · Déployé sur GitHub Pages',
  },
};

/* ============================================================================
   2. DATOS — Edita estos arrays para personalizar el contenido dinámico.
   ============================================================================ */

/**
 * EXPERIENCIA LABORAL
 * INSTRUCCIONES: Agrega, quita o edita objetos en este array.
 * El array está ordenado cronológicamente inverso (más reciente primero).
 *
 * Campos:
 *  - role:            Cargo / Puesto
 *  - company:         Nombre de la empresa
 *  - location:        Ciudad, País
 *  - period:          Período (ej: "Ene 2022 – Presente")
 *  - description:     Breve descripción del rol
 *  - responsibilities: Array de 3-5 responsabilidades principales
 *  - achievements:    Array de 3 logros cuantificables (verbos de acción)
 */
const EXPERIENCE = [
  {
    role: { es: 'Data Analyst & Product Owner Senior', en: 'Senior Data Analyst & Product Owner', fr: 'Analyste de Données & Product Owner Senior' },
    company: 'TechNova Solutions S.A.',
    location: { es: 'Madrid, España (Remoto)', en: 'Madrid, Spain (Remote)', fr: 'Madrid, Espagne (Télétravail)' },
    period: { es: 'Mar 2022 – Presente', en: 'Mar 2022 – Present', fr: 'Mar 2022 – Présent' },
    description: {
      es: 'Lidero el área de datos de una fintech B2B con presencia en 5 países, diseñando dashboards ejecutivos y definiendo la estrategia de producto basada en comportamiento de usuarios.',
      en: 'I lead the data division of a B2B fintech operating in 5 countries, designing executive dashboards and defining product strategy based on user behavior.',
      fr: 'Je dirige le département données d\'une fintech B2B présente dans 5 pays, concevant des tableaux de bord exécutifs et définissant la stratégie produit basée sur le comportement utilisateur.',
    },
    responsibilities: {
      es: [
        'Diseñar y mantener modelos de datos en BigQuery para análisis de cohortes y churn prediction',
        'Definir y priorizar el backlog del equipo de datos con base en los OKRs del negocio',
        'Coordinar con stakeholders de C-Level para traducir necesidades de negocio en requisitos técnicos',
        'Supervisar un equipo de 4 analistas junior y 2 ingenieros de datos',
        'Crear reportes automatizados en Looker Studio y Power BI para 12 clientes enterprise',
      ],
      en: [
        'Design and maintain data models in BigQuery for cohort analysis and churn prediction',
        'Define and prioritize the data team backlog based on business OKRs',
        'Coordinate with C-Level stakeholders to translate business needs into technical requirements',
        'Supervise a team of 4 junior analysts and 2 data engineers',
        'Build automated reports in Looker Studio and Power BI for 12 enterprise clients',
      ],
      fr: [
        'Concevoir et maintenir des modèles de données dans BigQuery pour l\'analyse de cohortes et la prédiction du churn',
        'Définir et prioriser le backlog de l\'équipe data selon les OKR de l\'entreprise',
        'Coordonner avec les parties prenantes C-Level pour traduire les besoins métier en exigences techniques',
        'Superviser une équipe de 4 analystes juniors et 2 ingénieurs data',
        'Créer des rapports automatisés dans Looker Studio et Power BI pour 12 clients enterprise',
      ],
    },
    achievements: {
      es: [
        'Reduje el tiempo de generación de reportes en un 65% mediante automatización con Python y BigQuery',
        'Aumenté la retención de clientes en un 18% implementando un modelo predictivo de churn con 87% de precisión',
        'Lideré migración de datos legacy → cloud (GCP) en 4 meses, sin interrupción del servicio',
      ],
      en: [
        'Reduced report generation time by 65% through automation with Python and BigQuery',
        'Increased customer retention by 18% by implementing a churn prediction model with 87% accuracy',
        'Led legacy data migration to the cloud (GCP) in 4 months with zero service interruptions',
      ],
      fr: [
        'Réduit le temps de génération de rapports de 65% grâce à l\'automatisation Python et BigQuery',
        'Augmenté la rétention client de 18% en implémentant un modèle de prédiction du churn (87% de précision)',
        'Piloté la migration des données legacy vers le cloud (GCP) en 4 mois sans interruption de service',
      ],
    },
  },
  {
    role: { es: 'Scrum Master & Analista de Datos', en: 'Scrum Master & Data Analyst', fr: 'Scrum Master & Analyste de Données' },
    company: 'Ibertech Digital S.L.',
    location: { es: 'Barcelona, España', en: 'Barcelona, Spain', fr: 'Barcelone, Espagne' },
    period: { es: 'Jun 2019 – Feb 2022', en: 'Jun 2019 – Feb 2022', fr: 'Juin 2019 – Fév 2022' },
    description: {
      es: 'Ejercí un rol dual como Scrum Master de dos squads de desarrollo y analista de datos para el área de e-commerce de un retailer omnicanal con €120M de facturación anual.',
      en: 'I held a dual role as Scrum Master for two development squads and data analyst for the e-commerce division of an omnichannel retailer with €120M annual turnover.',
      fr: 'J\'ai occupé un double rôle de Scrum Master pour deux squads de développement et d\'analyste de données pour le département e-commerce d\'un distributeur omnicanal avec 120 M€ de chiffre d\'affaires annuel.',
    },
    responsibilities: {
      es: [
        'Facilitar ceremonias Scrum (Sprint Planning, Daily, Review, Retrospective) para 2 equipos de 7 personas cada uno',
        'Construir y mantener dashboards de KPIs en Tableau para el equipo de marketing y dirección',
        'Realizar análisis de funnel de conversión y A/B testing para la plataforma e-commerce',
        'Eliminar impedimentos técnicos y organizativos que bloqueaban la entrega de valor',
      ],
      en: [
        'Facilitate Scrum ceremonies (Sprint Planning, Daily, Review, Retrospective) for 2 teams of 7 people each',
        'Build and maintain KPI dashboards in Tableau for marketing and management teams',
        'Conduct funnel analysis and A/B testing for the e-commerce platform',
        'Remove technical and organizational impediments blocking value delivery',
      ],
      fr: [
        'Faciliter les cérémonies Scrum (Sprint Planning, Daily, Review, Rétrospective) pour 2 équipes de 7 personnes',
        'Construire et maintenir des tableaux de bord KPI dans Tableau pour le marketing et la direction',
        'Mener des analyses de funnel de conversion et des tests A/B pour la plateforme e-commerce',
        'Supprimer les obstacles techniques et organisationnels bloquant la livraison de valeur',
      ],
    },
    achievements: {
      es: [
        'Mejoré la velocidad de entrega del equipo en un 40% en 3 sprints aplicando prácticas XP complementarias',
        'Identifiqué punto de abandono en el checkout que generaba €400K/año en pérdidas; propuse e implementé fix',
        'Obtuve certificación PSM I y PSM II durante mi tenure, convirtiéndome en referente interno de Agile',
      ],
      en: [
        'Improved team delivery velocity by 40% in 3 sprints by implementing complementary XP practices',
        'Identified a checkout drop-off point generating €400K/year in losses; proposed and implemented the fix',
        'Obtained PSM I and PSM II certifications during my tenure, becoming the internal Agile reference',
      ],
      fr: [
        'Amélioré la vélocité de livraison de l\'équipe de 40% en 3 sprints grâce aux pratiques XP complémentaires',
        'Identifié un point d\'abandon au checkout générant 400 K€/an de pertes ; proposé et implémenté le correctif',
        'Obtenu les certifications PSM I et PSM II pendant mon mandat, devenant la référence Agile interne',
      ],
    },
  },
  {
    role: { es: 'Analista de Datos Junior', en: 'Junior Data Analyst', fr: 'Analyste de Données Junior' },
    company: 'DataFirst Consulting',
    location: { es: 'Madrid, España', en: 'Madrid, Spain', fr: 'Madrid, Espagne' },
    period: { es: 'Sep 2017 – May 2019', en: 'Sep 2017 – May 2019', fr: 'Sep 2017 – Mai 2019' },
    description: {
      es: 'Inicié mi carrera en una consultora especializada en inteligencia de negocio, colaborando en proyectos de analítica para clientes de los sectores retail, banca y seguros.',
      en: 'I started my career at a business intelligence consulting firm, collaborating on analytics projects for clients in retail, banking, and insurance.',
      fr: 'J\'ai débuté ma carrière dans un cabinet de conseil spécialisé en business intelligence, collaborant à des projets analytiques pour des clients dans les secteurs retail, bancaire et assurance.',
    },
    responsibilities: {
      es: [
        'Limpiar, transformar y validar datasets de más de 10M de registros con Python (Pandas) y SQL',
        'Desarrollar visualizaciones de datos en Power BI y presentarlas a clientes',
        'Apoyar al equipo senior en la redacción de propuestas técnicas y análisis de requerimientos',
      ],
      en: [
        'Clean, transform and validate datasets of over 10M records using Python (Pandas) and SQL',
        'Develop data visualizations in Power BI and present them to clients',
        'Support the senior team in writing technical proposals and requirements analysis',
      ],
      fr: [
        'Nettoyer, transformer et valider des jeux de données de plus de 10 M d\'enregistrements avec Python (Pandas) et SQL',
        'Développer des visualisations de données dans Power BI et les présenter aux clients',
        'Assister l\'équipe senior dans la rédaction de propositions techniques et l\'analyse des besoins',
      ],
    },
    achievements: {
      es: [
        'Automaticé el proceso de ingesta de datos mensual de un cliente bancario, ahorrando 20h/mes al equipo',
        'Creé un modelo de segmentación RFM que aumentó la efectividad de campañas de email en un 32%',
        'Fui promovida a analista mid-level 8 meses antes de lo previsto por desempeño excepcional',
      ],
      en: [
        'Automated a banking client\'s monthly data ingestion process, saving the team 20 hours/month',
        'Created an RFM segmentation model that increased email campaign effectiveness by 32%',
        'Promoted to mid-level analyst 8 months ahead of schedule due to exceptional performance',
      ],
      fr: [
        'Automatisé le processus d\'ingestion mensuelle des données d\'un client bancaire, économisant 20h/mois à l\'équipe',
        'Créé un modèle de segmentation RFM ayant augmenté l\'efficacité des campagnes email de 32%',
        'Promue analyste mid-level 8 mois avant le délai prévu pour performance exceptionnelle',
      ],
    },
  },
];

/**
 * EDUCACIÓN FORMAL
 * INSTRUCCIONES: Cada objeto representa un título o carrera.
 */
const EDUCATION = [
  {
    icon: '🎓',
    degree: {
      es: 'Grado en Ingeniería Informática',
      en: 'B.Sc. in Computer Science',
      fr: 'Licence en Informatique',
    },
    institution: 'Universidad Politécnica de Madrid',
    period: '2013 – 2017',
  },
  {
    icon: '📊',
    degree: {
      es: 'Máster en Ciencia de Datos e IA',
      en: 'M.Sc. in Data Science & AI',
      fr: 'Master en Science des Données & IA',
    },
    institution: 'IE Business School',
    period: '2019 – 2020',
  },
];

/**
 * CERTIFICACIONES
 * INSTRUCCIONES: Cada objeto representa una certificación o curso relevante.
 */
const CERTIFICATIONS = [
  { icon: '🏅', name: 'Professional Scrum Master I (PSM I)', institution: 'Scrum.org', year: '2019' },
  { icon: '🏅', name: 'Professional Scrum Master II (PSM II)', institution: 'Scrum.org', year: '2021' },
  { icon: '🏅', name: 'Professional Scrum Product Owner (PSPO I)', institution: 'Scrum.org', year: '2021' },
  { icon: '🏅', name: 'Google Data Analytics Professional Certificate', institution: 'Google / Coursera', year: '2022' },
  { icon: '🏅', name: 'AWS Cloud Practitioner', institution: 'Amazon Web Services', year: '2023' },
  { icon: '🏅', name: 'dbt Analytics Engineering', institution: 'dbt Labs', year: '2023' },
];

/**
 * HABILIDADES TÉCNICAS
 * INSTRUCCIONES: Cada categoría agrupa skills relacionadas.
 * El campo "level" va de 0 a 100 (para las barras de progreso).
 * Si no quieres barra, usa type: 'tags' en lugar de type: 'bars'.
 *
 * iconos del catIcon: usa texto unicode, emoji o SVG inline.
 */
const SKILLS = [
  {
    catIcon: '📊',
    category: { es: 'Análisis de Datos', en: 'Data Analysis', fr: 'Analyse de Données' },
    type: 'bars',
    items: [
      { name: 'SQL (BigQuery, PostgreSQL)', level: 95 },
      { name: 'Python (Pandas, NumPy, Scikit-learn)', level: 88 },
      { name: 'R (tidyverse)', level: 72 },
      { name: 'dbt (data build tool)', level: 80 },
    ],
  },
  {
    catIcon: '📈',
    category: { es: 'Visualización de Datos', en: 'Data Visualization', fr: 'Visualisation de Données' },
    type: 'bars',
    items: [
      { name: 'Power BI', level: 90 },
      { name: 'Looker Studio / Looker', level: 85 },
      { name: 'Tableau', level: 78 },
      { name: 'Matplotlib / Seaborn', level: 75 },
    ],
  },
  {
    catIcon: '⚙️',
    category: { es: 'Ingeniería de Datos & Cloud', en: 'Data Engineering & Cloud', fr: 'Ingénierie Données & Cloud' },
    type: 'bars',
    items: [
      { name: 'Google BigQuery (GCP)', level: 88 },
      { name: 'Apache Airflow', level: 70 },
      { name: 'AWS (S3, Redshift, Glue)', level: 65 },
      { name: 'Docker / Git', level: 80 },
    ],
  },
  {
    catIcon: '🔄',
    category: { es: 'Metodologías Ágiles', en: 'Agile Methodologies', fr: 'Méthodologies Agiles' },
    type: 'tags',
    tags: ['Scrum', 'Kanban', 'SAFe', 'XP', 'OKRs', 'User Story Mapping', 'Impact Mapping', 'Lean Startup', 'Design Thinking'],
  },
  {
    catIcon: '🛠️',
    category: { es: 'Herramientas & Otros', en: 'Tools & Other', fr: 'Outils & Autres' },
    type: 'tags',
    tags: ['Jira', 'Confluence', 'Notion', 'Miro', 'Figma', 'Slack', 'GitHub', 'Jupyter', 'VS Code', 'Postman'],
  },
];

/**
 * PROYECTOS / PORTAFOLIO
 * INSTRUCCIONES: Cada objeto representa una tarjeta de proyecto.
 * Reemplaza demoUrl y codeUrl con tus URLs reales (GitHub, Vercel, etc.)
 *
 * Para el campo "emoji": elige un emoji representativo del proyecto.
 */
const PROJECTS = [
  {
    emoji: '📉',
    title: { es: 'Dashboard de Churn Prediction', en: 'Churn Prediction Dashboard', fr: 'Tableau de Bord de Prédiction du Churn' },
    description: {
      es: 'Pipeline de ML + dashboard en tiempo real para predecir abandono de clientes en una plataforma SaaS B2B. Modelo Random Forest con 87% de accuracy desplegado en GCP.',
      en: 'ML pipeline + real-time dashboard to predict customer churn on a B2B SaaS platform. Random Forest model with 87% accuracy deployed on GCP.',
      fr: 'Pipeline ML + tableau de bord en temps réel pour prédire le churn client sur une plateforme SaaS B2B. Modèle Random Forest avec 87% de précision déployé sur GCP.',
    },
    stack: ['Python', 'BigQuery', 'Scikit-learn', 'Looker Studio', 'Airflow', 'GCP'],
    role: { es: 'Data Analyst · ML Engineer', en: 'Data Analyst · ML Engineer', fr: 'Analyste Données · ML Engineer' },
    demoUrl: 'https://demo.ejemplo.com/churn-dashboard', /* REEMPLAZA con tu URL real */
    codeUrl: 'https://github.com/tuusuario/churn-dashboard', /* REEMPLAZA con tu URL real */
  },
  {
    emoji: '🛒',
    title: { es: 'Análisis de Funnel E-Commerce', en: 'E-Commerce Funnel Analysis', fr: 'Analyse du Funnel E-Commerce' },
    description: {
      es: 'Análisis completo del embudo de conversión de un retailer omnicanal. Identificación de drop-off points, experimentos A/B y recomendaciones que generaron +18% en conversión.',
      en: 'Full conversion funnel analysis for an omnichannel retailer. Drop-off point identification, A/B experiments and recommendations yielding +18% in conversion.',
      fr: 'Analyse complète du funnel de conversion d\'un distributeur omnicanal. Identification des points d\'abandon, expériences A/B et recommandations ayant généré +18% de conversion.',
    },
    stack: ['SQL', 'Python', 'Tableau', 'Google Analytics 4', 'Excel'],
    role: { es: 'Data Analyst', en: 'Data Analyst', fr: 'Analyste de Données' },
    demoUrl: 'https://demo.ejemplo.com/ecommerce-funnel',
    codeUrl: 'https://github.com/tuusuario/ecommerce-funnel',
  },
  {
    emoji: '📦',
    title: { es: 'Data Warehouse en GCP con dbt', en: 'GCP Data Warehouse with dbt', fr: 'Data Warehouse GCP avec dbt' },
    description: {
      es: 'Diseño e implementación de un DWH en Google BigQuery con dbt para una empresa de logística. Modelos dimensionales (Kimball) y 35+ transformaciones documentadas.',
      en: 'Design and implementation of a DWH on Google BigQuery with dbt for a logistics company. Dimensional models (Kimball) and 35+ documented transformations.',
      fr: 'Conception et implémentation d\'un DWH sur Google BigQuery avec dbt pour une entreprise logistique. Modèles dimensionnels (Kimball) et 35+ transformations documentées.',
    },
    stack: ['BigQuery', 'dbt', 'Airflow', 'Python', 'Looker', 'Terraform'],
    role: { es: 'Data Engineer · Analytics Engineer', en: 'Data Engineer · Analytics Engineer', fr: 'Data Engineer · Analytics Engineer' },
    demoUrl: 'https://demo.ejemplo.com/dwh-dbt',
    codeUrl: 'https://github.com/tuusuario/dwh-dbt',
  },
  {
    emoji: '🎯',
    title: { es: 'OKR Tracker Agile — Herramienta interna', en: 'Agile OKR Tracker — Internal Tool', fr: 'Suivi OKR Agile — Outil interne' },
    description: {
      es: 'Herramienta web de seguimiento de OKRs construida para un equipo de producto de 30 personas. Integración con Jira via API para correlacionar entregas con resultados clave.',
      en: 'OKR tracking web tool built for a 30-person product team. Jira API integration to correlate deliveries with key results.',
      fr: 'Outil web de suivi des OKR construit pour une équipe produit de 30 personnes. Intégration Jira via API pour corréler les livraisons avec les résultats clés.',
    },
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Jira API', 'Docker'],
    role: { es: 'Product Owner · Tech Lead', en: 'Product Owner · Tech Lead', fr: 'Product Owner · Tech Lead' },
    demoUrl: 'https://demo.ejemplo.com/okr-tracker',
    codeUrl: 'https://github.com/tuusuario/okr-tracker',
  },
  {
    emoji: '🔮',
    title: { es: 'Forecasting de Demanda con ML', en: 'Demand Forecasting with ML', fr: 'Prévision de Demande avec ML' },
    description: {
      es: 'Modelo de series temporales (Prophet + LSTM) para pronosticar demanda semanal de 5.000 SKUs en una cadena de distribución. MAPE < 8% en producción.',
      en: 'Time series model (Prophet + LSTM) to forecast weekly demand for 5,000 SKUs in a distribution chain. MAPE < 8% in production.',
      fr: 'Modèle de séries temporelles (Prophet + LSTM) pour prévoir la demande hebdomadaire de 5 000 SKU dans une chaîne de distribution. MAPE < 8% en production.',
    },
    stack: ['Python', 'Prophet', 'TensorFlow/Keras', 'Pandas', 'BigQuery', 'Streamlit'],
    role: { es: 'ML Engineer · Data Analyst', en: 'ML Engineer · Data Analyst', fr: 'ML Engineer · Analyste Données' },
    demoUrl: 'https://demo.ejemplo.com/demand-forecasting',
    codeUrl: 'https://github.com/tuusuario/demand-forecasting',
  },
  {
    emoji: '📱',
    title: { es: 'App de Gestión de Retrospectivas', en: 'Retrospective Management App', fr: 'Application de Gestion des Rétrospectives' },
    description: {
      es: 'Aplicación web para facilitar retrospectivas remotas en equipos Scrum. Formatos: 4Ls, Start-Stop-Continue, Mad-Sad-Glad. Exporta action items a Jira automáticamente.',
      en: 'Web app to facilitate remote retrospectives in Scrum teams. Formats: 4Ls, Start-Stop-Continue, Mad-Sad-Glad. Automatically exports action items to Jira.',
      fr: 'Application web pour faciliter les rétrospectives à distance dans les équipes Scrum. Formats : 4L, Start-Stop-Continue, Mad-Sad-Glad. Exporte automatiquement les actions vers Jira.',
    },
    stack: ['Vue.js', 'Firebase', 'Jira API', 'Tailwind CSS', 'WebSockets'],
    role: { es: 'Product Owner · Desarrolladora Full-Stack', en: 'Product Owner · Full-Stack Developer', fr: 'Product Owner · Développeuse Full-Stack' },
    demoUrl: 'https://demo.ejemplo.com/retro-app',
    codeUrl: 'https://github.com/tuusuario/retro-app',
  },
];

/* ============================================================================
   3. RENDERIZADO DINÁMICO
   Estas funciones generan el HTML a partir de los datos anteriores.
   ============================================================================ */

/** Idioma activo (por defecto: español) */
let currentLang = 'es';

/** Devuelve el texto en el idioma activo para un objeto multilingüe */
function t(obj) {
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj['es'] || '';
}

/**
 * Renderiza la línea de tiempo de experiencia laboral.
 */
function renderExperience() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const lang = TRANSLATIONS[currentLang];

  container.innerHTML = EXPERIENCE.map((job, idx) => `
    <article class="timeline-item reveal" data-delay="${Math.min(idx, 4)}" role="listitem">
      <div class="timeline-header">
        <h3 class="timeline-role">${t(job.role)}</h3>
        <span class="timeline-period">${t(job.period)}</span>
      </div>
      <p class="timeline-company">
        <strong>${job.company}</strong> · ${t(job.location)}
      </p>
      <p class="timeline-desc">${t(job.description)}</p>
      <div class="timeline-lists">
        <div>
          <h4>${lang.exp_responsibilities}</h4>
          <ul>
            ${t(job.responsibilities).map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>${lang.exp_achievements}</h4>
          <ul class="timeline-achievements">
            ${t(job.achievements).map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>
      </div>
    </article>
  `).join('');

  // Añadir solo los nuevos elementos al observer (sin desconectar el global)
  observeNewElements(container);
}

/**
 * Renderiza educación formal y certificaciones.
 */
function renderEducation() {
  const eduContainer  = document.getElementById('education-container');
  const certContainer = document.getElementById('certifications-container');
  if (!eduContainer || !certContainer) return;

  eduContainer.innerHTML = EDUCATION.map((edu, idx) => `
    <div class="edu-item reveal" data-delay="${idx}" role="listitem">
      <div class="edu-icon" aria-hidden="true">${edu.icon}</div>
      <div class="edu-body">
        <div class="edu-degree">${t(edu.degree)}</div>
        <div class="edu-institution">${edu.institution}</div>
        <span class="edu-period">${edu.period}</span>
      </div>
    </div>
  `).join('');

  certContainer.innerHTML = CERTIFICATIONS.map((cert, idx) => `
    <div class="edu-item reveal" data-delay="${Math.min(idx, 4)}" role="listitem">
      <div class="edu-icon" aria-hidden="true">${cert.icon}</div>
      <div class="edu-body">
        <div class="edu-degree">${cert.name}</div>
        <div class="edu-institution">${cert.institution}</div>
        <span class="edu-period">${cert.year}</span>
      </div>
    </div>
  `).join('');

  observeNewElements(eduContainer);
  observeNewElements(certContainer);
}

/**
 * Renderiza el grid de habilidades con barras de nivel o tags.
 */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = SKILLS.map((cat, catIdx) => {
    let content = '';

    if (cat.type === 'bars') {
      content = cat.items.map(item => `
        <div class="skill-item">
          <div class="skill-label-row">
            <span class="skill-name">${item.name}</span>
            <span class="skill-level-text">${item.level}%</span>
          </div>
          <div class="skill-bar" role="progressbar" aria-valuenow="${item.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${item.name}">
            <div class="skill-bar-fill" data-level="${item.level}"></div>
          </div>
        </div>
      `).join('');
    } else {
      content = `
        <div class="skill-tags">
          ${cat.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
      `;
    }

    return `
      <div class="skill-category reveal" data-delay="${Math.min(catIdx, 4)}">
        <div class="skill-cat-title">
          <span class="cat-icon" aria-hidden="true">${cat.catIcon}</span>
          ${t(cat.category)}
        </div>
        ${content}
      </div>
    `;
  }).join('');

  observeNewElements(container);
}

/**
 * Anima las barras de nivel cuando son visibles en pantalla.
 */
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
  });
}

/**
 * Renderiza las tarjetas de proyectos.
 */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const lang = TRANSLATIONS[currentLang];

  container.innerHTML = PROJECTS.map((project, idx) => `
    <article class="project-card reveal" data-delay="${Math.min(idx % 3, 2)}">
      <div class="project-card-img" aria-hidden="true">${project.emoji}</div>
      <div class="project-card-body">
        <p class="project-role-tag">${t(project.role)}</p>
        <h3 class="project-title">${t(project.title)}</h3>
        <p class="project-desc">${t(project.description)}</p>
        <div class="project-stack" aria-label="Stack tecnológico">
          ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver demo de ${t(project.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            ${lang.proj_demo}
          </a>
          <a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver código de ${t(project.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            ${lang.proj_code}
          </a>
        </div>
      </div>
    </article>
  `).join('');

  observeNewElements(container);
}

/* ============================================================================
   4. INTERNACIONALIZACIÓN (i18n)
   ============================================================================ */

/**
 * Aplica las traducciones del idioma activo a todos los elementos
 * con el atributo data-i18n="clave".
 */
function applyTranslations(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // Actualizar atributo lang del HTML (accesibilidad + SEO)
  document.documentElement.lang = lang;

  // Aplicar texto a todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Re-renderizar secciones dinámicas con el nuevo idioma
  renderExperience();
  renderEducation();
  renderSkills();
  renderProjects();

  // Animar barras si ya son visibles
  setTimeout(animateSkillBars, 200);
}

/**
 * Inicializa el selector de idioma.
 */
function initLangSwitcher() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');

      // Actualizar estado visual de los botones
      btns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // Aplicar traducciones
      applyTranslations(lang);

      // Guardar preferencia en sessionStorage (no datos sensibles)
      try { sessionStorage.setItem('lang', lang); } catch (_) { /* sin soporte */ }
    });
  });

  // Restaurar idioma guardado si existe
  try {
    const saved = sessionStorage.getItem('lang');
    if (saved && TRANSLATIONS[saved]) {
      const savedBtn = document.querySelector(`.lang-btn[data-lang="${saved}"]`);
      if (savedBtn) savedBtn.click();
    }
  } catch (_) { /* sin soporte */ }
}

/* ============================================================================
   5. NAVEGACIÓN
   ============================================================================ */

/**
 * Marca el enlace de navegación activo según la sección visible.
 */
function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: `-${navHeight}px 0px -60% 0px`, threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/**
 * Agrega la clase .scrolled al header cuando la página hace scroll.
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial
}

/**
 * Inicializa el menú hamburger para móviles.
 */
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  function closeMenu() {
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    const isOpen = !menu.hidden;
    if (isOpen) {
      closeMenu();
    } else {
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  });

  // Cerrar al hacer clic en un enlace del menú móvil
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !menu.hidden) closeMenu();
  });
}

/* ============================================================================
   6. ANIMACIONES — INTERSECTION OBSERVER
   ============================================================================ */

let revealObserver = null;

/**
 * Crea el IntersectionObserver una sola vez y lo reutiliza.
 * CORRECCIÓN: No desconectar el observer entre re-renders;
 * usar observeNewElements() para añadir elementos dinámicos.
 */
function initRevealObserver() {
  // Solo crear si no existe
  if (revealObserver) return;

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animar barras de habilidades cuando su sección es visible
        if (entry.target.classList.contains('skill-category')) {
          const fills = entry.target.querySelectorAll('.skill-bar-fill');
          fills.forEach(fill => {
            const level = fill.getAttribute('data-level');
            if (level) fill.style.width = level + '%';
          });
        }

        revealObserver.unobserve(entry.target);
      }
    });
  // rootMargin '0px' y threshold 0: cualquier pixel visible activa la animación
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0 });
}

/**
 * Observa TODOS los .reveal del documento que no sean .visible aún.
 * Se llama una sola vez desde init() tras el primer render.
 */
function observeRevealElements() {
  initRevealObserver();
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Añade al observer solo los elementos dentro de un contenedor concreto.
 * Llamado desde renderExperience(), renderEducation(), renderSkills(),
 * renderProjects() para no desconectar el observer global.
 */
function observeNewElements(container) {
  initRevealObserver();
  if (!container) return;
  container.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Fallback de seguridad: fuerza .visible en cualquier .reveal que
 * no haya sido activado tras 900ms. Protege contra elementos que
 * nunca cruzan el threshold (ej: elementos más altos que el viewport).
 */
function revealFallback() {
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      el.classList.add('visible');
      // Animar barras si las hay
      el.querySelectorAll('.skill-bar-fill').forEach(fill => {
        const level = fill.getAttribute('data-level');
        if (level) fill.style.width = level + '%';
      });
    });
  }, 900);
}

/* ============================================================================
   7. FORMULARIO DE CONTACTO (DEMOSTRACIÓN)
   ============================================================================ */

/**
 * Valida y simula el envío del formulario.
 * NOTA: Este formulario NO envía datos. Para añadir funcionalidad real,
 * integra Formspree, EmailJS u otro servicio sin backend.
 */
function initContactForm() {
  const submitBtn = document.getElementById('form-submit');
  const feedback  = document.getElementById('form-feedback');
  if (!submitBtn || !feedback) return;

  submitBtn.addEventListener('click', () => {
    const nameEl    = document.getElementById('name');
    const emailEl   = document.getElementById('email');
    const messageEl = document.getElementById('message');

    const name    = nameEl?.value.trim()    || '';
    const email   = emailEl?.value.trim()   || '';
    const message = messageEl?.value.trim() || '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lang = TRANSLATIONS[currentLang];

    feedback.className = '';
    feedback.style.display = 'none';

    if (!name || !emailRegex.test(email) || message.length < 10) {
      feedback.textContent  = lang.form_error;
      feedback.className    = 'error';
      feedback.style.display = 'block';
      return;
    }

    // Simular envío
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    setTimeout(() => {
      feedback.textContent   = lang.form_success;
      feedback.className     = 'success';
      feedback.style.display = 'block';
      submitBtn.disabled     = false;
      submitBtn.textContent  = lang.form_submit;

      // Limpiar campos
      if (nameEl)    nameEl.value    = '';
      if (emailEl)   emailEl.value   = '';
      if (messageEl) messageEl.value = '';
    }, 900);
  });
}

/* ============================================================================
   8. INICIALIZACIÓN
   ============================================================================ */

/**
 * Actualiza el año en el footer automáticamente.
 */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/**
 * Punto de entrada principal. Se ejecuta cuando el DOM está listo.
 */
function init() {
  // Año del footer
  setFooterYear();

  // Renderizar datos dinámicos con el idioma por defecto (ES)
  applyTranslations('es');

  // Navegación y UX
  initHeaderScroll();
  initActiveNav();
  initHamburger();

  // Selector de idioma
  initLangSwitcher();

  // Formulario
  initContactForm();

  // Animaciones de scroll — se llama UNA vez tras todos los renders iniciales
  observeRevealElements();

  // Fallback de seguridad por si algún .reveal no cruza el threshold
  revealFallback();

  // Accesibilidad: saltar al contenido principal con teclado
  document.querySelector('a[href="#main-content"]')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('main-content')?.focus();
  });
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/*
=============================================================================
  GUÍA PARA DESPLEGAR EN GITHUB PAGES
=============================================================================

  PASO A PASO SEGURO:

  1. Crea una cuenta en https://github.com si no la tienes.
     Activa autenticación de dos factores (2FA) en Settings → Password and authentication.

  2. Crea un nuevo repositorio:
     - Ve a https://github.com/new
     - Nombre sugerido: "portfolio" o "tuusuario.github.io"
     - Selecciona "Public"
     - NO marques "Initialize this repository" (lo haremos manualmente)

  3. Estructura de archivos a subir:
     /
     ├── index.html        ← archivo principal (¡debe llamarse exactamente así!)
     ├── styles.css
     ├── scripts.js
     ├── cv.pdf            ← sube tu CV aquí
     ├── .gitignore        ← ver contenido abajo
     └── assets/
         └── img/          ← tus imágenes

  4. Sube los archivos desde la terminal (con Git):

     git init
     git add .
     git commit -m "feat: portafolio personal inicial"
     git branch -M main
     git remote add origin https://github.com/TUUSUARIO/TUREPOSITORIO.git
     git push -u origin main

     O bien usa la interfaz web de GitHub: "uploading an existing file".

  5. Activa GitHub Pages:
     - Ve a tu repositorio → Settings → Pages
     - En "Source": selecciona "Deploy from a branch"
     - Branch: "main" / Folder: "/ (root)"
     - Haz clic en "Save"

  6. Tu sitio estará disponible en:
     https://TUUSUARIO.github.io/NOMBRE-REPOSITORIO/
     (o https://TUUSUARIO.github.io si llamaste al repo "tuusuario.github.io")

  7. El despliegue tarda 1–5 minutos la primera vez.

  BUENAS PRÁCTICAS DE SEGURIDAD:

  ✓ NO incluyas en el repositorio:
    - Direcciones físicas completas ni teléfonos personales
    - Claves API, tokens de acceso o contraseñas
    - Archivos de configuración local (.env, config.local.js, etc.)

  ✓ Crea un archivo .gitignore con al menos:
    .DS_Store
    Thumbs.db
    .env
    *.local
    node_modules/

  ✓ Activa 2FA en tu cuenta de GitHub.
  ✓ Revisa los permisos de acceso al repositorio periódicamente.
  ✓ Usa HTTPS (no HTTP) siempre que enlaces recursos externos.
  ✓ Mantén el repositorio como "Public" solo si el contenido es apto para todos.

=============================================================================
*/
