import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { services } from './serviceData';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onSelect={() => setSelectedService(index)}
              />
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