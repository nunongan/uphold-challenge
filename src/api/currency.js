import { fetchRates } from './fetchRates';

export const fetchRatesData = async (currency) => {
  try {
    const response = await fetchRates(currency);
    return response;
  } catch (error) {
    console.error('Error fetching rates:', error);
  }
};
