import React from 'react';
import { ArrowRight, Bot, Cpu, Database, Network } from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing enterprise infrastructure with our comprehensive integration solutions.',
    icon: Bot,
    link: '/solutions/enterprise-ai',
  },
  {
    title: 'Data Processing & Analytics',
    description: 'Transform raw data into actionable insights with our advanced processing and analytics solutions.',
    icon: Database,
    link: '/solutions/data-analytics',
  },
  {
    title: 'Neural Network Solutions',
    description: 'Leverage the power of deep learning with our custom neural network implementations.',
    icon: Network,
    link: '/solutions/neural-networks',
  },
  {
    title: 'Edge Computing AI',
    description: 'Deploy AI solutions at the edge for faster processing and reduced latency.',
    icon: Cpu,
    link: '/solutions/edge-computing',
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">AI Solutions for</span>
            <span className="block text-indigo-600 mt-2">Modern Enterprises</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover how our AI solutions can transform your business operations and drive innovation.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
              <div className="flex items-center">
                <span className="rounded-xl inline-flex p-4 bg-gradient-to-r from-indigo-400 to-blue-600 text-white ring-4 ring-white shadow-lg">
                  <solution.icon className="h-8 w-8" />
                </span>
                <h2 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {solution.title}
                </h2>
              </div>
              <p className="mt-4 text-lg text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                {solution.description}
              </p>
              <div className="mt-6">
                <a
                  href={solution.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}