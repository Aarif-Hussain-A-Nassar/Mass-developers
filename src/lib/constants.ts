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
  {
    id: 'shefeek-residence',
    title: "Dr. Shefeek's Residence",
    label: 'Project 004 / 2024',
    location: 'Residential / Eramallor',
    bg: 'url("/shafek-5.webp") center/cover no-repeat',
    heroImage: '/shafek-5.webp',
    placeholder: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
    description: 'A distinguished 4500 sqft residence crafted for Dr. Shefeek in Eramallor. This project embodies refined architectural sensibility — blending generous spatial planning with premium finishes and thoughtful detailing, delivering a home that reflects the client\'s stature and lifestyle with timeless elegance.',
    specifications: [
      { label: 'Client', value: 'Dr. Shefeek' },
      { label: 'Area', value: '4500 Sqft' },
      { label: 'Location', value: 'Eramallor, Kerala' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      '/shafek-1.webp',
      '/shafek-2.webp',
      '/shafek-3.webp',
      '/shafek-4.webp',
      '/shafek-5.webp',
      '/shafek-6.webp',
    ]
  },
  {
    id: 'choice-paradise-6d',
    title: 'Choice Paradise 6D',
    label: 'Project 005 / 2024',
    location: 'Residential / Tripunithura',
    bg: 'url("/6d-1.webp") center/cover no-repeat',
    heroImage: '/6d-1.webp',
    placeholder: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
    description: "An elegantly designed residential unit at Choice Paradise, Tripunithura — one of South India's most prestigious high-rise addresses. Unit 6D blends contemporary interiors with refined material choices, maximizing light, space, and panoramic views to deliver a truly elevated living experience.",
    specifications: [
      { label: 'Project', value: 'Choice Paradise' },
      { label: 'Unit', value: 'Flat 6D' },
      { label: 'Location', value: 'Tripunithura, Ernakulam' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      '/6d-1.webp',
      '/6d-2.webp',
      '/6d-3.webp',
      '/6d-4.webp',
      '/6d-5.webp',
      '/6d-6.webp',
      '/6d-7.webp',
    ]
  },
  {
    id: 'choice-paradise-28d',
    title: 'Choice Paradise 28D',
    label: 'Project 006 / 2024',
    location: 'Residential / Tripunithura',
    bg: 'url("/28d-1.webp") center/cover no-repeat',
    heroImage: '/28d-1.webp',
    placeholder: 'linear-gradient(135deg, #111 0%, #333 100%)',
    description: 'A premium high-floor residence at Choice Paradise, Tripunithura. Unit 28D commands sweeping views of the cityscape and is finished with a curated palette of luxury materials — a statement of architectural excellence and refined urban living at its finest.',
    specifications: [
      { label: 'Project', value: 'Choice Paradise' },
      { label: 'Unit', value: 'Flat 28D' },
      { label: 'Location', value: 'Tripunithura, Ernakulam' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      '/28d-1.webp',
      '/28d-2.webp',
      '/28d-3.webp',
      '/28d-4.webp',
      '/28d-5.webp',
      '/28d-6.webp',
      '/28d-7.webp',
      '/28d-8.webp',
    ]
  },
  {
    id: '3d-works',
    title: '3D Works',
    label: 'Project 007 / 2024',
    location: 'Visualization / MASS Developers',
    bg: 'url("/3dworks-1.webp") center/cover no-repeat',
    heroImage: '/3dworks-1.webp',
    placeholder: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    description: 'A curated collection of photorealistic 3D visualizations by MASS Developers — showcasing the depth of our design vision before a single brick is laid. Each render is a meticulous study in light, material, and space, translating architectural concepts into immersive, lifelike imagery.',
    specifications: [
      { label: 'Type', value: '3D Visualization' },
      { label: 'Studio', value: 'MASS Developers' },
      { label: 'Renders', value: '30 Images' },
      { label: 'Status', value: 'Portfolio' }
    ],
    gallery: [
      '/3dworks-1.webp',
      '/3dworks-2.webp',
      '/3dworks-3.webp',
      '/3dworks-4.webp',
      '/3dworks-5.webp',
      '/3dworks-6.webp',
      '/3dworks-7.webp',
      '/3dworks-8.webp',
      '/3dworks-9.webp',
      '/3dworks-10.webp',
      '/3dworks-11.webp',
      '/3dworks-12.webp',
      '/3dworks-13.webp',
      '/3dworks-14.webp',
      '/3dworks-15.webp',
      '/3dworks-16.webp',
      '/3dworks-17.webp',
      '/3dworks-18.webp',
      '/3dworks-19.webp',
      '/3dworks-20.webp',
      '/3dworks-21.webp',
      '/3dworks-22.webp',
      '/3dworks-23.webp',
      '/3dworks-24.webp',
      '/3dworks-25.webp',
      '/3dworks-26.webp',
      '/3dworks-27.webp',
      '/3dworks-28.webp',
      '/3dworks-29.webp',
      '/3dworks-30.webp',
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
