import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from './types';

interface ServiceCardProps {
  service: Service;
  index: number;
  onSelect: () => void;
}

export default function ServiceCard({ service, index, onSelect }: ServiceCardProps) {
  return (
    <div
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
          onClick={onSelect}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}