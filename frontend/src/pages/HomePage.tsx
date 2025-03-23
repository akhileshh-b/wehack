import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Detection',
    description: 'Advanced machine learning model trained on IEEE-CIS dataset to identify suspicious activities with high accuracy.',
    icon: ShieldCheckIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Real-time Analysis',
    description: 'Instant transaction analysis with high accuracy, providing immediate fraud risk assessment.',
    icon: ChartBarIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Multi-Channel Support',
    description: 'Monitor transactions across various payment methods for comprehensive fraud detection.',
    icon: CurrencyDollarIcon,
    color: 'bg-purple-500',
  },
  {
    name: 'Detailed Reports',
    description: 'Generate comprehensive reports with transaction patterns, risk scores, and fraud indicators.',
    icon: DocumentTextIcon,
    color: 'bg-orange-500',
  },
];

const stats = [
  {
    name: 'Transaction Types',
    value: '5+',
    description: 'Supports all major payment methods',
  },
  {
    name: 'Real-time Analysis',
    value: '<1s',
    description: 'Instant fraud detection',
  },
  {
    name: 'Pattern Recognition',
    value: '100+',
    description: 'Fraud patterns identified',
  },
  {
    name: 'Risk Assessment',
    value: '24/7',
    description: 'Continuous monitoring',
  },
];

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title"
          >
            Detect Transaction Fraud with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-description"
          >
            Our AI-powered platform provides real-time fraud detection, 
            protecting transactions across various payment methods.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/detect" className="button button-primary">
              Start Detection
              <ArrowRightIcon className="icon" />
            </Link>
            <Link to="/about" className="button button-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="stat-card"
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.name}</div>
                <div className="stat-description">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Powered by Advanced AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-description"
          >
            Our AI model is trained on the IEEE-CIS dataset, 
            ensuring reliable and accurate fraud detection for all types of transactions.
          </motion.p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="feature-card"
              >
                <div className={`feature-icon ${feature.color}`}>
                  <feature.icon className="icon" />
                </div>
                <h3 className="feature-title">{feature.name}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cta-content"
          >
            <h2 className="cta-title">Ready to Secure Your Transactions?</h2>
            <p className="cta-description">
              Start using our AI model to protect your transactions today.
            </p>
            <Link to="/detect" className="button button-primary">
              Get Started
              <ArrowRightIcon className="icon" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 