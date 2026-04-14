/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• DATA â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

export const NAV_LINKS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about-us' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Journal', href: '/#journal' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Interio', href: '/#mass-interio' },
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
    id: 'jalal-residence',
    title: "Mr. Jalal's Residence",
    label: 'Project 003 / 2024',
    location: 'Residential / Arookutty',
    bg: 'url("/jalal-1.webp") center/cover no-repeat',
    heroImage: '/jalal-1.webp',
    placeholder: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
    description: 'A high-end 1950 sqft residence designed for Mr. Jalal in Arookutty. This project emphasizes open spatial flow, premium finishes, and a seamless integration with the coastal landscape, reflecting a modern architectural ethos tailored to the unique environment of Kerala.',
    specifications: [
      { label: 'Client', value: 'Mr. Jalal' },
      { label: 'Area', value: '1950 Sqft' },
      { label: 'Location', value: 'Arookutty, Kerala' },
      { label: 'Status', value: 'Designed' }
    ],
    gallery: [
      '/jalal-1.webp',
      '/jalal-2.webp',
      '/jalal-3.webp',
      '/jalal-4.webp',
      '/jalal-5.webp',
      '/jalal-6.webp',
    ]
  },
];

export const TESTIMONIALS = [
  {
    quote: "It was our pleasure designing this elegant 3BHK home at Choice Paradise, Tripunithura — South India’s tallest residential tower. A timeless blend of comfort and fine craftsmanship.",
    name: "Sreejith & Keerthi",
    title: "Residents, Choice Paradise",
    poster: "/choice-paradise.webp",
    videoUrl: "https://kihgreuv2nuypbvt.public.blob.vercel-storage.com/IMG_9793.MP4"
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
    title: 'Maximizing Space: The 2.5 Cent Challenge',
    excerpt: 'Detailed insights on how we engineered Mr. Siyad’s 4BHK residence on a compact plot in Fort Kochi without compromising on light or luxury.',
    date: '2024 / Apr',
  },
  {
    tag: 'Journal / 02',
    title: 'The Vertical Landscape: Choice Paradise Interiors',
    excerpt: 'Design strategies used for South India’s tallest residential tower, focusing on wind-dynamics and panoramic spatial flow.',
    date: '2024 / Feb',
  },
];

export const SECTIONS_IDS = ['hero', 'about-us', 'expertise', 'projects', 'testimonials', 'journal', 'contact', 'mass-interio'];
