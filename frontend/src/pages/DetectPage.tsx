import React from 'react';
import FraudDetectionForm from '../components/home/FraudDetectionForm';

export default function DetectPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Fraud Detection
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Enter transaction details to analyze for potential fraud using our AI model.
          </p>
        </div>
        <FraudDetectionForm />
      </div>
    </div>
  );
} 