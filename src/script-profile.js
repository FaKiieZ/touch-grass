let currentXP = parseInt(localStorage.getItem('currentXP')) || 0;
let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;
const xpPerLevel = 100;

function collectXP(xp, elementId) {
    currentXP += xp;
    if (currentXP >= xpPerLevel) {
        currentXP -= xpPerLevel;
        currentLevel++;
        localStorage.setItem('currentXP', currentXP);
        localStorage.setItem('currentLevel', currentLevel);
    }
    document.getElementById(elementId).style.display = 'none';
    updateProgressBar();
}

function updateProgressBar() {
    const progressElement = document.getElementById('progress');
    const levelElement = document.getElementById('level');
    const progressPercentage = (currentXP / xpPerLevel) * 100;
    progressElement.style.width = progressPercentage + '%';
    levelElement.textContent = 'Level ' + currentLevel;
}

updateProgressBar();