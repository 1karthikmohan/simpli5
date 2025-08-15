import React from "react";

// Import project data
import project1 from "../projects/project1/data.json";
import project2 from "../projects/project2/data.json";
import project3 from "../projects/project3/data.json";

const projects = [project1, project2, project3];

export default function Projects() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Featured Projects
            </h1>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300">
              Discover our latest architectural innovations and design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h2 className="font-display text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                  {project.title}
                </h2>
                
                <p className="font-body text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-body font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i} className="font-body text-neutral-700 dark:text-neutral-300 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {project.images.map((img: string, i: number) => (
                    <img
                      key={i}
                      src={`/src/projects/project${index + 1}/images/${img}`}
                      alt={`${project.title} - Image ${i + 1}`}
                      className="h-32 w-auto rounded-lg shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/vite.svg';
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}