import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, User, Wrench, ExternalLink } from 'lucide-react';
import { getProjectById, getProjectImagePath } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();

  const project = getProjectById(parseInt(id || '0'));

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-800">
      {/* Sticky Header with Back Button */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-body font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

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
                      src={getProjectImagePath(project.id, image.filename)}
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