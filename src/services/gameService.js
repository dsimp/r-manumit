import axios from 'axios';

export const plantTree = async (publicKey) => {
  try {
    const response = await axios.post('/api/plant-tree', { publicKey });
    return response.data;
  } catch (error) {
    console.error('Error planting tree:', error);
    throw error;
  }
};