import { Home, Building2, Palette, Wrench, MessageSquare, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Architecture',
      description: 'Custom home design that reflects your lifestyle and creates spaces for living, growing, and making memories.',
      features: ['Custom Home Design', 'Space Planning', 'Sustainable Design', '3D Visualization']
    },
    {
      icon: Building2,
      title: 'Commercial Architecture',
      description: 'Innovative commercial spaces that enhance productivity, reflect brand identity, and create positive experiences.',
      features: ['Office Buildings', 'Retail Spaces', 'Hospitality Design', 'Mixed-Use Development']
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Complete interior solutions that transform spaces into beautiful, functional environments tailored to your needs.',
      features: ['Space Planning', 'Furniture Selection', 'Color Schemes', 'Lighting Design']
    },
    {
      icon: Wrench,
      title: 'Renovation & Restoration',
      description: 'Breathing new life into existing spaces while preserving their character and enhancing their functionality.',
      features: ['Historic Restoration', 'Modern Updates', 'Space Optimization', 'Structural Improvements']
    },
    {
      icon: MessageSquare,
      title: 'Design Consultation',
      description: 'Expert guidance and professional advice to help you make informed decisions about your architectural projects.',
      features: ['Design Review', 'Code Compliance', 'Project Planning', 'Budget Guidance']
    },
    {
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'From initial ideas to detailed concepts, we help bring your vision to life through creative design solutions.',
      features: ['Conceptual Design', 'Feasibility Studies', 'Design Development', 'Presentation Materials']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Our Services
            </h1>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300">
              Comprehensive architectural and design services tailored to bring your vision to life with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-body text-sm text-neutral-500 dark:text-neutral-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Design Process
            </h2>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              A structured approach that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-2">
                Discovery
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                Understanding your needs, goals, and vision for the project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-2">
                Concept
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                Developing initial design concepts and exploring possibilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-2">
                Development
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                Refining designs and creating detailed plans and specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-2">
                Delivery
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                Supporting you through construction and project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;