//Save form data to session storage
export function saveFormData(formData) {
  const savedData = JSON.parse(sessionStorage.getItem('poultryData') || '[]');
  savedData.push(formData);
  sessionStorage.setItem('poultryData', JSON.stringify(savedData));
}

// Display saved 
export function displaySavedData() {
  const savedData = JSON.parse(sessionStorage.getItem('poultryData') || '[]').reverse();
  const summaryCards = document.getElementById('summaryCards');
  if (summaryCards) {
    let savedDataContainer = document.getElementById('savedDataContainer');
    if (!savedDataContainer) {
      savedDataContainer = document.createElement('div');
      savedDataContainer.id = 'savedDataContainer';
      summaryCards.parentNode.insertBefore(savedDataContainer, summaryCards);
    }
    savedDataContainer.innerHTML = `
      ${savedData.map(item => `
        <div class="poultry-data-box">
          <h3>Poultry Data of ${item.timestamp}</h3>
          <p><strong>Count:</strong> ${item.count}</p>
          <p><strong>Eggs Today:</strong> ${item.eggsToday}</p>
          <p><strong>Feed (kg):</strong> ${item.feedConsumed}</p>
          <p><strong>Avg Weight (kg):</strong> ${item.growthWeight}</p>
        </div>
      `).join('')}
    `;
  }
}

//Collect form data
export function collectFormData() {
  const form = document.getElementById('addDataForm');
  if (form) {
    return {
      count: document.getElementById('count').value,
      eggsToday: document.getElementById('eggs').value,
      feedConsumed: document.getElementById('feed').value,
      growthWeight: document.getElementById('weight').value,
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })
    };
  }
  console.error('Add form not found');
  return null;
}