const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg",
    "color": "red-font"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg",
    "color": "yellow-font"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg",
    "color": "green-font"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg",
    "color": "blue-font"
  }
]

const resultsList = document.getElementById("results-list");
    
data.forEach(item => {
  const li = document.createElement("li");
    
  li.innerHTML = `
    <div class="result-container">
      <img src="${item.icon}" alt="${item.category} icon">
      <span class="${item.color}">${item.category}</span>
    </div>
    <div class="text-box">
      <span class="black-font">${item.score}</span>
      <span>/</span>
      <span>100</span>
    </div>
  `;
    
  resultsList.appendChild(li);
});