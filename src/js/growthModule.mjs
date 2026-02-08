export const growthModule = {

  async fetchChickenWeights(year = 2025) {
  const url = `https://quickstats.nass.usda.gov/api/api_GET/?commodity_desc=BROILERS&statisticcat_desc=WEIGHT&agg_level_desc=NATIONAL&year=${year}&format=JSON`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('USDA API request failed');
    const data = await response.json();
    const weight = data.data[0]?.Value || 'N/A';
    console.log(`Fetched average chicken weight: ${weight} lbs`);
    return { growthWeight: (parseFloat(weight) * 0.4536).toFixed(2) || 'N/A', source: 'USDA NASS API' };
  } catch (error) {
    console.error('USDA API Error:', error);
    return { growthWeight: '1.13', source: 'Fallback (USDA avg)' };
  }
}
};