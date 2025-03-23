import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { detectFraud } from '../../api/fraudDetection';

interface TransactionData {
  TransactionID: string;
  TransactionDT: string;
  TransactionAmt: number;
  ProductCD: string;
  card1: number;
  card2: number;
  card3: number;
  card4: string;
  card5: number;
  addr1: string;
  dist1: number;
  deviceType: string;
  browser: string;
  os: string;
  dayOfWeek: number;
}

const FraudDetectionForm: React.FC = () => {
  const [formData, setFormData] = useState<TransactionData>({
    TransactionID: '',
    TransactionDT: new Date().toISOString(),
    TransactionAmt: 0,
    ProductCD: 'W',
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 'discover',
    card5: 0,
    addr1: 'IN',
    dist1: 1,
    deviceType: 'desktop',
    browser: 'chrome',
    os: 'windows',
    dayOfWeek: new Date().getDay() + 1
  });
  const [result, setResult] = useState<{ isFraudulent: boolean; confidence: number; riskScore: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await detectFraud(formData);
      setResult(response);
    } catch (err) {
      setError('Failed to analyze transaction. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['TransactionAmt', 'card1', 'card2', 'card3', 'card5', 'dist1', 'dayOfWeek'].includes(name) 
        ? parseFloat(value) || 0 
        : value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Transaction Analysis</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Transaction Details Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Transaction Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input
                  type="number"
                  name="TransactionAmt"
                  value={formData.TransactionAmt}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Code</label>
                <select
                  name="ProductCD"
                  value={formData.ProductCD}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="W">W</option>
                  <option value="C">C</option>
                  <option value="H">H</option>
                  <option value="R">R</option>
                  <option value="S">S</option>
                </select>
              </div>
            </div>
          </div>

          {/* Card Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Card Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Value 1</label>
                <input
                  type="number"
                  name="card1"
                  value={formData.card1}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Value 2</label>
                <input
                  type="number"
                  name="card2"
                  value={formData.card2}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Value 3</label>
                <input
                  type="number"
                  name="card3"
                  value={formData.card3}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Type</label>
                <select
                  name="card4"
                  value={formData.card4}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="discover">Discover</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Value 5</label>
                <input
                  type="number"
                  name="card5"
                  value={formData.card5}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>

          {/* Device and Location Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Device & Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance</label>
                <input
                  type="number"
                  name="dist1"
                  value={formData.dist1}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Device Type</label>
                <select
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="desktop">Desktop</option>
                  <option value="mobile">Mobile</option>
                  <option value="tablet">Tablet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Browser</label>
                <select
                  name="browser"
                  value={formData.browser}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="chrome">Chrome</option>
                  <option value="firefox">Firefox</option>
                  <option value="safari">Safari</option>
                  <option value="edge">Edge</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Operating System</label>
                <select
                  name="os"
                  value={formData.os}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="windows">Windows</option>
                  <option value="macos">macOS</option>
                  <option value="linux">Linux</option>
                  <option value="android">Android</option>
                  <option value="ios">iOS</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200"
          >
            {loading ? 'Analyzing...' : 'Analyze Transaction'}
          </button>
        </form>

        {error && (
          <div className="mt-8 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gray-50 rounded-lg border"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analysis Result</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Status</span>
                <span className={`font-semibold ${result.isFraudulent ? 'text-red-600' : 'text-green-600'}`}>
                  {result.isFraudulent ? 'Potentially Fraudulent' : 'Legitimate'}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Confidence</span>
                <span className="font-semibold text-blue-600">
                  {(result.confidence * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Risk Score</span>
                <span className="font-semibold text-orange-600">
                  {(result.riskScore * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FraudDetectionForm; 