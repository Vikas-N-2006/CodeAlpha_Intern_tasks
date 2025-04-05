const calculateBtn = document.getElementById('calculateBtn');
const resultContainer = document.getElementById('result-container');
const ageResult = document.getElementById('age-result');
const milestoneContainer = document.getElementById('milestone-container');
const darkModeToggle = document.getElementById('darkModeToggle');
const birthdateInput = document.getElementById('birthdate');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

function getMilestone(age) {
    const milestones = [
        { max: 1, text: "🍼 Tiny Explorer Begins!" },
        { max: 5, text: "🧸 Curious Little Adventurer" },
        { max: 13, text: "🚲 Childhood Wonder Unleashed" },
        { max: 20, text: "🌈 Teenage Dreams Taking Flight" },
        { max: 30, text: "🚀 Young Adult Transformation" },
        { max: 40, text: "💼 Peak of Wisdom and Success" },
        { max: 50, text: "🧠 Mastering Life's Complexities" },
        { max: 60, text: "🍷 Reflective Golden Years" },
        { max: 70, text: "🏖️ Wisdom's Serene Horizon" },
        { max: Infinity, text: "💖 Lifetime of Incredible Memories" }
    ];

    return milestones.find(m => age < m.max).text;
}

function calculateLifeJourney() {
    const selectedDate = birthdateInput.value.trim();

    // Validation
    if (!selectedDate) {
        alert('Please enter a date of birth');
        return;
    }

    // Parse the date with more robust checking
    const dateParts = selectedDate.split('-');
    if (dateParts.length !== 3) {
        alert('Please enter date in DD-MM-YYYY format');
        return;
    }

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is 0-indexed
    const year = parseInt(dateParts[2], 10);

    // Validate each part of the date
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Invalid date format. Please use DD-MM-YYYY');
        return;
    }

    const birthDate = new Date(year, month, day);
    const today = new Date();

    // Additional date validation
    if (birthDate.getDate() !== day ||
        birthDate.getMonth() !== month ||
        birthDate.getFullYear() !== year) {
        alert('Invalid date. Please check your input.');
        return;
    }

    if (birthDate > today) {
        alert('Birth date cannot be in the future');
        return;
    }

    // Detailed age calculation
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 +
        (today.getMonth() - birthDate.getMonth());
    const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

    // Display result
    ageResult.innerHTML = `
        Your Age is : <span class="text-yellow-200">${age}</span> Years
        <div class="text-base mt-2 opacity-75 font-size-20px">
            (${ageInMonths} months | ${ageInDays} days)
        </div>
    `;

    // Add life milestone
    milestoneContainer.textContent = getMilestone(age);

    // Animate result
    resultContainer.style.opacity = '1';
    resultContainer.style.transform = 'translateY(0)';

    // Add reload button
    const reloadBtn = document.createElement('button');
    reloadBtn.textContent = 'Calculate Again';
    reloadBtn.classList.add('reload-btn', 'mt-4', 'w-full', 'py-2', 'bg-blue-500', 'text-white', 'rounded');
    reloadBtn.addEventListener('click', () => {
        location.reload();
    });

    resultContainer.appendChild(reloadBtn);
}

// Initialize Flatpickr on birthdate input
const fp = flatpickr(birthdateInput, {
    dateFormat: 'd-m-Y',
    allowInput: true,
    maxDate: 'today',
    onChange: function (selectedDates, dateStr, instance) {
        // Automatically calculate age when date is selected
        calculateLifeJourney();
    }
});

// Calculate on button click
calculateBtn.addEventListener('click', calculateLifeJourney);

function disable(x) {
    x.disabled = true;
}

// Calculate on Enter key press
birthdateInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculateLifeJourney();
    }
});

// Initial setup to show an example or prompt
window.addEventListener('load', () => {
    // Set a default message if no date is entered
    resultContainer.style.opacity = '1';
    resultContainer.style.transform = 'translateY(0)';
    ageResult.innerHTML = `
        <span class="text-base">Select your birthdate to discover your life journey!</span>
    `;
});
