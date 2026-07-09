/**
 * =============================================================================
 *  SCRIPTS.JS — Portafolio Personal Profesional Tech
 *  Autor: Evelyn Roxana Cruz
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
 *
 *  ✏️  GUÍA RÁPIDA — QUÉ DEBES RELLENAR
 *  ─────────────────────────────────────
 *  Busca todos los comentarios  ✏️  y reemplaza con tu información real.
 *
 *  SECCIÓN         LÍNEAS APROX.   QUÉ CAMBIAR
 *  ─────────────── ─────────────   ──────────────────────────────────────────
 *  EXPERIENCE      ~303            Empresas, roles, fechas, logros reales
 *  EDUCATION       ~460            Tu universidad real + años
 *  CERTIFICATIONS  ~482            Tus 4 certificaciones reales
 *  SKILLS          ~498            Ajusta niveles (0-100) a tu dominio real
 *  PROJECTS        ~553            Tus proyectos reales con URLs de GitHub
 *
 *  TAMBIÉN en index.html (NO en este archivo):
 *  • Imagen de perfil: cambia src de la etiqueta <img> en la sección hero
 *    de "https://i.pravatar.cc/400?img=47" → "assets/img/Profile-Eve.jpg"
 *  • Email de contacto: verifica que el <a href="mailto:..."> use eroxanacruz@gmail.com
 *  • LinkedIn: verifica que el enlace apunte a linkedin.com/in/evecruzg
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
    hero_title:         'AI Business Analyst / AI Automation Analyst · Data Analyst · Product Owner · Scrum Master',
    hero_pitch:         'Transformo datos en decisiones estratégicas y lidero equipos Agile para construir productos digitales que generan impacto real en el negocio.',
    hero_cta_projects:  'Ver proyectos',
    hero_cta_contact:   'Hablemos',
    stat_years:         'años de experiencia',
    stat_projects:      'proyectos entregados',
    stat_certs:         'certificaciones y cursos',
    hero_scroll:        'Scroll',

    /* Sobre mí */
    about_tag:           'Sobre mí',
    about_heading:       'Quien está detrás de los datos',
    about_p1:            'Soy Ingeniera en Sistemas Informáticos con más de 13 años de experiencia en IT. He evolucionado desde soporte técnico hasta el análisis de negocio, la gestión de productos como Product Owner y la facilitación de equipos como Scrum Master, participando en diversas industrias.',
    about_p2:            'Actualmente, me enfoco en el uso de datos y la inteligencia artificial para crear productos digitales, potenciar el análisis y materializar ideas en soluciones reales. Creo en el valor de los datos bien interpretados, el aprendizaje continuo y el trabajo colaborativo como motores del progreso.',
    
    about_story_heading: 'Mi historia',
    about_story_p1:      'Crecí en una familia que no le temía al trabajo y que aprovechaba cada oportunidad para salir adelante. Desde muy joven fui curiosa y encontré en el estudio una puerta hacia nuevas experiencias y la posibilidad de construir mi propio camino. Decidí estudiar Ingeniería en Sistemas Informáticos, una carrera cuya versatilidad me permitió comprender el valor de la información y descubrir que los datos cuentan historias. Al iniciar mi vida profesional, aprendí a comunicarme tanto en el lenguaje del negocio como en el técnico. Ese puente entre ambos mundos es lo que hoy define mi perfil.',
    about_story_p2:      'Fuera de la pantalla, disfruto la lectura y los podcasts sobre psicología, educación en los niños, literatura y negocios. Creo firmemente en la importancia de aprender y desaprender constantemente, especialmente en un entorno tan dinámico como el tecnológico.',
    about_soft_heading:  'Habilidades blandas',
    about_values_heading:'Valores profesionales',
    soft_1: 'Liderazgo orientado a personas',
    soft_2: 'Comunicación asertiva',
    soft_3: 'Pensamiento analítico',
    soft_4: 'Resolución de conflictos',
    soft_5: 'Gestión del cambio',
    soft_6: 'Aprendizaje continuo',
    soft_7: 'Trabajo en equipo multidisciplinar',
    soft_8: 'Adaptabilidad y resiliencia',
    value_1_title: 'Enfoque en valor de negocio:',
    value_1_desc:  'Si no genera valor, no es prioridad',
    value_2_title: 'Calidad sobre velocidad:',
    value_2_desc:  'Entrego trabajo bien hecho, siempre',
    value_3_title: 'Transparencia',
    value_3_desc:  'Comunicación honesta y directa con todos',
    value_4_title: 'La IA es un deporte de equipo:',
    value_4_desc:  'Integrar negocio, datos y tecnología para soluciones efectivas.',

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
    form_notice:          'Completa el formulario y te responderé a la brevedad. También puedes escribirme directamente por correo o LinkedIn.',
    form_name:            'Nombre completo',
    form_email:           'Correo electrónico',
    form_message:         'Mensaje',
    form_submit:          'Enviar mensaje',
    form_success:         '✓ ¡Mensaje enviado! Te responderé pronto a tu correo.',
    form_error:           '⚠ Por favor completa todos los campos correctamente.',
    contact_info_heading: 'Encuéntrame en',
    availability_title:   'Disponible para proyectos',
    availability_desc:    'Abierta a roles full-time, freelance y consultoría en remoto.',

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
    hero_title:         'AI Business Analyst / AI Automation Analyst · Data Analyst · Product Owner · Scrum Master',
    hero_pitch:         'I transform data into strategic decisions and lead Agile teams to build digital products that create real business impact.',
    hero_cta_projects:  'View projects',
    hero_cta_contact:   "Let's talk",
    stat_years:         'years of experience',
    stat_projects:      'projects delivered',
    stat_certs:         'certifications & courses',
    hero_scroll:        'Scroll',

    about_tag:           'About me',
    about_heading:       'The person behind the data',
    about_p1:            'I am a Computer Systems Engineer with over 13 years of experience in IT. I have evolved from technical roles to business analysis, product management as a Product Owner, and team facilitation as a Scrum Master across diverse industries.',
    about_p2:            'Currently, I focus on leveraging data and artificial intelligence to create digital products, enhance analysis and turn ideas into real solutions. I am also a certified Scrum Master and hold a Google Cloud Digital Leader certification.',
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
    form_notice:          'Fill out the form and I will get back to you shortly. You can also reach me directly by email or LinkedIn.',
    form_name:            'Full name',
    form_email:           'Email address',
    form_message:         'Message',
    form_submit:          'Send message',
    form_success:         '✓ Message sent! I will reply to your email soon.',
    form_error:           '⚠ Please complete all fields correctly.',
    contact_info_heading: 'Find me on',
    availability_title:   'Available for projects',
    availability_desc:    'Open to full-time, freelance and consulting roles, fully remote.',

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
    stat_certs:         'certifications et cours',
    hero_scroll:        'Défiler',

    about_tag:           'À propos',
    about_heading:       'La personne derrière les données',
    about_p1:            "Je suis Ingénieure en Systèmes Informatiques avec plus de 13 ans d'expérience en IT. J'ai évolué de rôles techniques vers l'analyse métier, la gestion de produits en tant que Product Owner et la facilitation d'équipes en tant que Scrum Master.",
    about_p2:            "Actuellement, je me concentre sur l'utilisation des données et de l'intelligence artificielle pour créer des produits numériques et concrétiser des idées en solutions réelles. Je suis également certifiée Scrum Master et Google Cloud Digital Leader.",
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
    form_notice:          "Remplissez le formulaire et je vous répondrai dans les plus brefs délais. Vous pouvez aussi me contacter directement par e-mail ou LinkedIn.",
    form_name:            'Nom complet',
    form_email:           'Adresse e-mail',
    form_message:         'Message',
    form_submit:          'Envoyer le message',
    form_success:         '✓ Message envoyé ! Je vous répondrai bientôt par e-mail.',
    form_error:           '⚠ Veuillez remplir correctement tous les champs.',
    contact_info_heading: 'Retrouvez-moi sur',
    availability_title:   'Disponible pour des projets',
    availability_desc:    'Ouverte aux postes temps plein, freelance et conseil, entièrement en télétravail.',

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
  /* ─── 1. ROL ACTUAL ─────────────────────────────────────────────────────── */
  {
    role: {
      es: 'AI Business Analyst / AI Automation Analyst',
      en: 'AI Business Analyst / AI Automation Analyst',
      fr: 'Analyste Métier IA / Analyste en Automatisation IA',
    },
    company: 'Promesa Latina',
    location: {
      es: 'California, EE.UU. (Remoto)',
      en: 'California, USA (Remote)',
      fr: 'Californie, États-Unis (Télétravail)',
    },
    period: {
      es: 'Feb 2025 – Presente',
      en: 'Feb 2025 – Present',
      fr: 'Fév 2025 – Présent',
    },
    description: {
      es: 'Lidero la creación de una aplicación web B2B para Promesa Latina, abarcando el análisis, diseño, desarrollo e implementación asistido por inteligencia artificial, coordinando equipos multidisciplinarios bajo metodologías ágiles.',
      en: 'I lead the creation of a B2B web application for Promesa Latina, covering analysis, design, development and AI-assisted implementation, coordinating multidisciplinary teams using agile methodologies.',
      fr: 'Je dirige la création d\'une application web B2B pour Promesa Latina, couvrant l\'analyse, la conception, le développement et la mise en œuvre assistée par IA, en coordonnant des équipes multidisciplinaires selon des méthodologies agiles.',
    },
    responsibilities: {
      es: [
        'Levantamiento y análisis de requerimientos con stakeholders',
        'Traducción de necesidades de negocio en soluciones tecnológicas escalables',
        'Diseño funcional y definición de arquitectura de la solución',
        'Desarrollo de la aplicación utilizando herramientas y capacidades de inteligencia artificial',
        'Automatización de procesos clave para optimizar la operación',
        'Validación de funcionalidades y aseguramiento de la calidad del producto',
        'Gestión del ciclo de vida del producto desde la concepción hasta producción',
      ],
      en: [
        'Requirements gathering and analysis with stakeholders',
        'Translating business needs into scalable technology solutions',
        'Functional design and solution architecture definition',
        'Application development using artificial intelligence tools and capabilities',
        'Automation of key processes to optimize operations',
        'Feature validation and product quality assurance',
        'Product lifecycle management from conception to production',
      ],
      fr: [
        'Recueil et analyse des exigences avec les parties prenantes',
        'Traduction des besoins métier en solutions technologiques évolutives',
        'Conception fonctionnelle et définition de l\'architecture de la solution',
        'Développement de l\'application à l\'aide d\'outils d\'intelligence artificielle',
        'Automatisation des processus clés pour optimiser les opérations',
        'Validation des fonctionnalités et assurance qualité du produit',
        'Gestion du cycle de vie du produit de la conception à la mise en production',
      ],
    },
    achievements: {
      es: [
        'Implementación exitosa de una solución B2B alineada a los objetivos del negocio',
        'Reducción de tiempos operativos mediante la automatización de procesos clave',
        'Entrega del producto en tiempos definidos cumpliendo estándares de calidad, generando valor mediante el uso estratégico de IA',
      ],
      en: [
        'Successful implementation of a B2B solution aligned with business objectives',
        'Reduction of operational time through automation of key processes',
        'Product delivery within defined timelines meeting quality standards, generating value through strategic use of AI',
      ],
      fr: [
        'Implémentation réussie d\'une solution B2B alignée sur les objectifs métier',
        'Réduction des délais opérationnels grâce à l\'automatisation des processus clés',
        'Livraison du produit dans les délais définis selon les normes de qualité, créant de la valeur par l\'utilisation stratégique de l\'IA',
      ],
    },
  },

  /* ─── 2. ELANIIN ────────────────────────────────────────────────────────── */
  {
    role: {
      es: 'Product Owner / Scrum Master',
      en: 'Product Owner / Scrum Master',
      fr: 'Product Owner / Scrum Master',
    },
    company: 'Elaniin',
    location: {
      es: 'El Salvador (Híbrido)',
      en: 'El Salvador (Hybrid)',
      fr: 'El Salvador (Hybride)',
    },
    period: {
      es: 'Oct 2022 – Oct 2024',
      en: 'Oct 2022 – Oct 2024',
      fr: 'Oct 2022 – Oct 2024',
    },
    description: {
      es: 'Ejercí un rol dual como Product Owner y Scrum Master en proyectos de desarrollo de software, liderando la visión del producto, la gestión del backlog y la facilitación de equipos ágiles.',
      en: 'I held a dual role as Product Owner and Scrum Master in software development projects, leading product vision, backlog management and agile team facilitation.',
      fr: 'J\'ai occupé un double rôle de Product Owner et Scrum Master dans des projets de développement logiciel, dirigeant la vision produit, la gestion du backlog et la facilitation des équipes agiles.',
    },
    responsibilities: {
      es: [
        'Planificación y organización del Roadmap y plan de trabajo del producto',
        'Gestión de stakeholders y comunicación con áreas de negocio',
        'Definición de requisitos y alcance del MVP',
        'Priorización y refinamiento del backlog',
        'Facilitación de ceremonias Scrum (Planning, Daily, Review, Retrospective)',
        'Eliminación proactiva de bloqueos del equipo',
        'Seguimiento de métricas de entrega y calidad',
      ],
      en: [
        'Planning and organizing the product Roadmap and work plan',
        'Stakeholder management and communication with business areas',
        'Requirements definition and MVP scope',
        'Backlog prioritization and refinement',
        'Facilitation of Scrum ceremonies (Planning, Daily, Review, Retrospective)',
        'Proactive removal of team blockers',
        'Tracking delivery and quality metrics',
      ],
      fr: [
        'Planification et organisation de la Roadmap produit et du plan de travail',
        'Gestion des parties prenantes et communication avec les équipes métier',
        'Définition des exigences et périmètre du MVP',
        'Priorisation et affinage du backlog',
        'Facilitation des cérémonies Scrum (Planning, Daily, Review, Rétrospective)',
        'Suppression proactive des blocages de l\'équipe',
        'Suivi des métriques de livraison et de qualité',
      ],
    },
    achievements: {
      es: [
        'Lideré proyectos web de alto impacto: elsalvadorpei.migracion.gob.sv y pasaporteenlinea.migracion.gob.sv',
        'Desarrollo y capacitación en tableros de información migratoria para la Dirección General de Migración y Extranjería',
        'Gestión exitosa de múltiples productos simultáneos manteniendo alineación con objetivos estratégicos',
      ],
      en: [
        'Led high-impact web projects: elsalvadorpei.migracion.gob.sv and pasaporteenlinea.migracion.gob.sv',
        'Developed and trained stakeholders on migration information dashboards for the General Directorate of Migration',
        'Successful management of multiple simultaneous products maintaining alignment with strategic objectives',
      ],
      fr: [
        'Dirigé des projets web à fort impact : elsalvadorpei.migracion.gob.sv et pasaporteenlinea.migracion.gob.sv',
        'Développement et formation aux tableaux de bord d\'information migratoire pour la Direction Générale de Migration',
        'Gestion réussie de plusieurs produits simultanés en maintenant l\'alignement avec les objectifs stratégiques',
      ],
    },
  },

  /* ─── 3. SECRETARÍA DE INNOVACIÓN ──────────────────────────────────────── */
  {
    role: {
      es: 'IT Project Manager',
      en: 'IT Project Manager',
      fr: 'Chef de Projet IT',
    },
    company: 'Secretaría de Innovación',
    location: {
      es: 'El Salvador (Híbrido)',
      en: 'El Salvador (Hybrid)',
      fr: 'El Salvador (Hybride)',
    },
    period: {
      es: 'Ago 2020 – Oct 2022',
      en: 'Aug 2020 – Oct 2022',
      fr: 'Août 2020 – Oct 2022',
    },
    description: {
      es: 'Gestioné programas y proyectos tecnológicos impulsados por la institución gubernamental, asegurando la planificación, seguimiento y control de iniciativas de innovación digital.',
      en: 'I managed technology programs and projects driven by the government institution, ensuring planning, monitoring and control of digital innovation initiatives.',
      fr: 'J\'ai géré des programmes et projets technologiques portés par l\'institution gouvernementale, assurant la planification, le suivi et le contrôle des initiatives d\'innovation numérique.',
    },
    responsibilities: {
      es: [
        'Gestión de programas y proyectos tecnológicos institucionales',
        'Planificación, seguimiento y control de proyectos de innovación digital',
        'Coordinación con equipos internos y proveedores externos',
        'Reporte de avance a dirección y stakeholders gubernamentales',
      ],
      en: [
        'Management of institutional technology programs and projects',
        'Planning, monitoring and control of digital innovation projects',
        'Coordination with internal teams and external vendors',
        'Progress reporting to management and government stakeholders',
      ],
      fr: [
        'Gestion des programmes et projets technologiques institutionnels',
        'Planification, suivi et contrôle des projets d\'innovation numérique',
        'Coordination avec les équipes internes et les prestataires externes',
        'Reporting d\'avancement à la direction et aux parties prenantes gouvernementales',
      ],
    },
    achievements: {
      es: [
        'Gestión exitosa de proyectos de transformación digital de alto impacto institucional',
        'Implementación de marcos de seguimiento que mejoraron la visibilidad y control de los proyectos',
        'Coordinación efectiva entre áreas técnicas y decisores de nivel ejecutivo',
      ],
      en: [
        'Successful management of high-impact institutional digital transformation projects',
        'Implementation of monitoring frameworks that improved project visibility and control',
        'Effective coordination between technical areas and executive-level decision makers',
      ],
      fr: [
        'Gestion réussie de projets de transformation numérique à fort impact institutionnel',
        'Mise en œuvre de cadres de suivi ayant amélioré la visibilité et le contrôle des projets',
        'Coordination efficace entre les équipes techniques et les décideurs de niveau exécutif',
      ],
    },
  },

  /* ─── 4. UJMD ───────────────────────────────────────────────────────────── */
  {
    role: {
      es: 'Coordinadora de Operaciones IT',
      en: 'IT Operations Coordinator',
      fr: 'Coordinatrice des Opérations IT',
    },
    company: 'Universidad Dr. José Matías Delgado (UJMD)',
    location: {
      es: 'El Salvador (Híbrido)',
      en: 'El Salvador (Hybrid)',
      fr: 'El Salvador (Hybride)',
    },
    period: {
      es: 'Jul 2019 – Jul 2020',
      en: 'Jul 2019 – Jul 2020',
      fr: 'Juil 2019 – Juil 2020',
    },
    description: {
      es: 'Coordiné la operación de laboratorios de cómputo universitarios e implementé metodología Scrum en el área IT, además de gestionar el presupuesto de la Dirección de Tecnología.',
      en: 'I coordinated the operation of university computer labs and implemented Scrum methodology in the IT area, as well as managing the Technology Directorate budget.',
      fr: 'J\'ai coordonné le fonctionnement des laboratoires informatiques universitaires et mis en place la méthodologie Scrum dans le département IT, tout en gérant le budget de la Direction Technologie.',
    },
    responsibilities: {
      es: [
        'Supervisión y coordinación de laboratorios de cómputo universitarios',
        'Implementación del marco de trabajo Scrum en el área IT',
        'Elaboración y administración del presupuesto de la Dirección de IT',
      ],
      en: [
        'Supervision and coordination of university computer labs',
        'Implementation of the Scrum framework in the IT area',
        'Preparation and management of the IT Directorate budget',
      ],
      fr: [
        'Supervision et coordination des laboratoires informatiques universitaires',
        'Mise en œuvre du cadre Scrum au sein du département IT',
        'Élaboration et gestion du budget de la Direction IT',
      ],
    },
    achievements: {
      es: [
        'Introducción exitosa de Scrum como metodología de trabajo en el área IT de la universidad',
        'Optimización de la gestión operativa y presupuestaria de la Dirección de Tecnología',
        'Mejora en la disponibilidad y coordinación de recursos tecnológicos para estudiantes y docentes',
      ],
      en: [
        'Successful introduction of Scrum as a working methodology in the university IT area',
        'Optimization of operational and budget management in the Technology Directorate',
        'Improved availability and coordination of technology resources for students and faculty',
      ],
      fr: [
        'Introduction réussie de Scrum comme méthodologie de travail dans le département IT universitaire',
        'Optimisation de la gestion opérationnelle et budgétaire de la Direction Technologie',
        'Amélioration de la disponibilité et coordination des ressources technologiques pour étudiants et enseignants',
      ],
    },
  },

  /* ─── 5. AVIANCA ────────────────────────────────────────────────────────── */
  {
    role: {
      es: 'Product Owner / Scrum Master',
      en: 'Product Owner / Scrum Master',
      fr: 'Product Owner / Scrum Master',
    },
    company: 'Avianca',
    location: {
      es: 'El Salvador (Presencial)',
      en: 'El Salvador (On-site)',
      fr: 'El Salvador (Présentiel)',
    },
    period: {
      es: 'Abr 2015 – Ene 2018',
      en: 'Apr 2015 – Jan 2018',
      fr: 'Avr 2015 – Jan 2018',
    },
    description: {
      es: 'Ejercí como Product Owner y Scrum Master en proyectos de desarrollo tecnológico para una de las aerolíneas más importantes de Latinoamérica, liderando el análisis de procesos y la gestión ágil de equipos.',
      en: 'I served as Product Owner and Scrum Master in technology development projects for one of Latin America\'s most important airlines, leading process analysis and agile team management.',
      fr: 'J\'ai exercé en tant que Product Owner et Scrum Master dans des projets de développement technologique pour l\'une des compagnies aériennes les plus importantes d\'Amérique Latine.',
    },
    responsibilities: {
      es: [
        'Análisis de procesos funcionales y reglas de negocio',
        'Elaboración de Historias de Usuario y criterios de aceptación',
        'Facilitación de ceremonias Scrum',
        'Planeación, organización y ejecución de Sprints',
        'Desbloqueo de impedimentos del equipo',
      ],
      en: [
        'Analysis of functional processes and business rules',
        'Writing User Stories and acceptance criteria',
        'Facilitation of Scrum ceremonies',
        'Sprint planning, organization and execution',
        'Team impediment removal',
      ],
      fr: [
        'Analyse des processus fonctionnels et des règles métier',
        'Rédaction des User Stories et critères d\'acceptation',
        'Facilitation des cérémonies Scrum',
        'Planification, organisation et exécution des Sprints',
        'Levée des obstacles de l\'équipe',
      ],
    },
    achievements: {
      es: [
        'Desarrollo e implementación de 60 reportes para el Proyecto SimpliFy de Avianca Holdings',
        'Publicación exitosa en producción: simple.sv',
        'Gestión ágil de proyectos en entorno de alta complejidad y múltiples partes interesadas internacionales',
      ],
      en: [
        'Development and implementation of 60 reports for the Avianca Holdings SimpliFy Project',
        'Successful production launch: simple.sv',
        'Agile project management in a high-complexity environment with multiple international stakeholders',
      ],
      fr: [
        'Développement et implémentation de 60 rapports pour le projet SimpliFy d\'Avianca Holdings',
        'Mise en production réussie : simple.sv',
        'Gestion agile de projets dans un environnement complexe avec de multiples parties prenantes internationales',
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
      es: 'Ingeniería en Sistemas Informáticos',
      en: 'B.Sc. in Computer Systems Engineering',
      fr: 'Ingénierie en Systèmes Informatiques',
    },
    institution: 'Universidad de El Salvador',
    period: 'Dic 2015',
  },
];

/**
 * CERTIFICACIONES
 * INSTRUCCIONES: Cada objeto representa una certificación o curso relevante.
 */
const CERTIFICATIONS = [
  { icon: '🏅', name: 'Cloud Digital Leader Certification', institution: 'Google', year: '2024' },
  { icon: '🏅', name: 'Científica de Datos — Bootcamp Data Science', institution: 'Intech MOM Latam', year: '2024' },
  { icon: '🏅', name: 'Preparación para Certificación PMP (35 hrs)', institution: 'Certificacionpm', year: '2021' },
  { icon: '🏅', name: 'Big Data & Business Analytics', institution: 'Data Science Institute Latam', year: '2020' },
  { icon: '🏅', name: 'Diplomado Experto en Business Intelligence', institution: 'Centro Europeo de Postgrado (CEUPE)', year: '2018' },
  { icon: '🏅', name: 'Scrum Master (ID: 577652)', institution: 'SCRUMstudy', year: '2017' },
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
    catIcon: '🤖',
    category: { es: 'IA & Automatización', en: 'AI & Automation', fr: 'IA & Automatisation' },
    type: 'bars',
    items: [
      { name: 'Prompt Engineering & AI Tools (ChatGPT, Claude, Copilot)', level: 90 },
      { name: 'Automatización de procesos con IA', level: 85 },
      { name: 'Análisis de requerimientos asistido por IA', level: 88 },
      { name: 'Power Automate / n8n / Make', level: 70 },
    ],
  },
  {
    catIcon: '📊',
    category: { es: 'Datos & Reporting', en: 'Data & Reporting', fr: 'Données & Reporting' },
    type: 'bars',
    items: [
      { name: 'Power BI', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Google Looker Studio', level: 75 },
      { name: 'Excel / Google Sheets', level: 90 },
    ],
  },
  {
    catIcon: '🔄',
    category: { es: 'Metodologías Ágiles', en: 'Agile Methodologies', fr: 'Méthodologies Agiles' },
    type: 'tags',
    tags: ['Scrum', 'Kanban', 'SAFe', 'OKRs', 'User Story Mapping', 'Design Thinking', 'Lean', 'Sprint Planning', 'Backlog Refinement'],
  },
  {
    catIcon: '🛠️',
    category: { es: 'Herramientas & Gestión', en: 'Tools & Management', fr: 'Outils & Gestion' },
    type: 'tags',
    tags: ['Jira', 'Confluence', 'Open Project', 'Notion', 'Miro', 'Figma', 'Slack', 'Google Drive', 'GitHub', 'Microsoft Office'],
  },
  {
    catIcon: '🌍',
    category: { es: 'Idiomas', en: 'Languages', fr: 'Langues' },
    type: 'bars',
    items: [
      { name: 'Español', level: 100 },
      { name: 'Inglés', level: 75 },
      { name: 'Francés', level: 50 },
    ],
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
    emoji: '🌐',
    title: {
      es: 'Portal PEI — Migración El Salvador',
      en: 'PEI Portal — El Salvador Migration',
      fr: 'Portail PEI — Migration El Salvador',
    },
    description: {
      es: 'Plataforma web gubernamental para el Programa de Emigrantes de El Salvador. Lideré el rol de Product Owner & Scrum Master, gestionando el ciclo de vida completo del producto para la Dirección General de Migración y Extranjería.',
      en: 'Government web platform for El Salvador\'s Emigrant Program. Led the Product Owner & Scrum Master role, managing the complete product lifecycle for the General Directorate of Migration.',
      fr: 'Plateforme web gouvernementale pour le Programme des Émigrés d\'El Salvador. Rôle de Product Owner & Scrum Master, gestion du cycle de vie complet du produit pour la Direction Générale de Migration.',
    },
    stack: ['Product Ownership', 'Scrum', 'Gestión de Stakeholders', 'Roadmap'],
    role: { es: 'Product Owner / Scrum Master', en: 'Product Owner / Scrum Master', fr: 'Product Owner / Scrum Master' },
    demoUrl: 'https://elsalvadorpei.migracion.gob.sv/',
    codeUrl: null,
  },
  {
    emoji: '🛂',
    title: {
      es: 'Pasaporte en Línea — Migración El Salvador',
      en: 'Online Passport — El Salvador Migration',
      fr: 'Passeport en Ligne — Migration El Salvador',
    },
    description: {
      es: 'Sistema en línea para trámite de pasaportes salvadoreños. Coordiné el desarrollo y despliegue como PO/SM, incluyendo tableros de información migratoria y capacitación a usuarios institucionales.',
      en: 'Online system for Salvadoran passport processing. Coordinated development and deployment as PO/SM, including migration information dashboards and institutional user training.',
      fr: 'Système en ligne pour le traitement des passeports salvadoriens. Coordination du développement et déploiement en tant que PO/SM, incluant des tableaux de bord d\'information migratoire.',
    },
    stack: ['Product Ownership', 'Scrum', 'Dashboards', 'Capacitación'],
    role: { es: 'Product Owner / Scrum Master', en: 'Product Owner / Scrum Master', fr: 'Product Owner / Scrum Master' },
    demoUrl: 'https://pasaporteenlinea.migracion.gob.sv',
    codeUrl: null,
  },
  {
    emoji: '✈️',
    title: {
      es: 'Proyecto SimpliFy — Avianca Holdings',
      en: 'SimpliFy Project — Avianca Holdings',
      fr: 'Projet SimpliFy — Avianca Holdings',
    },
    description: {
      es: 'Desarrollo e implementación de 60 reportes de negocio para Avianca Holdings dentro del proyecto SimpliFy. Gestioné el análisis de procesos funcionales, historias de usuario y ceremonias Scrum en un entorno de alta complejidad.',
      en: 'Development and implementation of 60 business reports for Avianca Holdings within the SimpliFy project. Managed functional process analysis, user stories and Scrum ceremonies in a high-complexity environment.',
      fr: 'Développement et implémentation de 60 rapports métier pour Avianca Holdings dans le cadre du projet SimpliFy. Gestion de l\'analyse des processus fonctionnels, des user stories et des cérémonies Scrum.',
    },
    stack: ['Scrum', 'Análisis de Negocio', 'Reporting', 'User Stories'],
    role: { es: 'Product Owner / Scrum Master', en: 'Product Owner / Scrum Master', fr: 'Product Owner / Scrum Master' },
    demoUrl: 'https://simple.sv/',
    codeUrl: null,
  },
  {
    emoji: '🤖',
    title: {
      es: 'Aplicación Web B2B con IA — Promesa Latina',
      en: 'AI-Powered B2B Web App — Promesa Latina',
      fr: 'Application Web B2B IA — Promesa Latina',
    },
    description: {
      es: 'Lideré el análisis, diseño, desarrollo e implementación de una aplicación web B2B utilizando herramientas de inteligencia artificial. Automatización de procesos operativos clave y gestión ágil del ciclo de vida del producto.',
      en: 'Led the analysis, design, development and implementation of a B2B web application using artificial intelligence tools. Automation of key operational processes and agile product lifecycle management.',
      fr: 'Direction de l\'analyse, conception, développement et implémentation d\'une application web B2B utilisant des outils d\'IA. Automatisation des processus opérationnels clés et gestion agile du cycle de vie du produit.',
    },
    stack: ['AI Tools', 'Automatización', 'Análisis de Negocio', 'Scrum', 'Product Management'],
    role: { es: 'AI Business Analyst / AI Automation Analyst', en: 'AI Business Analyst / AI Automation Analyst', fr: 'Analyste Métier IA / Analyste Automatisation IA' },
    demoUrl: null,
    codeUrl: null,
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
          ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver demo de ${t(project.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            ${lang.proj_demo}
          </a>` : ''}
          ${project.codeUrl ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver código de ${t(project.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            ${lang.proj_code}
          </a>` : ''}
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
   7. FORMULARIO DE CONTACTO — FORMSPREE (ENVÍO REAL)
   ============================================================================
   INSTRUCCIONES DE CONFIGURACIÓN (una sola vez):
   1. Ve a https://formspree.io y crea una cuenta gratuita con eroxanacruz@gmail.com
   2. Haz clic en "New Form" → dale un nombre (ej: "Portafolio Eve")
   3. Copia el ID que aparece en la URL, tiene este formato: xyzabcde
   4. Reemplaza FORMSPREE_ID en la línea de abajo con tu ID real
   5. Formspree enviará cada mensaje directo a eroxanacruz@gmail.com ✅
   ============================================================================ */

const FORMSPREE_ID = 'xjgdjkwk'; // PortafolioEve — eroxanacruz@gmail.com
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

/**
 * Valida y envía el formulario a Formspree.
 * Los mensajes llegan directamente a eroxanacruz@gmail.com.
 */
function initContactForm() {
  const submitBtn = document.getElementById('form-submit');
  const feedback  = document.getElementById('form-feedback');
  if (!submitBtn || !feedback) return;

  submitBtn.addEventListener('click', async () => {
    const nameEl    = document.getElementById('name');
    const emailEl   = document.getElementById('email');
    const messageEl = document.getElementById('message');

    const name    = nameEl?.value.trim()    || '';
    const email   = emailEl?.value.trim()   || '';
    const message = messageEl?.value.trim() || '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lang = TRANSLATIONS[currentLang];

    // Resetear feedback
    feedback.className = '';
    feedback.style.display = 'none';

    // Validación del lado del cliente
    if (!name || !emailRegex.test(email) || message.length < 10) {
      feedback.textContent   = lang.form_error;
      feedback.className     = 'error';
      feedback.style.display = 'block';
      return;
    }

    // Estado de carga
    submitBtn.disabled    = true;
    submitBtn.textContent = '⏳ Enviando...';

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // ✅ Éxito real — mensaje enviado a eroxanacruz@gmail.com
        feedback.textContent   = lang.form_success;
        feedback.className     = 'success';
        feedback.style.display = 'block';

        // Limpiar campos
        if (nameEl)    nameEl.value    = '';
        if (emailEl)   emailEl.value   = '';
        if (messageEl) messageEl.value = '';
      } else {
        // ⚠️ Error de Formspree (quota, ID incorrecto, etc.)
        const data = await response.json();
        throw new Error(data?.error || 'Error al enviar');
      }
    } catch (err) {
      feedback.textContent   = '⚠ No se pudo enviar el mensaje. Por favor escríbeme directamente a eroxanacruz@gmail.com';
      feedback.className     = 'error';
      feedback.style.display = 'block';
      console.error('Formspree error:', err);
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = lang.form_submit;
    }
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
