
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
let currentIndex = 0;
let autoSwitchTimer;

function switchTab(index) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    tabButtons[index].classList.add('active');

    setTimeout(() => {
        tabPanes[index].classList.add('active');
    }, 50);

    resetAutoSwitch();
}

function autoSwitch() {
    currentIndex = (currentIndex + 1) % tabButtons.length;
    switchTab(currentIndex);
}

function resetAutoSwitch() {
    clearInterval(autoSwitchTimer);
    autoSwitchTimer = setInterval(autoSwitch, 5000);
}
tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        switchTab(index);
    });
});
switchTab(0);
autoSwitchTimer = setInterval(autoSwitch, 5000);
const totalSeconds = 60;
let currentSeconds = 0;

const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const formattedMinutes = (14 + minutes).toString().padStart(2, '0');
    const formattedSeconds = secondsRemaining.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
function updateTimer() {
    timerElement.textContent = formatTime(currentSeconds);
    const progressPercentage = (currentSeconds / totalSeconds) * 100;
    progressBar.style.width = progressPercentage + '%';
    currentSeconds++;
    if (currentSeconds > totalSeconds) {
        clearInterval(timerInterval);
    }
}
const timerInterval = setInterval(updateTimer, 1000);
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


