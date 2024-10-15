import React, { useState } from 'react';
import { plantTree } from '../services/gameService'; // API call to backend
import WalletBalance from './WalletBalance'; // Reuse wallet balance display

const TreePlanting = ({ publicKey }) => {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePlantTree = async () => {
    setLoading(true);
    try {
      const result = await plantTree(publicKey); // Call backend to record tree planting
      if (result.success) {
        setTreesPlanted(treesPlanted + 1);
        console.log('Tree planted! Reward earned.');
      }
    } catch (error) {
      console.error('Failed to plant tree:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Trees Planted: {treesPlanted}</h3>
      <button onClick={handlePlantTree} disabled={loading}>
        {loading ? 'Planting...' : 'Plant a Tree'}
      </button>
      <WalletBalance publicKey={publicKey} />
    </div>
  );
};

export default TreePlanting;