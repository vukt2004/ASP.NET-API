const API_URL = 'http://localhost:5294/api';

export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${API_URL}/Pokemon`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    return error;
  }
};