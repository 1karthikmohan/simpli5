import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-neutral-900 dark:to-secondary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Let's Bring Your Vision to Life
            </h1>
            <p className="font-body text-xl text-neutral-700 dark:text-neutral-300">
              Ready to start your architectural journey? Get in touch with us to discuss your project and discover how we can transform your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8">
              <h2 className="font-display text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
                Start Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-body font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block font-body font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Architecture</option>
                      <option value="commercial">Commercial Architecture</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Renovation & Restoration</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-body font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Contact Info */}
            <div className="space-y-8">
              {/* Google Maps Placeholder */}
              <div className="bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 to-secondary-800 rounded-2xl h-64 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                  <p className="font-body text-primary-800 dark:text-primary-200 font-medium">
                    Google Maps Integration
                  </p>
                  <p className="font-body text-primary-700 dark:text-primary-300 text-sm">
                    Interactive map placeholder
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8">
                <h3 className="font-display text-xl font-bold mb-6 text-neutral-900 dark:text-white">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900 dark:text-white mb-1">
                        Studio Location
                      </h4>
                      <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                        123 Design Street<br />
                        Mysore, Karnataka 570001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900 dark:text-white mb-1">
                        Phone
                      </h4>
                      <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                        +91 9876543210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900 dark:text-white mb-1">
                        Email
                      </h4>
                      <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                        hello@simpli5design.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-neutral-900 dark:text-white mb-1">
                        Business Hours
                      </h4>
                      <p className="font-body text-neutral-600 dark:text-neutral-400 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-body font-semibold mb-2">WhatsApp Chat</h4>
                <p className="font-body text-sm text-green-100">
                  Click to start a conversation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;