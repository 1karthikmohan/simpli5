import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { projects } from '../data/projects';

const Portfolio = () => {

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Our Portfolio
            </h1>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300">
              Explore our diverse collection of architectural projects that showcase our commitment to design excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden p-4 pb-0">
                  <ImageCarousel
                    projectId={project.id}
                    images={project.images}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-8 right-8">
                      <Link 
                        to={`/project/${project.id}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {project.location}
                  </div>
                  
                  <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="font-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life with the same attention to detail and excellence.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-body font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;