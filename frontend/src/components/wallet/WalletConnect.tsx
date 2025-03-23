import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WalletIcon } from '@heroicons/react/24/outline';

interface WalletConnectProps {
  onConnect?: (address: string) => void;
}

export default function WalletConnect({ onConnect }: WalletConnectProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(false);

  useEffect(() => {
    // Check for MetaMask
    const checkMetaMask = () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        setHasMetaMask(true);
        // Check if already connected
        window.ethereum.request({ method: 'eth_accounts' })
          .then((accounts: string[]) => {
            if (accounts.length > 0) {
              setAddress(accounts[0]);
              setIsConnected(true);
              onConnect?.(accounts[0]);
            }
          })
          .catch(console.error);
      } else {
        setHasMetaMask(false);
      }
    };

    checkMetaMask();
    // Check again after a short delay to ensure MetaMask is loaded
    const timeoutId = setTimeout(checkMetaMask, 1000);
    return () => clearTimeout(timeoutId);
  }, [onConnect]);

  const connectWallet = async () => {
    try {
      setIsLoading(true);
      
      if (!hasMetaMask) {
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      if (!window.ethereum) {
        throw new Error('MetaMask not found');
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      const account = accounts[0];
      setAddress(account);
      setIsConnected(true);
      onConnect?.(account);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Failed to connect wallet. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAddress('');
    setIsConnected(false);
    onConnect?.('');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {!isConnected ? (
        <button
          onClick={connectWallet}
          disabled={isLoading}
          className="button button-secondary flex items-center gap-2"
        >
          <WalletIcon className="icon" />
          {isLoading ? 'Connecting...' : hasMetaMask ? 'Connect Wallet' : 'Install MetaMask'}
        </button>
      ) : (
        <button
          onClick={disconnectWallet}
          className="button button-primary flex items-center gap-2"
        >
          <WalletIcon className="icon" />
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </button>
      )}
    </motion.div>
  );
} 