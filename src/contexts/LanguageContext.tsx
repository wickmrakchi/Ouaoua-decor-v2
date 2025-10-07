import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // ProductGallery
    underDevelopment: 'Under Development',
    underDevelopmentDesc: 'This page is currently under development. Please check back later.',
    progressStatus: 'Progress: 80% complete',

    // Product
    all: 'All',
    kitchen: 'Kitchen',
    bedroom: 'Bedroom',
    salonm: 'Moroccan Salons',
    closet: 'Closet',
    living: 'Living',
    showcase: 'Showcase',
    titlepage: 'Product Gallery',
    productGalleryIntro: 'Explore our exclusive collection of custom interior designs and furniture pieces. Each product showcases our commitment to quality craftsmanship and innovative design.',
    view: 'View',

    back: 'Back to Products',
    share: 'Share',
    videogallery: 'Video Gallery',
    viewontiktok: 'View on TikTok',
    productDetails: 'Product Details',
    Category: 'Category',
    ProductID: 'Product ID',
    Description: 'Description',
    titlecontact: 'Interested in This Design?',
    descriptioncontact: 'Contact us for a personalized quote and consultation',
    contactus: 'Contact Us',

    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    products: 'Products',
    contact: 'Contact',

    // Home page
    heroTitle: 'Decor Ouaoua - 30+ Years of Moroccan Craftsmanship',
    heroSubtitle: 'Transform your space with our expert interior design and custom furniture solutions. Serving Agadir, Marrakech, Casablanca, and beyond.',
    getQuote: 'Get Free Quote',
    whyChooseUs: 'Why Choose Decor Ouaoua?',
    experience: '30+ Years Experience',
    experienceDesc: 'Over three decades of expertise in Moroccan interior design and custom furniture.',
    customMade: '100% Custom Made',
    customMadeDesc: 'Every piece is crafted to your specific needs and preferences.',
    quality: 'Premium Quality',
    qualityDesc: 'We use only the finest materials and traditional craftsmanship techniques.',
    satisfaction: 'Client Satisfaction',
    satisfactionDesc: 'Our commitment to excellence ensures complete customer satisfaction.',

    // Services
    ourServices: 'Our Services',
    aboutServices: 'Discover our comprehensive range of interior design and custom furniture services, each crafted with over 30 years of expertise and attention to detail.',
    customKitchens: 'Custom Kitchens',
    customKitchensDesc: 'Modern and classic kitchen designs tailored to your lifestyle and space requirements.',
    luxuryBathrooms: 'Luxury Bathrooms',
    luxuryBathroomsDesc: 'Complete bathroom setups with elegant finishes and premium fixtures.',
    bedrooms: 'Bedrooms',
    bedroomsDesc: 'Comfortable and stylish bedroom furniture including beds, wardrobes, and side tables.',
    closets: 'Closets & Dressing Rooms',
    closetsDesc: 'Space-saving and stylish storage solutions for organized living.',
    moroccanSalons: 'Moroccan Salons',
    moroccanSalonsDesc: 'Traditional and modern Moroccan living room designs with authentic touches.',
    storageSolutions: 'Storage Solutions',
    storageSolutionsDesc: 'Custom shelving and furniture solutions for optimal organization.',

    // About
    aboutTitle: 'About Decor Ouaoua',
    aboutContent: 'Founded in 1991, Decor Ouaoua has been a leading name in Moroccan interior design for over 30 years. Based in Agadir, we serve clients across Morocco including Marrakech, Taroudant, Casablanca, and Rabat.',
    ourMission: 'Our Mission',
    missionContent: 'To create beautiful, functional spaces that reflect our clients\' personalities while preserving the rich tradition of Moroccan craftsmanship.',
    aboutTitle1: 'Our Story',
    aboutFt: 'Since our founding in 1991, Decor Ouaoua has been at the forefront of Moroccan interior design, combining traditional craftsmanship with modern aesthetics. Based in the beautiful city of Agadir, we have expanded our services to serve clients across Morocco\'s major cities.',
    aboutSd: 'Our team of skilled artisans and designers work tirelessly to create spaces that are not only beautiful but also functional, reflecting each client\'s unique personality while honoring the rich traditions of Moroccan design.',
    aboutTh: 'Every project we undertake is 100% custom-made, using only the highest quality materials and time-tested techniques passed down through generations of Moroccan craftsmen.',

    // Contact
    contactUs: 'Contact Us',
    getInTouch: 'Get In Touch',
    address: 'Address',
    addressValue: 'Tilila, Agadir, Morocco',
    openingHours: 'Opening Hours',
    mondayFriday: 'Monday - Friday: 09:30 - 20:30',
    saturday: 'Saturday: 09:30 - 16:30',
    sunday: 'Sunday: Closed',
    followUs: 'Follow Us',

    // Gallery
    ourProjects: 'Our Projects',
    viewProject: 'View Project',

    // Footer
    footerDesc: 'Transforming spaces with authentic Moroccan craftsmanship since 1991.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',

    // Form
    name: 'Name',
    phone: 'Phone',
    object: 'Object',
    email: 'Email ( Optional )',
    message: 'Message',
    sendMessage: 'Send Message',

    // Terms of Service
    termsOfService: 'Terms of Service',
    termsIntro: 'Please read these terms and conditions carefully before using our services.',
    generalTerms: 'General Terms',
    generalTermsContent: 'By engaging Decor Ouaoua for interior design and custom furniture services, you agree to these terms and conditions. Our services are provided based on over 30 years of experience in Moroccan craftsmanship.',
    ourServicesTerms: 'Our Services',
    customDesignTerms: 'All furniture and interior design work is 100% custom-made according to your specifications',
    qualityMaterialsTerms: 'We use only premium quality materials sourced from trusted suppliers',
    installationTerms: 'Professional installation is included in all our furniture and design projects',
    paymentTerms: 'Payment Terms',
    paymentTermsContent: 'Payment schedules are agreed upon during consultation. We require a deposit before starting work, with final payment due upon project completion and client satisfaction.',
    warrantyTerms: 'Warranty',
    warrantyTermsContent: 'All custom furniture comes with a warranty covering craftsmanship defects. The warranty period varies by product type and will be specified in your contract.',
    limitationLiability: 'Limitation of Liability',
    limitationLiabilityContent: 'Decor Ouaoua liability is limited to the value of the services provided. We are not responsible for delays caused by circumstances beyond our control.',
    contactForTerms: 'Contact Us About Terms',
    lastUpdated: 'Last Updated',

    // Privacy Policy
    privacyPolicy: 'Privacy Policy',
    privacyIntro: 'Your privacy is important to us. This policy explains how we handle your information.',
    informationWeCollect: 'Information We Collect',
    informationWeCollectContent: 'We collect only the information necessary to provide our interior design services:',
    contactFormInfo: 'Name, email, and message when you contact us through our website',
    whatsappCommunication: 'Phone number and messages when you contact us via WhatsApp',
    projectConsultation: 'Project details and preferences during consultations',
    howWeUseInfo: 'How We Use Your Information',
    respondToInquiries: 'Respond to your inquiries and provide quotes',
    provideQuotes: 'Prepare custom design proposals and pricing',
    scheduleConsultations: 'Schedule consultations and site visits',
    improveServices: 'Improve our services based on your feedback',
    thirdPartyServices: 'Third-Party Services',
    thirdPartyServicesContent: 'We use the following external services to communicate with clients:',
    whatsappPrivacy: 'Direct messaging for quick communication and quotes',
    instagramPrivacy: 'Social media platform to showcase our work',
    tiktokPrivacy: 'Social media platform for design inspiration',
    dataSecurity: 'Data Security',
    dataSecurityContent: 'We protect your personal information through secure communication channels and do not store sensitive data unnecessarily. All project information is kept confidential.',
    whatWeDontDo: 'What We Don\'t Do',
    noCookies: 'We do not use cookies or tracking technologies on our website',
    noTracking: 'We do not track your browsing behavior or collect analytics data',
    noDataSelling: 'We never sell, rent, or share your personal information with third parties',
    noSpam: 'We do not send unsolicited marketing emails or messages',
    yourRights: 'Your Rights',
    yourRightsContent: 'You have the right to request information about what personal data we have about you, request corrections, or ask us to delete your information at any time.',
    contactForPrivacy: 'Contact Us About Privacy',

    // copyrghit
    copy: 'Decor Ouaoua. All rights reserved.',

    // Service features
    kitchenFeatures: ['Custom cabinetry', 'Premium countertops', 'Modern appliances', 'Space optimization'],
    bathroomFeatures: ['Luxury fixtures', 'Custom vanities', 'Premium tiles', 'Lighting design'],
    bedroomFeatures: ['Custom wardrobes', 'Comfortable beds', 'Side tables', 'Storage solutions'],
    closetFeatures: ['Space optimization', 'Custom shelving', 'Modern hardware', 'Organized layouts'],
    salonFeatures: ['Traditional design', 'Authentic materials', 'Custom seating', 'Decorative elements'],
    storageFeatures: ['Custom shelving', 'Space efficiency', 'Quality materials', 'Functional design']
  },

  fr: {
    // ProductGallery
    underDevelopment: 'En cours de développement',
    underDevelopmentDesc: 'Cette page est en cours de développement. Veuillez revenir plus tard.',
    progressStatus: 'Progression : 80% terminé',

    // Product
    all: 'Tous',
    kitchen: 'Cuisine',
    bedroom: 'Chambre',
    salonm: 'Salons Marocains',
    closet: 'Closet',
    living: 'Salon',
    showcase: 'Vitrine',
    titlepage: 'Galerie de Produits',
    productGalleryIntro: 'Découvrez notre collection exclusive de designs d\'intérieur sur mesure et de pièces de mobilier. Chaque produit met en valeur notre engagement envers un artisanat de qualité et un design innovant.',
    view: 'Voir',

    back: 'Retour aux Produits',
    share: 'Partager',
    videogallery: 'Galerie Vidéo',
    viewontiktok: 'Voir sur TikTok',
    productDetails: 'Détails du Produit',
    Category: 'Catégorie',
    ProductID: 'ID du Produit',
    Description: 'Description',
    titlecontact: 'Intéressé par ce Design?',
    descriptioncontact: 'Contactez-nous pour une estimation personnalisée et une consultation',
    contactus: 'Contactez Nous',

    // Navigation
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    gallery: 'Galerie',
    products: 'Produits',
    contact: 'Contact',

    // Home page
    heroTitle: 'Decor Ouaoua - 30+ Années d\'Artisanat Marocain',
    heroSubtitle: 'Transformez votre espace avec nos solutions expertes de design d\'intérieur et de mobilier sur mesure. Au service d\'Agadir, Marrakech, Casablanca et au-delà.',
    getQuote: 'Devis Gratuit',
    whyChooseUs: 'Pourquoi Choisir Decor Ouaoua?',
    experience: '30+ Années d\'Expérience',
    experienceDesc: 'Plus de trois décennies d\'expertise en design d\'intérieur marocain et mobilier sur mesure.',
    customMade: '100% Sur Mesure',
    customMadeDesc: 'Chaque pièce est conçue selon vos besoins et préférences spécifiques.',
    quality: 'Qualité Premium',
    qualityDesc: 'Nous utilisons uniquement les meilleurs matériaux et techniques artisanales traditionnelles.',
    satisfaction: 'Satisfaction Client',
    satisfactionDesc: 'Notre engagement envers l\'excellence garantit une satisfaction client complète.',

    // Services
    ourServices: 'Nos Services',
    aboutServices: 'Découvrez notre gamme complète de services de design d\'intérieur et de mobilier sur mesure, chacun conçu avec plus de 30 ans d\'expertise et d\'attention aux détails.',
    customKitchens: 'Cuisines Sur Mesure',
    customKitchensDesc: 'Conceptions de cuisines modernes et classiques adaptées à votre style de vie.',
    luxuryBathrooms: 'Salles de Bains Luxueuses',
    luxuryBathroomsDesc: 'Installations complètes de salle de bains avec finitions élégantes.',
    bedrooms: 'Chambres',
    bedroomsDesc: 'Mobilier de chambre confortable et élégant incluant lits, armoires et tables de chevet.',
    closets: 'Placards & Dressings',
    closetsDesc: 'Solutions de rangement élégantes et optimisées pour un mode de vie organisé.',
    moroccanSalons: 'Salons Marocains',
    moroccanSalonsDesc: 'Designs de salon marocain traditionnels et modernes avec touches authentiques.',
    storageSolutions: 'Solutions de Rangement',
    storageSolutionsDesc: 'Étagères sur mesure et solutions de mobilier pour une organisation optimale.',

    // About
    aboutTitle: 'À Propos de Decor Ouaoua',
    aboutContent: 'Fondée en 1991, Decor Ouaoua est un nom leader dans le design d\'intérieur marocain depuis plus de 30 ans. Basée à Agadir, nous servons des clients à travers le Maroc.',
    ourMission: 'Notre Mission',
    missionContent: 'Créer des espaces beaux et fonctionnels qui reflètent la personnalité de nos clients tout en préservant la riche tradition de l\'artisanat marocain.',
    Title1: 'Notre Histoire',
    aboutFt: 'Depuis notre fondation en 1991, Decor Ouaoua a été à la pointe du design intérieur marocain, combinant l\'artisanat traditionnel avec l\'esthétique moderne. Basés dans la belle ville d\'Agadir, nous avons étendu nos services pour servir les clients à travers les principales villes du Maroc.',
    aboutSd: 'Notre équipe d\'artisans et de designers qualifiés travaille sans relâche pour créer des espaces qui sont non seulement beaux mais également fonctionnels, reflétant la personnalité unique de chaque client tout en honorant les riches traditions du design marocain.',
    aboutTh: 'Chaque projet que nous entreprenons est conçu à 100%, en utilisant des matériaux de haute qualité et des techniques éprouvées transmises à travers les générations d\'artisans marocains.',

    // Contact
    contactUs: 'Contactez-Nous',
    getInTouch: 'Entrer en Contact',
    address: 'Adresse',
    addressValue: 'Tilila, Agadir, Maroc',
    openingHours: 'Heures d\'Ouverture',
    mondayFriday: 'Lundi - Vendredi: 09:30 - 20:30',
    saturday: 'Samedi: 09:30 - 16:30',
    sunday: 'Dimanche: Fermé',
    followUs: 'Suivez-Nous',

    // Gallery
    ourProjects: 'Nos Projets',
    viewProject: 'Voir le Projet',

    // Footer
    footerDesc: 'Transformer les espaces avec un artisanat marocain authentique depuis 1991.',
    quickLinks: 'Liens Rapides',
    contactInfo: 'Informations de Contact',

    // Form
    name: 'Nom',
    phone: 'Téléphone',
    object: 'Objet',
    email: 'Email ( Facultatif )',
    message: 'Message',
    sendMessage: 'Envoyer Message',

    // Terms of Service
    termsOfService: 'Conditions d\'Utilisation',
    termsIntro: 'Veuillez lire attentivement ces termes et conditions avant d\'utiliser nos services.',
    generalTerms: 'Conditions Générales',
    generalTermsContent: 'En engageant Decor Ouaoua pour des services de design d\'intérieur et de mobilier sur mesure, vous acceptez ces termes et conditions. Nos services sont fournis sur la base de plus de 30 ans d\'expérience dans l\'artisanat marocain.',
    ourServicesTerms: 'Nos Services',
    customDesignTerms: 'Tous les meubles et travaux de design d\'intérieur sont 100% sur mesure selon vos spécifications',
    qualityMaterialsTerms: 'Nous utilisons uniquement des matériaux de qualité premium provenant de fournisseurs de confiance',
    installationTerms: 'L\'installation professionnelle est incluse dans tous nos projets de mobilier et de design',
    paymentTerms: 'Conditions de Paiement',
    paymentTermsContent: 'Les échéanciers de paiement sont convenus lors de la consultation. Nous exigeons un acompte avant de commencer le travail, le paiement final étant dû à l\'achèvement du projet et à la satisfaction du client.',
    warrantyTerms: 'Garantie',
    warrantyTermsContent: 'Tous les meubles sur mesure sont accompagnés d\'une garantie couvrant les défauts d\'artisanat. La période de garantie varie selon le type de produit et sera spécifiée dans votre contrat.',
    limitationLiability: 'Limitation de Responsabilité',
    limitationLiabilityContent: 'La responsabilité de Decor Ouaoua est limitée à la valeur des services fournis. Nous ne sommes pas responsables des retards causés par des circonstances indépendantes de notre volonté.',
    contactForTerms: 'Nous Contacter à Propos des Conditions',
    lastUpdated: 'Dernière Mise à Jour',

    // Privacy Policy
    privacyPolicy: 'Politique de Confidentialité',
    privacyIntro: 'Votre vie privée est importante pour nous. Cette politique explique comment nous traitons vos informations.',
    informationWeCollect: 'Informations que Nous Collectons',
    informationWeCollectContent: 'Nous collectons uniquement les informations nécessaires pour fournir nos services de design d\'intérieur:',
    contactFormInfo: 'Nom, email et message lorsque vous nous contactez via notre site web',
    whatsappCommunication: 'Numéro de téléphone et messages lorsque vous nous contactez via WhatsApp',
    projectConsultation: 'Détails du projet et préférences lors des consultations',
    howWeUseInfo: 'Comment Nous Utilisons Vos Informations',
    respondToInquiries: 'Répondre à vos demandes et fournir des devis',
    provideQuotes: 'Préparer des propositions de design personnalisées et des prix',
    scheduleConsultations: 'Programmer des consultations et des visites sur site',
    improveServices: 'Améliorer nos services basés sur vos commentaires',
    thirdPartyServices: 'Services Tiers',
    thirdPartyServicesContent: 'Nous utilisons les services externes suivants pour communiquer avec les clients:',
    whatsappPrivacy: 'Messagerie directe pour une communication rapide et des devis',
    instagramPrivacy: 'Plateforme de médias sociaux pour présenter notre travail',
    tiktokPrivacy: 'Plateforme de médias sociaux pour l\'inspiration design',
    dataSecurity: 'Sécurité des Données',
    dataSecurityContent: 'Nous protégeons vos informations personnelles grâce à des canaux de communication sécurisés et ne stockons pas de données sensibles inutilement. Toutes les informations de projet sont gardées confidentielles.',
    whatWeDontDo: 'Ce que Nous Ne Faisons Pas',
    noCookies: 'Nous n\'utilisons pas de cookies ou de technologies de suivi sur notre site web',
    noTracking: 'Nous ne suivons pas votre comportement de navigation ou ne collectons pas de données analytiques',
    noDataSelling: 'Nous ne vendons, ne louons ou ne partageons jamais vos informations personnelles avec des tiers',
    noSpam: 'Nous n\'envoyons pas d\'emails ou de messages marketing non sollicités',
    yourRights: 'Vos Droits',
    yourRightsContent: 'Vous avez le droit de demander des informations sur les données personnelles que nous avons sur vous, demander des corrections, ou nous demander de supprimer vos informations à tout moment.',
    contactForPrivacy: 'Nous Contacter à Propos de la Confidentialité',

    // copyrghit
    copy: 'Décor Ouaoua. Tous droits réservés.',

    // Service features
    kitchenFeatures: ['Armoires sur mesure', 'Plans de travail premium', 'Électroménagers modernes', 'Optimisation d\'espace'],
    bathroomFeatures: ['Accessoires de luxe', 'Meubles-lavabos sur mesure', 'Carrelages premium', 'Design d\'éclairage'],
    bedroomFeatures: ['Armoires sur mesure', 'Lits confortables', 'Tables de chevet', 'Solutions de rangement'],
    closetFeatures: ['Optimisation d\'espace', 'Étagères sur mesure', 'Quincaillerie moderne', 'Aménagements organisés'],
    salonFeatures: ['Design traditionnel', 'Matériaux authentiques', 'Sièges sur mesure', 'Éléments décoratifs'],
    storageFeatures: ['Étagères sur mesure', 'Efficacité d\'espace', 'Matériaux de qualité', 'Design fonctionnel']
  },

  ar: {
    // ProductGallery
    underDevelopment: 'تحت التطوير',
    underDevelopmentDesc: 'هذه الصفحة قيد التطوير حالياً. يرجى العودة لاحقاً.',
    progressStatus: 'التقدم: 80% مكتمل',

    // Product
    all: 'الكل',
    kitchen: 'المطبخ',
    bedroom: 'غرفة النوم',
    salonm: 'الصالونات المغربية',
    closet: 'الخزانة',
    living: 'غرفة المعيشة',
    showcase: 'عرض المنتجات',
    titlepage: 'معرض المنتجات',
    productGalleryIntro: 'استكشف مجموعتنا الحصرية من تصاميم الديكور الداخلي المخصصة وقطع الأثاث. كل منتج يعكس التزامنا بالحرفية عالية الجودة والتصميم المبتكر.',
    view: 'عرض',

    back: 'العودة إلى المنتجات',
    share: 'مشاركة',
    videogallery: 'معرض الفيديو',
    viewontiktok: 'عرض على تيك توك',
    productDetails: 'تفاصيل المنتج',
    Category: 'الفئة',
    ProductID: 'معرف المنتج',
    Description: 'الوصف',
    titlecontact: 'هل أنت مهتم بهذا التصميم؟',
    descriptioncontact: 'اتصل بنا للحصول على عرض سعر واستشارة مخصصة',
    contactus: 'اتصل بنا',

    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عنا',
    services: 'خدماتنا',
    gallery: 'معرض الأعمال',
    products: 'المنتجات',
    contact: 'اتصل بنا',

    // Home page
    heroTitle: 'ديكور واوا - أكثر من 30 عاماً من الحرفية المغربية',
    heroSubtitle: 'حول مساحتك مع حلول التصميم الداخلي والأثاث المخصص الخبيرة لدينا. نخدم أكادير والمراكش والدار البيضاء وما وراءها.',
    getQuote: 'احصل على عرض سعر مجاني',
    whyChooseUs: 'لماذا تختار ديكور واوا؟',
    experience: 'خبرة أكثر من 30 عاماً',
    experienceDesc: 'أكثر من ثلاثة عقود من الخبرة في التصميم الداخلي المغربي والأثاث المخصص.',
    customMade: '100% مصنوع حسب الطلب',
    customMadeDesc: 'كل قطعة مصنوعة حسب احتياجاتك وتفضيلاتك المحددة.',
    quality: 'جودة عالية',
    qualityDesc: 'نستخدم أفضل المواد وتقنيات الحرفية التقليدية فقط.',
    satisfaction: 'رضا العميل',
    satisfactionDesc: 'التزامنا بالتميز يضمن رضا العملاء الكامل.',

    // Services
    ourServices: 'خدماتنا',
    aboutServices: 'اكتشف مجموعتنا الشاملة من خدمات التصميم الداخلي والأثاث المخصص، والتي تم تصميم كل منها بخبرة تزيد عن 30 عامًا والاهتمام بالتفاصيل.',
    customKitchens: 'مطابخ مخصصة',
    customKitchensDesc: 'تصاميم مطابخ حديثة وكلاسيكية مصممة حسب نمط حياتك ومتطلبات المساحة.',
    luxuryBathrooms: 'حمامات فاخرة',
    luxuryBathroomsDesc: 'إعدادات حمامات كاملة مع تشطيبات أنيقة وتجهيزات عالية الجودة.',
    bedrooms: 'غرف النوم',
    bedroomsDesc: 'أثاث غرف نوم مريح وأنيق يشمل الأسرة والخزائن وطاولات جانبية.',
    closets: 'خزائن وغرف ملابس',
    closetsDesc: 'حلول تخزين أنيقة وموفرة للمساحة للعيش المنظم.',
    moroccanSalons: 'صالونات مغربية',
    moroccanSalonsDesc: 'تصاميم غرف معيشة مغربية تقليدية وحديثة مع لمسات أصيلة.',
    storageSolutions: 'حلول التخزين',
    storageSolutionsDesc: 'رفوف مخصصة وحلول أثاث للتنظيم الأمثل.',

    // About
    aboutTitle: 'نبذة عن ديكور واوا',
    aboutContent: 'تأسست عام 1991، ديكور واوا كانت اسماً رائداً في التصميم الداخلي المغربي لأكثر من 30 عاماً. مقرها في أكادير، نخدم العملاء في جميع أنحاء المغرب.',
    ourMission: 'مهمتنا',
    missionContent: 'إنشاء مساحات جميلة وعملية تعكس شخصيات عملائنا مع الحفاظ على التقليد الغني للحرفية المغربية.',
    Title1: 'قصتنا',
    aboutFt: 'منذ تأسيسنا في عام 1991، كانت ديكور واوا في طليعة التصميم الداخلي المغربي، حيث جمعنا بين الحرفية التقليدية والجماليات الحديثة. مقرنا في مدينة أغادير الجميلة، وقد وسعنا خدماتنا لخدمة العملاء في جميع أنحاء المدن الرئيسية المغربية.',
    aboutSd: 'تعمل فريقنا من الحرفيين والمصممين المؤهلين بلا كلل لإنشاء مساحات ليست جميلة فحسب، بل أيضًا عملية، تعكس شخصية كل عميل بشكل فريد مع الحفاظ على التقاليد الغنية للتصميم المغربي.',
    aboutTh: 'كل مشروع نقوم به يتم تصميمه بنسبة 100٪، باستخدام مواد عالية الجودة وتقنيات تم اختبارها عبر أجيال من الحرفيين المغاربة.',

    // Contact
    contactUs: 'اتصل بنا',
    getInTouch: 'تواصل معنا',
    address: 'العنوان',
    addressValue: 'تيليلا، أكادير، المغرب',
    openingHours: 'ساعات العمل',
    mondayFriday: 'الاثنين - الجمعة: 09:30 - 20:30',
    saturday: 'السبت: 09:30 - 16:30',
    sunday: 'الأحد: مغلق',
    followUs: 'تابعنا',

    // Gallery
    ourProjects: 'مشاريعنا',
    viewProject: 'عرض المشروع',

    // Footer
    footerDesc: 'تحويل المساحات بالحرفية المغربية الأصيلة منذ 1991.',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',

    // Form
    name: 'الاسم',
    phone: 'الهاتف',
    object: 'الموضوع',
    email: 'البريد الإلكتروني ( خياري )',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',

    // Terms of Service
    termsOfService: 'شروط الخدمة',
    termsIntro: 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا.',
    generalTerms: 'الشروط العامة',
    generalTermsContent: 'من خلال التعاقد مع ديكور واوا لخدمات التصميم الداخلي والأثاث المخصص، فإنك توافق على هذه الشروط والأحكام. يتم تقديم خدماتنا بناءً على أكثر من 30 عامًا من الخبرة في الحرفية المغربية.',
    ourServicesTerms: 'خدماتنا',
    customDesignTerms: 'جميع الأثاث وأعمال التصميم الداخلي مصنوعة 100% حسب الطلب وفقًا لمواصفاتك',
    qualityMaterialsTerms: 'نستخدم فقط مواد عالية الجودة من موردين موثوقين',
    installationTerms: 'التركيب المهني مشمول في جميع مشاريع الأثاث والتصميم لدينا',
    paymentTerms: 'شروط الدفع',
    paymentTermsContent: 'يتم الاتفاق على جداول الدفع أثناء الاستشارة. نطلب دفعة مقدمة قبل بدء العمل، مع استحقاق الدفعة النهائية عند اكتمال المشروع ورضا العميل.',
    warrantyTerms: 'الضمان',
    warrantyTermsContent: 'جميع الأثاث المخصص يأتي مع ضمان يغطي عيوب الصنعة. فترة الضمان تختلف حسب نوع المنتج وسيتم تحديدها في عقدك.',
    limitationLiability: 'تحديد المسؤولية',
    limitationLiabilityContent: 'مسؤولية ديكور واوا محدودة بقيمة الخدمات المقدمة. نحن لسنا مسؤولين عن التأخير الناجم عن ظروف خارجة عن سيطرتنا.',
    contactForTerms: 'اتصل بنا حول الشروط',
    lastUpdated: 'آخر تحديث',

    // Privacy Policy
    privacyPolicy: 'سياسة الخصوصية',
    privacyIntro: 'خصوصيتك مهمة بالنسبة لنا. تشرح هذه السياسة كيف نتعامل مع معلوماتك.',
    informationWeCollect: 'المعلومات التي نجمعها',
    informationWeCollectContent: 'نجمع فقط المعلومات اللازمة لتقديم خدمات التصميم الداخلي:',
    contactFormInfo: 'الاسم والبريد الإلكتروني والرسالة عندما تتصل بنا عبر موقعنا',
    whatsappCommunication: 'رقم الهاتف والرسائل عندما تتصل بنا عبر واتساب',
    projectConsultation: 'تفاصيل المشروع والتفضيلات أثناء الاستشارات',
    howWeUseInfo: 'كيف نستخدم معلوماتك',
    respondToInquiries: 'الرد على استفساراتك وتقديم عروض الأسعار',
    provideQuotes: 'إعداد مقترحات التصميم المخصصة والأسعار',
    scheduleConsultations: 'جدولة الاستشارات والزيارات الميدانية',
    improveServices: 'تحسين خدماتنا بناءً على ملاحظاتك',
    thirdPartyServices: 'خدمات الطرف الثالث',
    thirdPartyServicesContent: 'نستخدم الخدمات الخارجية التالية للتواصل مع العملاء:',
    whatsappPrivacy: 'المراسلة المباشرة للتواصل السريع وعروض الأسعار',
    instagramPrivacy: 'منصة وسائل التواصل الاجتماعي لعرض أعمالنا',
    tiktokPrivacy: 'منصة وسائل التواصل الاجتماعي للإلهام التصميمي',
    dataSecurity: 'أمان البيانات',
    dataSecurityContent: 'نحمي معلوماتك الشخصية من خلال قنوات اتصال آمنة ولا نخزن البيانات الحساسة دون داع. جميع معلومات المشروع تُحفظ سرية.',
    whatWeDontDo: 'ما لا نفعله',
    noCookies: 'لا نستخدم ملفات تعريف الارتباط أو تقنيات التتبع على موقعنا',
    noTracking: 'لا نتتبع سلوك التصفح الخاص بك أو نجمع بيانات التحليلات',
    noDataSelling: 'لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة أبدًا',
    noSpam: 'لا نرسل رسائل بريد إلكتروني أو رسائل تسويقية غير مرغوب فيها',
    yourRights: 'حقوقك',
    yourRightsContent: 'لديك الحق في طلب معلومات حول البيانات الشخصية التي لدينا عنك، أو طلب التصحيحات، أو طلب حذف معلوماتك في أي وقت.',
    contactForPrivacy: 'اتصل بنا حول الخصوصية',

    // copyrghit
    copy: 'ديكور أووا. جميع الحقوق محفوظة.',

    // Service features
    kitchenFeatures: ['خزائن مخصصة', 'أسطح عمل فاخرة', 'أجهزة حديثة', 'تحسين المساحة'],
    bathroomFeatures: ['تجهيزات فاخرة', 'خزائن مخصصة', 'بلاط فاخر', 'تصميم إضاءة'],
    bedroomFeatures: ['خزائن مخصصة', 'أسرة مريحة', 'طاولات جانبية', 'حلول تخزين'],
    closetFeatures: ['تحسين المساحة', 'رفوف مخصصة', 'عتاد حديث', 'تخطيطات منظمة'],
    salonFeatures: ['تصميم تقليدي', 'مواد أصيلة', 'مقاعد مخصصة', 'عناصر زخرفية'],
    storageFeatures: ['رفوف مخصصة', 'كفاءة المساحة', 'مواد عالية الجودة', 'تصميم وظيفي']
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
