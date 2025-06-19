
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'it' | 'en' | 'de' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contatto',
    
    // Hero Section
    'hero.title': 'Alessandro Stella',
    'hero.subtitle': 'Business Consultant & UI/UX Designer',
    'hero.cta': 'Scopri di più',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.text1': 'Sono uno sviluppatore full-stack appassionato con oltre 5 anni di esperienza nella creazione di soluzioni digitali che fanno la differenza. Mi specializzo in tecnologie web moderne e ho un occhio attento per il design dell\'esperienza utente.',
    'about.text2': 'Quando non sto programmando, mi troverai ad esplorare nuove tecnologie, contribuire a progetti open-source, o fare escursioni in montagna.',
    
    // Services Section
    'services.title': 'Cosa Posso Fare Per Te',
    'services.subtitle': 'Dal concept al deployment, fornisco soluzioni complete che guidano la crescita del business e offrono esperienze utente eccezionali.',
    'services.fullstack.title': 'Sviluppo Full-Stack',
    'services.fullstack.desc': 'Applicazioni web personalizzate costruite con tecnologie moderne come React, TypeScript e Node.js.',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'Design centrato sull\'utente che converte i visitatori in clienti con interfacce intuitive.',
    'services.consulting.title': 'Consulenza Aziendale',
    'services.consulting.desc': 'Guida strategica per aiutare la tua azienda a sfruttare la tecnologia per crescita ed efficienza.',
    'services.performance.title': 'Ottimizzazione Prestazioni',
    'services.performance.desc': 'Accelera le tue applicazioni e migliora l\'esperienza utente con tecniche di ottimizzazione avanzate.',
    'services.training.title': 'Formazione Team',
    'services.training.desc': 'Migliora le competenze del tuo team di sviluppo con best practices moderne e tecnologie all\'avanguardia.',
    'services.mvp.title': 'Sviluppo MVP',
    'services.mvp.desc': 'Prototipazione e sviluppo rapido per validare le tue idee di business velocemente ed efficacemente.',
    
    // Skills Section
    'skills.title': 'Competenze & Expertise',
    
    // Projects Section
    'projects.title': 'Progetti in Evidenza',
    'projects.subtitle': 'Una selezione dei miei lavori recenti che mostrano le mie capacità in sviluppo web, design e consulenza aziendale.',
    'projects.view': 'Visualizza Progetto',
    'projects.code': 'Vedi Codice',
    
    // Newsletter Section
    'newsletter.title': 'Rimani Aggiornato',
    'newsletter.subtitle': 'Ricevi approfondimenti su sviluppo web, consulenza aziendale e le ultime tendenze tecnologiche direttamente nella tua casella di posta.',
    'newsletter.placeholder': 'Inserisci la tua email',
    'newsletter.button': 'Iscriviti',
    'newsletter.loading': 'Iscrizione...',
    'newsletter.privacy': 'Nessuno spam, puoi cancellarti in qualsiasi momento. La tua email è al sicuro con me.',
    'newsletter.success': 'Iscrizione completata!',
    'newsletter.success.desc': 'Riceverai aggiornamenti sui nuovi progetti e approfondimenti.',
    
    // Contact Section
    'contact.title': 'Lavoriamo Insieme',
    'contact.subtitle': 'Pronto a dare vita alle tue idee? Che tu abbia bisogno di un nuovo sito web, voglia ottimizzare la tua applicazione esistente, o necessiti di una guida strategica, sono qui per aiutarti.',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.subject': 'Oggetto',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia Messaggio',
    'contact.sending': 'Invio...',
    'contact.success': 'Messaggio inviato!',
    'contact.success.desc': 'Ti risponderò il prima possibile.',
    
    // Setup Instructions
    'setup.title': 'Configurazione Required per i Moduli',
    'setup.contact': 'Per il modulo di contatto:',
    'setup.newsletter': 'Per la newsletter:',
    
    // Accessibility
    'accessibility.dark': 'Attiva modalità scura',
    'accessibility.light': 'Attiva modalità chiara',
    'accessibility.menu.open': 'Apri menu',
    'accessibility.menu.close': 'Chiudi menu',
    'accessibility.section': 'Vai alla sezione',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Alessandro Stella',
    'hero.subtitle': 'Business Consultant & UI/UX Designer',
    'hero.cta': 'Find out more',
    
    // About Section
    'about.title': 'About Me',
    'about.text1': 'I\'m a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and have a keen eye for user experience design.',
    'about.text2': 'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or hiking in the mountains.',
    
    // Services Section
    'services.title': 'What I Can Do For You',
    'services.subtitle': 'From concept to deployment, I provide comprehensive solutions that drive business growth and deliver exceptional user experiences.',
    'services.fullstack.title': 'Full-Stack Development',
    'services.fullstack.desc': 'Custom web applications built with modern technologies like React, TypeScript, and Node.js.',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'User-centered design that converts visitors into customers with intuitive interfaces.',
    'services.consulting.title': 'Business Consulting',
    'services.consulting.desc': 'Strategic guidance to help your business leverage technology for growth and efficiency.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Speed up your applications and improve user experience with advanced optimization techniques.',
    'services.training.title': 'Team Training',
    'services.training.desc': 'Upskill your development team with modern best practices and cutting-edge technologies.',
    'services.mvp.title': 'MVP Development',
    'services.mvp.desc': 'Rapid prototyping and development to validate your business ideas quickly and efficiently.',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my recent work showcasing my abilities in web development, design, and business consulting.',
    'projects.view': 'View Project',
    'projects.code': 'View Code',
    
    // Newsletter Section
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Get insights on web development, business consulting, and the latest tech trends delivered straight to your inbox.',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Subscribe',
    'newsletter.loading': 'Subscribing...',
    'newsletter.privacy': 'No spam, unsubscribe at any time. Your email is safe with me.',
    'newsletter.success': 'Successfully subscribed!',
    'newsletter.success.desc': 'You\'ll receive updates on new projects and insights.',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to bring your ideas to life? Whether you need a new website, want to optimize your existing application, or need strategic guidance, I\'m here to help.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent!',
    'contact.success.desc': 'I\'ll get back to you as soon as possible.',
    
    // Setup Instructions
    'setup.title': 'Module Configuration Required',
    'setup.contact': 'For the contact form:',
    'setup.newsletter': 'For the newsletter:',
    
    // Accessibility
    'accessibility.dark': 'Enable dark mode',
    'accessibility.light': 'Enable light mode',
    'accessibility.menu.open': 'Open menu',
    'accessibility.menu.close': 'Close menu',
    'accessibility.section': 'Go to section',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Alessandro Stella',
    'hero.subtitle': 'Unternehmensberater & UI/UX Designer',
    'hero.cta': 'Mehr erfahren',
    
    // About Section
    'about.title': 'Über Mich',
    'about.text1': 'Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit über 5 Jahren Erfahrung in der Erstellung digitaler Lösungen, die einen Unterschied machen. Ich spezialisiere mich auf moderne Web-Technologien und habe ein geschultes Auge für User Experience Design.',
    'about.text2': 'Wenn ich nicht programmiere, erkunde ich neue Technologien, trage zu Open-Source-Projekten bei oder wandere in den Bergen.',
    
    // Services Section
    'services.title': 'Was Ich Für Sie Tun Kann',
    'services.subtitle': 'Von der Konzeption bis zur Bereitstellung biete ich umfassende Lösungen, die das Geschäftswachstum vorantreiben und außergewöhnliche Benutzererfahrungen liefern.',
    'services.fullstack.title': 'Full-Stack-Entwicklung',
    'services.fullstack.desc': 'Maßgeschneiderte Webanwendungen mit modernen Technologien wie React, TypeScript und Node.js.',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'Benutzerzentriertes Design, das Besucher mit intuitiven Schnittstellen in Kunden verwandelt.',
    'services.consulting.title': 'Unternehmensberatung',
    'services.consulting.desc': 'Strategische Beratung, um Ihrem Unternehmen zu helfen, Technologie für Wachstum und Effizienz zu nutzen.',
    'services.performance.title': 'Performance-Optimierung',
    'services.performance.desc': 'Beschleunigen Sie Ihre Anwendungen und verbessern Sie die Benutzererfahrung mit fortgeschrittenen Optimierungstechniken.',
    'services.training.title': 'Team-Schulung',
    'services.training.desc': 'Verbessern Sie die Fähigkeiten Ihres Entwicklungsteams mit modernen Best Practices und neuesten Technologien.',
    'services.mvp.title': 'MVP-Entwicklung',
    'services.mvp.desc': 'Schnelle Prototyperstellung und Entwicklung zur effizienten Validierung Ihrer Geschäftsideen.',
    
    // Skills Section
    'skills.title': 'Fähigkeiten & Expertise',
    
    // Projects Section
    'projects.title': 'Ausgewählte Projekte',
    'projects.subtitle': 'Eine Auswahl meiner aktuellen Arbeiten, die meine Fähigkeiten in Webentwicklung, Design und Unternehmensberatung zeigen.',
    'projects.view': 'Projekt Ansehen',
    'projects.code': 'Code Ansehen',
    
    // Newsletter Section
    'newsletter.title': 'Bleiben Sie Auf Dem Laufenden',
    'newsletter.subtitle': 'Erhalten Sie Einblicke in Webentwicklung, Unternehmensberatung und die neuesten Tech-Trends direkt in Ihr Postfach.',
    'newsletter.placeholder': 'E-Mail eingeben',
    'newsletter.button': 'Abonnieren',
    'newsletter.loading': 'Abonniere...',
    'newsletter.privacy': 'Kein Spam, jederzeit abbestellbar. Ihre E-Mail ist bei mir sicher.',
    'newsletter.success': 'Erfolgreich abonniert!',
    'newsletter.success.desc': 'Sie erhalten Updates zu neuen Projekten und Einblicken.',
    
    // Contact Section
    'contact.title': 'Lassen Sie Uns Zusammenarbeiten',
    'contact.subtitle': 'Bereit, Ihre Ideen zum Leben zu erwecken? Ob Sie eine neue Website benötigen, Ihre bestehende Anwendung optimieren möchten oder strategische Beratung brauchen, ich bin hier um zu helfen.',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.subject': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht Senden',
    'contact.sending': 'Sende...',
    'contact.success': 'Nachricht gesendet!',
    'contact.success.desc': 'Ich melde mich so schnell wie möglich bei Ihnen.',
    
    // Setup Instructions
    'setup.title': 'Modulkonfiguration Erforderlich',
    'setup.contact': 'Für das Kontaktformular:',
    'setup.newsletter': 'Für den Newsletter:',
    
    // Accessibility
    'accessibility.dark': 'Dunklen Modus aktivieren',
    'accessibility.light': 'Hellen Modus aktivieren',
    'accessibility.menu.open': 'Menü öffnen',
    'accessibility.menu.close': 'Menü schließen',
    'accessibility.section': 'Zum Abschnitt gehen',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Alessandro Stella',
    'hero.subtitle': 'Consultant Business & Designer UI/UX',
    'hero.cta': 'En savoir plus',
    
    // About Section
    'about.title': 'À Propos De Moi',
    'about.text1': 'Je suis un développeur full-stack passionné avec plus de 5 ans d\'expérience dans la création de solutions numériques qui font la différence. Je me spécialise dans les technologies web modernes et j\'ai un œil attentif pour le design d\'expérience utilisateur.',
    'about.text2': 'Quand je ne code pas, vous me trouverez en train d\'explorer de nouvelles technologies, de contribuer à des projets open-source, ou de faire de la randonnée en montagne.',
    
    // Services Section
    'services.title': 'Ce Que Je Peux Faire Pour Vous',
    'services.subtitle': 'Du concept au déploiement, je fournis des solutions complètes qui stimulent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.',
    'services.fullstack.title': 'Développement Full-Stack',
    'services.fullstack.desc': 'Applications web personnalisées construites avec des technologies modernes comme React, TypeScript et Node.js.',
    'services.design.title': 'Design UI/UX',
    'services.design.desc': 'Design centré sur l\'utilisateur qui convertit les visiteurs en clients avec des interfaces intuitives.',
    'services.consulting.title': 'Conseil Business',
    'services.consulting.desc': 'Orientation stratégique pour aider votre entreprise à tirer parti de la technologie pour la croissance et l\'efficacité.',
    'services.performance.title': 'Optimisation Performance',
    'services.performance.desc': 'Accélérez vos applications et améliorez l\'expérience utilisateur avec des techniques d\'optimisation avancées.',
    'services.training.title': 'Formation Équipe',
    'services.training.desc': 'Perfectionnez votre équipe de développement avec les meilleures pratiques modernes et les technologies de pointe.',
    'services.mvp.title': 'Développement MVP',
    'services.mvp.desc': 'Prototypage rapide et développement pour valider vos idées business rapidement et efficacement.',
    
    // Skills Section
    'skills.title': 'Compétences & Expertise',
    
    // Projects Section
    'projects.title': 'Projets En Vedette',
    'projects.subtitle': 'Une sélection de mes travaux récents montrant mes capacités en développement web, design et conseil business.',
    'projects.view': 'Voir Projet',
    'projects.code': 'Voir Code',
    
    // Newsletter Section
    'newsletter.title': 'Restez Informé',
    'newsletter.subtitle': 'Recevez des informations sur le développement web, le conseil business et les dernières tendances tech directement dans votre boîte mail.',
    'newsletter.placeholder': 'Entrez votre email',
    'newsletter.button': 'S\'abonner',
    'newsletter.loading': 'Abonnement...',
    'newsletter.privacy': 'Pas de spam, désabonnement à tout moment. Votre email est en sécurité avec moi.',
    'newsletter.success': 'Abonnement réussi!',
    'newsletter.success.desc': 'Vous recevrez des mises à jour sur les nouveaux projets et insights.',
    
    // Contact Section
    'contact.title': 'Travaillons Ensemble',
    'contact.subtitle': 'Prêt à donner vie à vos idées? Que vous ayez besoin d\'un nouveau site web, souhaitiez optimiser votre application existante, ou ayez besoin de conseils stratégiques, je suis là pour vous aider.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer Message',
    'contact.sending': 'Envoi...',
    'contact.success': 'Message envoyé!',
    'contact.success.desc': 'Je vous répondrai dès que possible.',
    
    // Setup Instructions
    'setup.title': 'Configuration Module Requise',
    'setup.contact': 'Pour le formulaire de contact:',
    'setup.newsletter': 'Pour la newsletter:',
    
    // Accessibility
    'accessibility.dark': 'Activer mode sombre',
    'accessibility.light': 'Activer mode clair',
    'accessibility.menu.open': 'Ouvrir menu',
    'accessibility.menu.close': 'Fermer menu',
    'accessibility.section': 'Aller à la section',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
