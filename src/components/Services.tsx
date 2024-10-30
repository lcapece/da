import React, { useState } from 'react';
import { Brain, Workflow, LineChart, Shield, Mail, ClipboardList, Users, Link as LinkIcon, X, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  details: string;
  icon: React.FC<{ className?: string }>;
  gradient: string;
}

const services: Service[] = [
  {
    title: 'AI Process Automation',
    description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation solutions. Our AI systems handle complex processes, reducing manual work by up to 80%.',
    details: `Transform your business operations with our cutting-edge AI Process Automation solutions. We specialize in identifying, optimizing, and automating complex workflows across your organization, enabling unprecedented efficiency and accuracy.

Our AI-powered platform analyzes your existing processes, identifies bottlenecks, and implements intelligent workflows that continuously adapt and improve. By combining advanced machine learning algorithms with robotic process automation (RPA), we create solutions that not only automate tasks but evolve with your business needs.`,
    icon: Workflow,
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    title: 'Machine Learning Integration',
    description: 'Implement custom ML models to derive actionable insights from your data. Leverage deep learning and neural networks for intelligent decision-making.',
    details: `Harness the full potential of your data with our comprehensive Machine Learning Integration services. We specialize in developing and implementing custom ML models that transform raw data into actionable business intelligence.

Our team leverages state-of-the-art deep learning and neural networks to create sophisticated solutions tailored to your specific needs. From data preprocessing to model deployment and optimization, we ensure seamless integration of ML capabilities into your existing infrastructure.`,
    icon: Brain,
    gradient: 'from-purple-400 to-indigo-600',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with advanced analytics. Utilize pattern recognition and statistical modeling for accurate predictions.',
    details: `Empower your decision-making process with our advanced Predictive Analytics solutions. We combine sophisticated statistical modeling with machine learning algorithms to help organizations forecast trends, identify opportunities, and mitigate risks with unprecedented accuracy.

Our platform processes both historical and real-time data to generate actionable insights that drive business growth. Using advanced pattern recognition techniques and statistical modeling, we create reliable forecasts that inform strategic planning and operational decisions.`,
    icon: LineChart,
    gradient: 'from-indigo-400 to-blue-600',
  },
  {
    title: 'Secure AI Solutions',
    description: 'Enterprise-grade security measures to protect your AI implementations. Features end-to-end encryption and compliance with industry standards.',
    details: `Deploy AI with complete confidence using our Secure AI Solutions. We prioritize the security and integrity of your AI implementations with enterprise-grade protection measures that ensure your data and algorithms remain protected while delivering powerful results.

Our comprehensive security framework covers every aspect of AI deployment, from data encryption and access control to model protection and compliance monitoring. We implement robust security measures that align with industry standards and regulatory requirements.`,
    icon: Shield,
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Smart Lead Generation',
    description: 'AI-powered email outreach and lead enrichment to identify and engage high-value prospects. Includes automated follow-ups and sentiment analysis.',
    details: `Revolutionize your lead generation process with our AI-powered outreach and enrichment solutions. Our platform combines advanced data analytics with automated engagement tools to identify, qualify, and nurture high-value prospects with unprecedented efficiency.

Our system leverages machine learning algorithms to analyze prospect data, predict conversion likelihood, and personalize outreach strategies. By automating repetitive tasks while maintaining a personal touch, we help you scale your lead generation efforts effectively.`,
    icon: Mail,
    gradient: 'from-orange-400 to-pink-600',
  },
  {
    title: 'Project Intelligence',
    description: 'Automated project tracking, resource allocation, and risk assessment using AI algorithms. Real-time monitoring and predictive project analytics.',
    details: `Elevate your project management capabilities with our Project Intelligence solutions. Our AI-powered platform provides comprehensive project tracking, resource allocation, and risk assessment tools that help organizations deliver projects on time and within budget.

By leveraging advanced algorithms and real-time analytics, our system provides actionable insights for project planning, execution, and monitoring. We help project managers make data-driven decisions while automating routine tasks and identifying potential issues before they impact project timelines.`,
    icon: ClipboardList,
    gradient: 'from-red-400 to-rose-600',
  },
  {
    title: 'HR Process Automation',
    description: 'Streamline recruitment, onboarding, and employee management with AI-driven workflows. Includes resume screening and performance analytics.',
    details: `Transform your human resources operations with our HR Process Automation solutions. Our AI-powered platform streamlines recruitment, onboarding, and employee management processes, enabling HR teams to focus on strategic initiatives rather than administrative tasks.

Our system combines advanced machine learning algorithms with workflow automation to create efficient, scalable HR processes. From initial candidate screening to ongoing performance management, our solutions help organizations optimize their human capital management.`,
    icon: Users,
    gradient: 'from-teal-400 to-emerald-600',
  },
  {
    title: 'System Integration',
    description: 'Seamlessly connect and automate interactions between various tools and platforms. Custom API development and middleware solutions.',
    details: `Achieve seamless connectivity across your technology stack with our System Integration solutions. We specialize in creating robust connections between various tools and platforms, enabling smooth data flow and process automation across your organization.

Our integration expertise encompasses custom API development, middleware solutions, and automated workflows that connect disparate systems into a cohesive ecosystem. We ensure reliable data synchronization while maintaining security and performance.`,
    icon: LinkIcon,
    gradient: 'from-cyan-400 to-blue-600',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity animate-fade-in" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6 animate-slide-up">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div>
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <div className="flex items-center mb-6">
                <span className={`rounded-xl inline-flex p-4 bg-gradient-to-r ${service.gradient} text-white ring-4 ring-white shadow-lg`}>
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="ml-4 text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                  {service.title}
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 whitespace-pre-line">
                  {service.details}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-6">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Comprehensive AI Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Transform your business with our cutting-edge AI automation services
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                <div>
                  <span className={`rounded-xl inline-flex p-4 bg-gradient-to-r ${service.gradient} text-white ring-4 ring-white shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedService(index)}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService !== null && (
        <ServiceModal
          service={services[selectedService]}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}