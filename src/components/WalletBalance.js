import React, { useEffect, useState } from 'react';
import { Server } from '@stellar/stellar-sdk';

const server = new Server('https://horizon-testnet.stellar.org');

const WalletBalance = ({ publicKey }) => {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    const fetchBalances = async () => {
      const account = await server.loadAccount(publicKey);
      setBalances(account.balances);
    };

    if (publicKey) {
      fetchBalances();
    }
  }, [publicKey]);

  return (
    <div>
      <h3>Wallet Balances</h3>
      {balances.length > 0 ? (
        balances.map((balance, idx) => (
          <p key={idx}>Asset: {balance.asset_type}, Balance: {balance.balance}</p>
        ))
      ) : (
        <p>No balances available</p>
      )}
    </div>
  );
};

export default WalletBalance;