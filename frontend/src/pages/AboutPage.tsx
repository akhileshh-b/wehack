import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ChartBarIcon, BoltIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'IEEE-CIS Dataset Powered',
    description: 'Built using the IEEE-CIS Fraud Detection dataset, containing real-world transaction data from Vesta\'s e-commerce payment system.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'AI-Powered Detection',
    description: 'Advanced machine learning algorithms trained on millions of transactions to identify fraudulent patterns with high accuracy.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Real-time Analysis',
    description: 'Instant transaction analysis with high accuracy, providing immediate fraud risk assessment.',
    icon: BoltIcon,
  },
  {
    name: 'Comprehensive Monitoring',
    description: 'Track and analyze transaction patterns across multiple payment methods and variables.',
    icon: ChartBarIcon,
  }
];

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title"
          >
            About Our AI-Powered Fraud Detection System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-description"
          >
            Our platform leverages advanced machine learning models trained on the IEEE-CIS dataset to detect and prevent fraudulent transactions in real-time.
          </motion.p>
        </div>

        {/* Dataset Section */}
        <section className="card">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            About the Dataset
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Our model is trained on the IEEE-CIS Fraud Detection dataset, which contains actual transactions from Vesta's e-commerce payment system. This dataset includes a wide range of features from device type to transaction amount, allowing our system to identify complex fraud patterns.
          </motion.p>
        </section>

        {/* Features Section */}
        <section className="card">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheckIcon className="icon icon-primary" />
            <h2 className="card-title">Key Features</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <feature.icon className="icon" />
                </div>
                <h3 className="feature-title">{feature.name}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="card">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Our system analyzes over 400 transaction features using advanced machine learning algorithms to identify potential fraud. The model has been trained on the IEEE-CIS dataset, which contains real-world transaction data, making it highly effective at detecting fraudulent patterns.
          </motion.p>
        </section>

        {/* Get Started Section */}
        <section className="card">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Get Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Start using our AI-powered fraud detection system to protect your transactions today. Our model, trained on the comprehensive IEEE-CIS dataset, provides reliable fraud detection capabilities for your business.
          </motion.p>
        </section>
      </div>
    </div>
  );
} 