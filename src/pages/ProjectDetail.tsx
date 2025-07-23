import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, User, Wrench, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Project data - in a real app, this would come from an API or database
  const projects = {
    '1': {
      title: 'Modern Family Residence',
      subtitle: 'A contemporary family home that seamlessly blends indoor and outdoor living spaces',
      category: 'Residential',
      location: 'Mysore, Karnataka',
      year: '2023',
      client: 'The Sharma Family',
      role: 'Lead Architect & Interior Designer',
      technology: 'AutoCAD, SketchUp, 3ds Max',
      duration: '8 months',
      images: [
        {
          url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Front Elevation View'
        },
        {
          url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Living Room Interior'
        },
        {
          url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Kitchen & Dining Area'
        },
        {
          url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Master Bedroom'
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
    '2': {
      title: 'Corporate Office Complex',
      subtitle: 'A state-of-the-art office complex designed to foster collaboration and productivity',
      category: 'Commercial',
      location: 'Bangalore, Karnataka',
      year: '2023',
      client: 'TechCorp Solutions',
      role: 'Principal Architect',
      technology: 'Revit, Rhino, V-Ray',
      duration: '12 months',
      images: [
        {
          url: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Main Building Exterior'
        },
        {
          url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Reception & Lobby Area'
        },
        {
          url: 'https://images.pexels.com/photos/2883051/pexels-photo-2883051.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Open Office Workspace'
        },
        {
          url: 'https://images.pexels.com/photos/2883052/pexels-photo-2883052.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Conference Room'
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
    '3': {
      title: 'Heritage Villa Restoration',
      subtitle: 'Careful restoration of a colonial-era villa while adding modern amenities',
      category: 'Restoration',
      location: 'Mysore, Karnataka',
      year: '2022',
      client: 'Heritage Trust of Karnataka',
      role: 'Restoration Architect',
      technology: '3D Scanning, AutoCAD, Photogrammetry',
      duration: '18 months',
      images: [
        {
          url: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Restored Front Facade'
        },
        {
          url: 'https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Original Architectural Details'
        },
        {
          url: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Restored Interior Spaces'
        },
        {
          url: 'https://images.pexels.com/photos/1396135/pexels-photo-1396135.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Heritage Garden Restoration'
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
    '4': {
      title: 'Boutique Hotel Design',
      subtitle: 'A luxury boutique hotel that celebrates local culture and natural beauty',
      category: 'Hospitality',
      location: 'Coorg, Karnataka',
      year: '2022',
      client: 'Coorg Hospitality Group',
      role: 'Design Director',
      technology: 'SketchUp, Lumion, Adobe Creative Suite',
      duration: '10 months',
      images: [
        {
          url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Hotel Lobby & Reception'
        },
        {
          url: 'https://images.pexels.com/photos/2029668/pexels-photo-2029668.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Guest Room Interior'
        },
        {
          url: 'https://images.pexels.com/photos/2029669/pexels-photo-2029669.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Restaurant & Dining Area'
        },
        {
          url: 'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Spa & Wellness Center'
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
    '5': {
      title: 'Minimalist Apartment',
      subtitle: 'Clean, minimalist interior design that maximizes space and natural light',
      category: 'Interior',
      location: 'Mysore, Karnataka',
      year: '2023',
      client: 'Private Residence',
      role: 'Interior Designer',
      technology: 'SketchUp, V-Ray, Photoshop',
      duration: '4 months',
      images: [
        {
          url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Living Room Design'
        },
        {
          url: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Kitchen & Dining'
        },
        {
          url: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Bedroom Interior'
        },
        {
          url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Bathroom Design'
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
    '6': {
      title: 'Sustainable Community Center',
      subtitle: 'An eco-friendly community center built with local materials and sustainable practices',
      category: 'Public',
      location: 'Hassan, Karnataka',
      year: '2021',
      client: 'Hassan Municipal Corporation',
      role: 'Sustainable Design Consultant',
      technology: 'Green Building Studio, EnergyPlus, Revit',
      duration: '14 months',
      images: [
        {
          url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Community Center Exterior'
        },
        {
          url: 'https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Multi-purpose Hall'
        },
        {
          url: 'https://images.pexels.com/photos/2102589/pexels-photo-2102589.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Library & Reading Area'
        },
        {
          url: 'https://images.pexels.com/photos/2102590/pexels-photo-2102590.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Sustainable Features'
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
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="pt-16 min-h-screen bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/portfolio"
          className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-body font-medium">Back to Portfolio</span>
        </Link>

        {/* Main Container */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              {/* Project Header */}
              <header className="mb-8">
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <p className="font-body text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.subtitle}
                </p>
              </header>

              {/* Key Info Section */}
              <section className="mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="h-4 w-4 text-primary-500" />
                      <h3 className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        Client
                      </h3>
                    </div>
                    <p className="font-body text-sm font-medium text-neutral-900 dark:text-white">
                      {project.client}
                    </p>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wrench className="h-4 w-4 text-secondary-500" />
                      <h3 className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        Role
                      </h3>
                    </div>
                    <p className="font-body text-sm font-medium text-neutral-900 dark:text-white">
                      {project.role}
                    </p>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-accent-500" />
                      <h3 className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        Year
                      </h3>
                    </div>
                    <p className="font-body text-sm font-medium text-neutral-900 dark:text-white">
                      {project.year}
                    </p>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary-500" />
                      <h3 className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        Location
                      </h3>
                    </div>
                    <p className="font-body text-sm font-medium text-neutral-900 dark:text-white">
                      {project.location}
                    </p>
                  </div>
                </div>
              </section>

              {/* Main Description */}
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Project Overview</h2>
                <p>{project.content.overview}</p>

                <h2>The Challenge</h2>
                <p>{project.content.challenge}</p>

                <h2>Our Solution</h2>
                <p>{project.content.solution}</p>

                <h2>Key Features</h2>
                <ul>
                  {project.content.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Right Column - Image Gallery */}
            <aside className="lg:col-span-1 bg-neutral-50 dark:bg-neutral-800 p-8">
              <div className="lg:sticky lg:top-20 space-y-6">
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Project Gallery
                </h3>
                
                {project.images.map((image, index) => (
                  <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x300/e2e8f0/64748b?text=${encodeURIComponent(image.caption)}`;
                      }}
                    />
                    <div className="p-4">
                      <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Additional Info */}
                <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 mt-8">
                  <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-4">
                    Project Details
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide block mb-1">
                        Duration
                      </span>
                      <span className="font-body text-sm text-neutral-900 dark:text-white">
                        {project.duration}
                      </span>
                    </div>
                    <div>
                      <span className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide block mb-1">
                        Technology
                      </span>
                      <span className="font-body text-sm text-neutral-900 dark:text-white">
                        {project.technology}
                      </span>
                    </div>
                    <div>
                      <span className="font-body text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide block mb-1">
                        Category
                      </span>
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;