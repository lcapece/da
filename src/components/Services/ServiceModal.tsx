import React from 'react';
import { X } from 'lucide-react';
import { Service } from './types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
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
}