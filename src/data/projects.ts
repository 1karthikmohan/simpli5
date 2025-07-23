export interface ProjectImage {
  filename: string;
  caption: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  client: string;
  role: string;
  technology: string;
  duration: string;
  description: string;
  tags: string[];
  images: ProjectImage[];
  content: {
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Family Residence',
    subtitle: 'A contemporary family home that seamlessly blends indoor and outdoor living spaces',
    category: 'Residential',
    location: 'Mysore, Karnataka',
    year: '2023',
    client: 'The Sharma Family',
    role: 'Lead Architect & Interior Designer',
    technology: 'AutoCAD, SketchUp, 3ds Max',
    duration: '8 months',
    description: 'A contemporary family home that seamlessly blends indoor and outdoor living spaces.',
    tags: ['Modern', 'Sustainable', 'Family Home'],
    images: [
      {
        filename: 'exterior-front.jpg',
        caption: 'Front Elevation View',
        alt: 'Modern family residence front elevation'
      },
      {
        filename: 'living-room.jpg',
        caption: 'Living Room Interior',
        alt: 'Spacious living room with modern furniture'
      },
      {
        filename: 'kitchen-dining.jpg',
        caption: 'Kitchen & Dining Area',
        alt: 'Open concept kitchen and dining space'
      },
      {
        filename: 'master-bedroom.jpg',
        caption: 'Master Bedroom',
        alt: 'Master bedroom with large windows'
      },
      {
        filename: 'outdoor-terrace.jpg',
        caption: 'Outdoor Terrace',
        alt: 'Outdoor terrace with garden view'
      }
    ],
    content: {
      overview: 'This modern family residence represents a perfect harmony between contemporary design principles and functional family living. The project challenged us to create a space that would grow with the family while maintaining architectural integrity and environmental consciousness.',
      challenge: 'The primary challenge was designing a home that could accommodate a growing family while maximizing natural light and creating seamless indoor-outdoor connections. The site had specific constraints including a narrow lot and strict local building codes.',
      solution: 'Our solution involved creating a multi-level design that maximizes vertical space while maintaining privacy. Large sliding glass doors connect the main living areas to outdoor terraces, while strategically placed skylights flood the interior with natural light.',
      features: [
        'Open-concept living spaces with 12-foot ceilings',
        'Floor-to-ceiling windows for maximum natural light',
        'Sustainable materials including bamboo flooring and recycled steel',
        'Smart home integration for energy efficiency',
        'Private outdoor spaces on each level',
        'Custom-built storage solutions throughout'
      ]
    }
  },
  {
    id: 2,
    title: 'Corporate Office Complex',
    subtitle: 'A state-of-the-art office complex designed to foster collaboration and productivity',
    category: 'Commercial',
    location: 'Bangalore, Karnataka',
    year: '2023',
    client: 'TechCorp Solutions',
    role: 'Principal Architect',
    technology: 'Revit, Rhino, V-Ray',
    duration: '12 months',
    description: 'A state-of-the-art office complex designed to foster collaboration and productivity.',
    tags: ['Corporate', 'Modern', 'Sustainable'],
    images: [
      {
        filename: 'building-exterior.jpg',
        caption: 'Main Building Exterior',
        alt: 'Modern office building exterior'
      },
      {
        filename: 'reception-lobby.jpg',
        caption: 'Reception & Lobby Area',
        alt: 'Spacious reception and lobby area'
      },
      {
        filename: 'open-workspace.jpg',
        caption: 'Open Office Workspace',
        alt: 'Modern open office workspace'
      },
      {
        filename: 'conference-room.jpg',
        caption: 'Conference Room',
        alt: 'Executive conference room'
      },
      {
        filename: 'cafeteria.jpg',
        caption: 'Employee Cafeteria',
        alt: 'Modern employee cafeteria space'
      }
    ],
    content: {
      overview: 'This corporate office complex was designed to embody the client\'s innovative culture while providing a productive and inspiring work environment. The design emphasizes collaboration, flexibility, and employee well-being.',
      challenge: 'Creating a workspace that could adapt to changing business needs while maintaining a cohesive design identity. The challenge included accommodating 500+ employees across multiple departments with varying space requirements.',
      solution: 'We developed a modular design system with flexible workspaces that can be reconfigured as needed. The building features a central atrium that serves as a natural gathering space and provides daylight to interior offices.',
      features: [
        'Flexible modular workspace design',
        'Central atrium with natural lighting',
        'Green roof and sustainable building systems',
        'State-of-the-art conference and collaboration spaces',
        'Employee wellness areas including fitness center',
        'Smart building technology for energy management'
      ]
    }
  },
  {
    id: 3,
    title: 'Heritage Villa Restoration',
    subtitle: 'Careful restoration of a colonial-era villa while adding modern amenities',
    category: 'Restoration',
    location: 'Mysore, Karnataka',
    year: '2022',
    client: 'Heritage Trust of Karnataka',
    role: 'Restoration Architect',
    technology: '3D Scanning, AutoCAD, Photogrammetry',
    duration: '18 months',
    description: 'Careful restoration of a colonial-era villa while adding modern amenities.',
    tags: ['Heritage', 'Restoration', 'Classic'],
    images: [
      {
        filename: 'restored-facade.jpg',
        caption: 'Restored Front Facade',
        alt: 'Beautifully restored colonial villa facade'
      },
      {
        filename: 'architectural-details.jpg',
        caption: 'Original Architectural Details',
        alt: 'Preserved original architectural details'
      },
      {
        filename: 'interior-restoration.jpg',
        caption: 'Restored Interior Spaces',
        alt: 'Carefully restored interior spaces'
      },
      {
        filename: 'heritage-garden.jpg',
        caption: 'Heritage Garden Restoration',
        alt: 'Restored heritage garden landscape'
      }
    ],
    content: {
      overview: 'This heritage villa restoration project required meticulous attention to historical accuracy while sensitively integrating modern amenities. The 19th-century colonial villa had suffered from decades of neglect and required comprehensive restoration.',
      challenge: 'Balancing historical preservation with modern functionality while working within strict heritage guidelines. Many original materials and techniques were no longer available, requiring innovative solutions.',
      solution: 'We employed traditional craftsmanship techniques alongside modern conservation methods. Original materials were carefully restored where possible, and period-appropriate replacements were sourced for irreparable elements.',
      features: [
        'Restoration of original lime plaster and frescoes',
        'Traditional tile roof restoration with modern waterproofing',
        'Period-appropriate window and door restoration',
        'Modern HVAC system discretely integrated',
        'Heritage garden landscape restoration',
        'Museum-quality lighting for artwork display'
      ]
    }
  },
  {
    id: 4,
    title: 'Boutique Hotel Design',
    subtitle: 'A luxury boutique hotel that celebrates local culture and natural beauty',
    category: 'Hospitality',
    location: 'Coorg, Karnataka',
    year: '2022',
    client: 'Coorg Hospitality Group',
    role: 'Design Director',
    technology: 'SketchUp, Lumion, Adobe Creative Suite',
    duration: '10 months',
    description: 'A luxury boutique hotel that celebrates local culture and natural beauty.',
    tags: ['Hospitality', 'Luxury', 'Cultural'],
    images: [
      {
        filename: 'hotel-lobby.jpg',
        caption: 'Hotel Lobby & Reception',
        alt: 'Elegant hotel lobby and reception area'
      },
      {
        filename: 'guest-room.jpg',
        caption: 'Guest Room Interior',
        alt: 'Luxurious guest room interior'
      },
      {
        filename: 'restaurant-dining.jpg',
        caption: 'Restaurant & Dining Area',
        alt: 'Fine dining restaurant area'
      },
      {
        filename: 'spa-wellness.jpg',
        caption: 'Spa & Wellness Center',
        alt: 'Tranquil spa and wellness center'
      },
      {
        filename: 'outdoor-pool.jpg',
        caption: 'Outdoor Pool Area',
        alt: 'Beautiful outdoor pool with mountain views'
      }
    ],
    content: {
      overview: 'This boutique hotel design celebrates the rich cultural heritage and natural beauty of Coorg while providing luxury accommodations for discerning travelers. The design draws inspiration from traditional Kodava architecture.',
      challenge: 'Creating a luxury experience that feels authentic to the local culture while meeting international hospitality standards. The hillside location presented both opportunities and challenges for the design.',
      solution: 'We developed a design that cascades down the hillside, with each guest room offering private views of the coffee plantations. Local materials and traditional building techniques were combined with modern luxury amenities.',
      features: [
        'Traditional Kodava architectural elements',
        'Private balconies with plantation views',
        'Locally sourced materials and furnishings',
        'Spa facilities using indigenous wellness practices',
        'Farm-to-table restaurant featuring local cuisine',
        'Sustainable design with rainwater harvesting'
      ]
    }
  },
  {
    id: 5,
    title: 'Minimalist Apartment',
    subtitle: 'Clean, minimalist interior design that maximizes space and natural light',
    category: 'Interior',
    location: 'Mysore, Karnataka',
    year: '2023',
    client: 'Private Residence',
    role: 'Interior Designer',
    technology: 'SketchUp, V-Ray, Photoshop',
    duration: '4 months',
    description: 'Clean, minimalist interior design that maximizes space and natural light.',
    tags: ['Minimalist', 'Interior', 'Modern'],
    images: [
      {
        filename: 'living-room-design.jpg',
        caption: 'Living Room Design',
        alt: 'Minimalist living room with clean lines'
      },
      {
        filename: 'kitchen-dining-area.jpg',
        caption: 'Kitchen & Dining',
        alt: 'Modern minimalist kitchen and dining area'
      },
      {
        filename: 'bedroom-interior.jpg',
        caption: 'Bedroom Interior',
        alt: 'Serene minimalist bedroom design'
      },
      {
        filename: 'bathroom-design.jpg',
        caption: 'Bathroom Design',
        alt: 'Clean minimalist bathroom design'
      }
    ],
    content: {
      overview: 'This minimalist apartment interior demonstrates how thoughtful design can make a compact space feel spacious and serene. The design philosophy centers on "less is more" while ensuring every element serves both functional and aesthetic purposes.',
      challenge: 'Working within a limited square footage while creating distinct zones for living, working, and relaxing. Storage was a critical concern that needed to be addressed without compromising the minimalist aesthetic.',
      solution: 'We employed a neutral color palette, built-in storage solutions, and multi-functional furniture to maximize space efficiency. Strategic lighting and mirrors create the illusion of larger spaces.',
      features: [
        'Built-in storage solutions throughout',
        'Multi-functional furniture pieces',
        'Neutral color palette with natural textures',
        'Strategic lighting design for ambiance',
        'Hidden technology integration',
        'Custom millwork for seamless aesthetics'
      ]
    }
  },
  {
    id: 6,
    title: 'Sustainable Community Center',
    subtitle: 'An eco-friendly community center built with local materials and sustainable practices',
    category: 'Public',
    location: 'Hassan, Karnataka',
    year: '2021',
    client: 'Hassan Municipal Corporation',
    role: 'Sustainable Design Consultant',
    technology: 'Green Building Studio, EnergyPlus, Revit',
    duration: '14 months',
    description: 'An eco-friendly community center built with local materials and sustainable practices.',
    tags: ['Sustainable', 'Community', 'Eco-friendly'],
    images: [
      {
        filename: 'community-center-exterior.jpg',
        caption: 'Community Center Exterior',
        alt: 'Sustainable community center building exterior'
      },
      {
        filename: 'multipurpose-hall.jpg',
        caption: 'Multi-purpose Hall',
        alt: 'Large multi-purpose community hall'
      },
      {
        filename: 'library-reading.jpg',
        caption: 'Library & Reading Area',
        alt: 'Community library and reading spaces'
      },
      {
        filename: 'sustainable-features.jpg',
        caption: 'Sustainable Features',
        alt: 'Solar panels and green building features'
      },
      {
        filename: 'community-garden.jpg',
        caption: 'Community Garden',
        alt: 'Organic community garden space'
      }
    ],
    content: {
      overview: 'This community center serves as a model for sustainable public architecture in rural Karnataka. The design prioritizes environmental responsibility while creating spaces that bring the community together for education, cultural events, and civic activities.',
      challenge: 'Designing a building that would be both environmentally sustainable and culturally appropriate while working within a limited municipal budget. The building needed to serve multiple functions for diverse community needs.',
      solution: 'We utilized locally sourced materials, passive cooling strategies, and renewable energy systems. The design incorporates traditional architectural elements that resonate with the local community while achieving modern sustainability standards.',
      features: [
        'Solar panels for renewable energy generation',
        'Rainwater harvesting and greywater recycling',
        'Natural ventilation and passive cooling',
        'Locally sourced stone and timber construction',
        'Community gardens and outdoor gathering spaces',
        'Flexible spaces for multiple community functions'
      ]
    }
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectImagePath = (projectId: number, filename: string): string => {
  const project = getProjectById(projectId);
  if (!project) return '';
  
  const folderName = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `/images/projects/${folderName}/${filename}`;
};