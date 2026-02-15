'use client';

import { Wrench, Package, Settings, Zap, Shield, Clock, BookOpen, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Wrench,
    title: 'Machine Service & Repair',
    description: 'Expert maintenance and repair of Müller Martini, Kolbus, and Hörauf printing machines. Fast response time and professional diagnostics.',
    features: ['Hardcover machines', 'Three-knife trimmers', 'Binding systems'],
  },
  {
    icon: Settings,
    title: 'Installation & Dismantling',
    description: 'Professional installation and relocation services for industrial machinery. Complete project management from start to finish.',
    features: ['Machine relocation', 'Technical setup', 'Safety compliance'],
  },
  {
    icon: Package,
    title: 'Replacement Parts',
    description: 'High-quality replacement parts for all major printing machine brands. Fast delivery and expert consultation.',
    features: ['Original parts', 'Quality alternatives', 'Fast delivery'],
  },
  {
    icon: Zap,
    title: 'Emergency Support',
    description: '24/7 emergency support for critical machine failures. Minimize downtime with our rapid response team.',
    features: ['24/7 availability', 'Remote diagnostics', 'On-site service'],
  },
  {
    icon: Shield,
    title: 'Preventive Maintenance',
    description: 'Regular maintenance programs to prevent breakdowns and extend machine lifespan. Customized service plans.',
    features: ['Scheduled inspections', 'Performance optimization', 'Extended warranty'],
  },
  {
    icon: Clock,
    title: 'Modernization & Upgrades',
    description: 'Upgrade older machines with modern technology. Improve efficiency and extend equipment life.',
    features: ['Technology updates', 'Automation', 'Performance boost'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Comprehensive <span className="text-primary">Machine Service</span> Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From installation to maintenance, we provide complete support for your industrial machinery needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-dark">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Machine Expertise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Our Expertise
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Printing Machine Maintenance Müller Martini
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We service all generations and models with expert precision
              </p>
            </div>

            {/* Machine categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* HARDCOVER */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                    Hardcover
                  </h4>
                </div>
                <ul className="space-y-3">
                  {['Diamant (all generations)', 'Ventura (all generations)', 'Collibri', 'Ribbon', 'Vesta', 'Kolbus RF', 'Hörauf Compact', 'Hörauf Universal'].map((machine, idx) => (
                    <motion.li
                      key={machine}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                        <svg className="w-3 h-3 text-secondary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors">{machine}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* THREE-KNIFE TRIMMERS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                    Trimmers
                  </h4>
                </div>
                <ul className="space-y-3">
                  {['Esprit', 'Merit', 'Zenith', 'Orbit', 'Solit'].map((machine, idx) => (
                    <motion.li
                      key={machine}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                        <svg className="w-3 h-3 text-secondary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors">{machine}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* BINDERS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                    Binders
                  </h4>
                </div>
                <ul className="space-y-3">
                  {['Acoro', 'Bolero', 'Corona', 'Pantera'].map((machine, idx) => (
                    <motion.li
                      key={machine}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                        <svg className="w-3 h-3 text-secondary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors">{machine}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span>Request Service Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
