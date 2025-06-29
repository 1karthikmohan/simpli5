import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
                Designing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  {' '}Dreams
                </span>
              </h1>
              <p className="font-body text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We create exceptional architectural experiences that blend innovation with timeless design principles, transforming spaces into inspiring environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-body font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-body font-semibold rounded-lg transition-all duration-300"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800 rounded-3xl flex items-center justify-center">
                <Building className="h-32 w-32 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-2">50+</h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-2">100+</h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-2">15+</h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-2">8+</h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-body font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;