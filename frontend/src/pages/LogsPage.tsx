import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

interface Transaction {
  id: string;
  timestamp: string;
  transactionAmt: number;
  productCD: string;
  card1: string;
  addr1: string;
  deviceType: string;
  isFraudulent: boolean;
  confidence: number;
  riskScore: number;
}

export default function LogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'fraudulent' | 'legitimate'>('all');
  const [sortField, setSortField] = useState<keyof Transaction>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Mock data - replace with actual API call
  const transactions: Transaction[] = [
    {
      id: '1',
      timestamp: '2024-03-20T10:30:00',
      transactionAmt: 150.00,
      productCD: 'W',
      card1: 'credit',
      addr1: 'US',
      deviceType: 'mobile',
      isFraudulent: false,
      confidence: 0.95,
      riskScore: 0.05,
    },
    {
      id: '2',
      timestamp: '2024-03-20T09:15:00',
      transactionAmt: 2500.00,
      productCD: 'H',
      card1: 'debit',
      addr1: 'UK',
      deviceType: 'desktop',
      isFraudulent: true,
      confidence: 0.88,
      riskScore: 0.92,
    },
    // Add more mock transactions as needed
  ];

  const filteredTransactions = transactions
    .filter(transaction => {
      const matchesSearch = 
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.productCD.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.card1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.addr1.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = 
        filter === 'all' ||
        (filter === 'fraudulent' && transaction.isFraudulent) ||
        (filter === 'legitimate' && !transaction.isFraudulent);

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const direction = sortDirection === 'asc' ? 1 : -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * direction;
      }
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * direction;
      }
      return 0;
    });

  const toggleSort = (field: keyof Transaction) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="logs-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="logs-content"
        >
          <h1 className="page-title">Transaction History</h1>
          <p className="page-description">
            View and analyze transaction history with IEEE-CIS model predictions.
          </p>

          <div className="logs-filters">
            <div className="search-box">
              <DocumentTextIcon className="icon" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={`filter-button ${filter === 'fraudulent' ? 'active' : ''}`}
                onClick={() => setFilter('fraudulent')}
              >
                Fraudulent
              </button>
              <button
                className={`filter-button ${filter === 'legitimate' ? 'active' : ''}`}
                onClick={() => setFilter('legitimate')}
              >
                Legitimate
              </button>
            </div>
          </div>

          <div className="logs-table-container">
            <table className="logs-table">
              <thead>
                <tr>
                  <th onClick={() => toggleSort('timestamp')} className="sortable">
                    Timestamp
                    {sortField === 'timestamp' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th onClick={() => toggleSort('transactionAmt')} className="sortable">
                    Amount
                    {sortField === 'transactionAmt' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th onClick={() => toggleSort('productCD')} className="sortable">
                    Product
                    {sortField === 'productCD' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th onClick={() => toggleSort('card1')} className="sortable">
                    Card Type
                    {sortField === 'card1' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th onClick={() => toggleSort('addr1')} className="sortable">
                    Location
                    {sortField === 'addr1' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th onClick={() => toggleSort('deviceType')} className="sortable">
                    Device
                    {sortField === 'deviceType' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th onClick={() => toggleSort('riskScore')} className="sortable">
                    Risk Score
                    {sortField === 'riskScore' && (
                      sortDirection === 'asc' ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />
                    )}
                  </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{new Date(transaction.timestamp).toLocaleString()}</td>
                    <td>${transaction.transactionAmt.toFixed(2)}</td>
                    <td>{transaction.productCD}</td>
                    <td>{transaction.card1}</td>
                    <td>{transaction.addr1}</td>
                    <td>{transaction.deviceType}</td>
                    <td>
                      <div className="risk-score">
                        {(transaction.riskScore * 100).toFixed(1)}%
                        <div 
                          className="risk-bar"
                          style={{ width: `${transaction.riskScore * 100}%` }}
                        />
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${transaction.isFraudulent ? 'fraudulent' : 'legitimate'}`}>
                        {transaction.isFraudulent ? 'Fraudulent' : 'Legitimate'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 