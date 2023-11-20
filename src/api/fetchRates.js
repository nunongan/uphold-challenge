import SDK from './Initialization';

export const fetchRates = async (currencyOne) => {
  try {
    const response = await SDK.getTicker(`${currencyOne}`);
    return response;
  } catch (error) {
    console.error('Error fetching rates:', error);
    throw error;
  }
};
