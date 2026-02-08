// import { initializeUI } from './dashBoard.mjs';
import { growthModule } from './growthModule.mjs';
import { isAuthenticated, getUser, handleAuthCallback } from './auth.js';

document.addEventListener('DOMContentLoaded', async () => {
  await handleAuthCallback();
  if (await isAuthenticated()) {
    const apiData = await growthModule.fetchChickenWeights();
    document.getElementById('growthData').innerHTML = `
      <p>API Data: Average chicken weight ${apiData.growthWeight}kg (${apiData.source})</p>
    `;
    const growthForm = document.getElementById('trackGrowthForm');
    if (growthForm) {
      growthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
          count: document.getElementById('count').value,
          growthWeight: document.getElementById('weight').value
        };
        if (growthModule && growthModule.trackGrowth) {
          growthModule.trackGrowth(formData);
        } else {
          console.error('growthModule or trackGrowth not available');
        }
      });
    } else {
      console.error('Growth form not found');
    }
  } else {
      console.error('Growth form not found');
  }
  const user = await getUser();
  if (user) document.querySelector('header h1').textContent = `Growth Tracking, ${user.name}!`;
});