/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• DATA â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about-us' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
  { label: 'Interio', href: '#mass-interio' },
];

export const TICKER_ITEMS = [
  'Residential', 'âœ¦', 'Commercial', 'âœ¦', 'Cultural', 'âœ¦', 'Interiors', 'âœ¦',
  'Execution', 'âœ¦', 'Structural Integrity', 'âœ¦', 'Precision', 'âœ¦', 'Est. 2018',
  'Residential', 'âœ¦', 'Commercial', 'âœ¦', 'Cultural', 'âœ¦', 'Interiors', 'âœ¦',
  'Execution', 'âœ¦', 'Structural Integrity', 'âœ¦', 'Precision', 'âœ¦', 'Est. 2018',
];

export const EXPERTISE = [
  {
    title: 'Residential Building',
    body: "At MASS Developers, we specialize in constructing high-quality residential buildings that cater to the diverse needs and preferences of our clients. Whether it's a single-family home, an apartment complex, or a gated community, we are committed to delivering spaces that are not just structurally sound but also aesthetically pleasing and functional.",
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Commercial Building',
    body: 'Our expertise extends to the construction of commercial buildings, including office complexes, retail outlets, industrial facilities, and more. We understand the unique requirements of commercial projects and work closely with our clients to deliver spaces that meet their business objectives while adhering to strict quality and safety standards.',
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Turnkey Work',
    body: 'As a full-service construction firm, we offer turnkey solutions to streamline the building process for our clients. From conceptualization and design to construction and final handover, we take care of every aspect of the project, ensuring a seamless and hassle-free experience for our clients.',
    bg: '/turnkey.webp',
  },
  {
    title: 'Renovation Work',
    body: 'Whether it\'s revitalizing an existing space or restoring a historic building, we have the expertise and experience to handle renovation projects of all sizes and complexities. Our team of skilled professionals works diligently to transform outdated or dilapidated structures into modern, functional, and visually appealing spaces.',
    bg: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Interior Work',
    body: "At MASS Developers, we understand that the interior of a building plays a crucial role in defining its overall ambiance and functionality. That's why we offer comprehensive interior design and fit-out services to enhance the aesthetics and usability of our clients' spaces. From space planning and material selection to furniture installation and finishing touches, we ensure that every aspect of the interior design aligns with our clients' vision and requirements.",
    bg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
  },
];

export const PROJECTS = [
  {
    id: 'bektash-turkish-cafe',
    title: 'Bektash Turkish Cafe',
    label: 'Project 001 / 2024',
    location: 'Hospitality / Kakkanad',
    bg: 'url("/bektash-3.webp") center/cover no-repeat',
    heroImage: '/bektash-3.webp',
    placeholder: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
    description: 'Bektash is a culinary sanctuary where traditional Turkish charm meets minimalist architectural precision. Located in the heart of Kakkanad, the space features intricate textures, warm ambient lighting, and a layout designed for intimate social connection. Every corner of the cafe is a dialogue between heritage and contemporary luxury.',
    specifications: [
      { label: 'Type', value: 'Turkish Cafe' },
      { label: 'Area', value: '2,800 Sqft' },
      { label: 'Location', value: 'Kakkanad, Ernakulam' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      '/bektash-1.webp',
      '/bektash-2.webp',
      '/bektash-3.webp',
      '/bektash-4.webp',
      '/bektash-5.webp',
      '/bektash-6.webp',
      '/bektash-7.webp',
      '/bektash-8.webp',
      '/bektash-9.webp',
      '/bektash-10.webp',
      '/bektash-11.webp',
      '/bektash-12.webp',
      '/bektash-13.webp',
      '/bektash-14.webp',
    ]
  },
  {
    id: 'siyad-residence',
    title: "Mr. Siyad's Residence",
    label: 'Project 002 / 2024',
    location: 'Residential / Fort Kochi',
    bg: 'url("/siyad-1.webp") center/cover no-repeat',
    heroImage: '/siyad-1.webp',
    placeholder: 'linear-gradient(135deg, #111 0%, #333 100%)',
    description: 'A contemporary 4BHK home designed for Mr. Siyad at Fort Kochi, Ernakulam. Built on a compact 2.5 cents plot with a total area of 1442 sqft, this home showcases clean lines, modern detailing, and efficient planningâ€”a perfect blend of style, comfort, and smart space utilization.',
    specifications: [
      { label: 'Client', value: 'Mr. Siyad' },
      { label: 'Area', value: '1442 Sqft (2.5 cents)' },
      { label: 'Location', value: 'Fort Kochi, Ernakulam' },
      { label: 'Status', value: 'Designed' }
    ],
    gallery: [
      '/siyad-1.webp',
      '/siyad-2.webp',
      '/siyad-3.webp',
      '/siyad-4.webp',
      '/siyad-5.webp',
      '/siyad-6.webp',
      '/siyad-7.webp',
      '/siyad-8.webp',
      '/siyad-9.webp',
      '/siyad-10.webp',
      '/siyad-11.webp',
      '/siyad-12.webp',
      '/siyad-13.webp',
      '/siyad-14.webp',
      '/siyad-15.webp',
      '/siyad-16.webp',
      '/siyad-17.webp',
      '/siyad-18.webp',
      '/siyad-19.webp',
      '/siyad-20.webp',
      '/siyad-21.webp',
      '/siyad-22.webp',
      '/siyad-23.webp',
      '/siyad-24.webp',
      '/siyad-25.webp',
      '/siyad-26.webp',
      '/siyad-27.webp',
      '/siyad-28.webp',
      '/siyad-29.webp',
      '/siyad-30.webp',
    ]
  },

  {
    id: 'summit-corporate-center',
    title: 'Summit Corporate Center',
    label: 'Project 003 / 2023',
    location: 'Commercial / Singapore',
    bg: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 100%), url("/arch-2.webp") center/cover no-repeat',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600',
    placeholder: 'linear-gradient(135deg, var(--surface-hi) 0%, var(--surface) 60%, var(--surface-hi) 100%)',
    description: 'Designed as a vertical ecosystem for modern business, the Summit Corporate Center integrates biophilic design with cutting-edge structural engineering. It serves as a landmark of sustainability and technological innovation in the heart of Singapore.',
    specifications: [
      { label: 'Type', value: 'Commercial' },
      { label: 'Area', value: '120,000 Sqft' },
      { label: 'Location', value: 'Singapore' },
      { label: 'Status', value: 'In-Use' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600',
      'https://images.unsplash.com/photo-1542314831-c6a4d14cd22b?q=80&w=1600'
    ]
  },
  {
    id: 'vellum-residences',
    title: 'Vellum Residences',
    label: 'Project 004 / 2021',
    location: 'Residential / Mumbai',
    bg: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600) center/cover no-repeat',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600',
    placeholder: 'linear-gradient(135deg, #222 0%, #000 100%)',
    description: 'Vellum Residences is an exploration of raw materiality, where concrete meets the warmth of tropical light. The project redefines the high-density luxury living with private terraced gardens and adaptive ventilation systems.',
    specifications: [
      { label: 'Type', value: 'Residential' },
      { label: 'Area', value: '62,000 Sqft' },
      { label: 'Location', value: 'Mumbai, IN' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1600',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1600'
    ]
  },
  {
    id: 'lumix-tower',
    title: 'Lumix IT Tower',
    label: 'Project 005 / 2024',
    location: 'Commercial / Kochi',
    bg: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600) center/cover no-repeat',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600',
    placeholder: 'linear-gradient(135deg, #111 0%, #333 100%)',
    description: 'A monument to modern productivity, the Lumix IT Tower features a kinetic glass facade that regulates internal temperatures based on sun position. It is designed to be the digital heartbeat of the emerging smart-city infrastructure.',
    specifications: [
      { label: 'Type', value: 'IT / Commercial' },
      { label: 'Area', value: '250,000 Sqft' },
      { label: 'Location', value: 'Kochi, IN' },
      { label: 'Status', value: 'Handover' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600',
      'https://images.unsplash.com/photo-1542314831-c6a4d14cd22b?q=80&w=1600',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600'
    ]
  },
  {
    id: 'aether-pavilion',
    title: 'Aether Pavilion',
    label: 'Project 006 / 2020',
    location: 'Cultural / Dubai',
    bg: 'url(https://images.unsplash.com/photo-1510641041908-662484694409?q=80&w=1600) center/cover no-repeat',
    heroImage: 'https://images.unsplash.com/photo-1510641041908-662484694409?q=80&w=1600',
    placeholder: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
    description: 'The Aether Pavilion is a philosophical exercise in light and shadow. Serving as an art-center, its floating steel structures and vast open-air void spaces create a sanctuary for quiet contemplation in the desert.',
    specifications: [
      { label: 'Type', value: 'Cultural' },
      { label: 'Area', value: '18,500 Sqft' },
      { label: 'Location', value: 'Dubai, UAE' },
      { label: 'Status', value: 'Awarded' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1510641041908-662484694409?q=80&w=1600',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600'
    ]
  },
];

export const TESTIMONIALS = [
  {
    quote: "MASS doesn't just build structures; they sculpt silence and light. Our headquarters is now a physical manifestation of our brand's future.",
    name: 'Julian Vance',
    title: 'CEO, Aether Global',
    poster: 'https://images.unsplash.com/photo-1542314831-c6a4d14cd22b?q=80&w=800&auto=format&fit=crop'
  },
  {
    quote: 'The materiality of their work achieves a level of geological permanence rarely seen today. An absolute standard in modern construction.',
    name: 'Priya Nair',
    title: 'Principal, Nair Architecture Review',
    poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  },
  {
    quote: "Working with MASS Developers was a transformative experience. Their attention to detail and ability to maximize space on my compact plot resulted in a home that exceeds all my expectations.",
    name: 'Mr. Siyad',
    title: 'Client, Fort Kochi',
    poster: '/siyad-1.webp',
    videoUrl: 'https://kihgreuv2nuypbvt.public.blob.vercel-storage.com/siyad-vedio.mov'
  },
];

export const JOURNAL = [
  {
    tag: 'Journal / 01',
    title: 'The Ontology of Concrete',
    excerpt: 'An exploration into the Brutalist heritage and its modern application to the digital-physical divide. How materiality speaks in an age of simulation.',
    date: '2024 / Mar',
  },
  {
    tag: 'Journal / 02',
    title: 'Void as Material',
    excerpt: 'How negative space becomes the most powerful architectural element. A study of light, shadow, and the geometry of absence.',
    date: '2024 / Jan',
  },
];

export const SECTIONS_IDS = ['hero', 'about-us', 'expertise', 'projects', 'testimonials', 'journal', 'contact', 'mass-interio'];
