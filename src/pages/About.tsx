import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              About Simpli5 Design Studio
            </h1>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300">
              We are passionate architects and designers dedicated to creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white">
                Our Story
              </h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Founded in 2016, Simpli5 Design Studio emerged from a simple yet powerful vision: to create architectural solutions that simplify complexity while enhancing the human experience. Our name reflects our core philosophy - finding elegant simplicity in the midst of design challenges.
              </p>
              <p className="font-body text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Based in the cultural heart of Mysore, Karnataka, we draw inspiration from the rich architectural heritage of our region while embracing contemporary design principles and sustainable practices.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800 rounded-3xl flex items-center justify-center">
              <Heart className="h-32 w-32 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              These core principles guide every project we undertake and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Purpose-Driven Design
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">
                Every design decision serves a purpose, creating spaces that are both beautiful and functional.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Collaborative Approach
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">
                We believe the best results come from close collaboration with our clients throughout the process.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Excellence in Execution
              </h3>
              <p className="font-body text-neutral-600 dark:text-neutral-400">
                We maintain the highest standards of quality in every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;