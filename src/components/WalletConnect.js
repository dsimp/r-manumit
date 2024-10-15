import React, { useState } from 'react';
import { Keypair, Server } from '@stellar/stellar-sdk';

const server = new Server('https://horizon-testnet.stellar.org');

const WalletConnect = () => {
  const [publicKey, setPublicKey] = useState(null);
  const [secretKey, setSecretKey] = useState(null);

  const createWallet = () => {
    const pair = Keypair.random();
    setPublicKey(pair.publicKey());
    setSecretKey(pair.secret()); // You'd want to store this securely!
  };

  return (
    <div>
      <button onClick={createWallet}>Create Wallet</button>
      {publicKey && <p>Public Key: {publicKey}</p>}
      {secretKey && <p>Secret Key: {secretKey}</p>}
    </div>
  );
};

export default WalletConnect;