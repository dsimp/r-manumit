import axios from 'axios';

export const distributeRewards = async (players) => {
  try {
    const response = await axios.post('/api/contest/distribute-rewards', { players });
    return response.data;
  } catch (error) {
    console.error('Error distributing rewards', error);
  }
};