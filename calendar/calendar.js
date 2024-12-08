function generateCalendar(year, month) {
    const calendarDays = document.querySelector('.days');
    const monthYear = document.querySelector('.month-year');

    // Clear previous days
    calendarDays.innerHTML = '';

    // Get month and year
    const date = new Date(year, month);
    const monthName = date.toLocaleString('default', { month: 'long' });
    monthYear.textContent = `${monthName} ${year}`;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Calculate offset for Monday as the first day of the week
    const offset = (firstDay === 0) ? 6 : firstDay - 1; // Adjust so Monday = 0, Sunday = 6

    // Today's date for comparison
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

    // Add empty divs for alignment
    for (let i = 0; i < offset; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        // Check if the day is today
        const isToday = isCurrentMonth && day === today.getDate();
        const highlightClass = isToday ? 'highlight' : '';
        calendarDays.innerHTML += `<div class="${highlightClass}">${day}</div>`;
    }
}

// Initialize calendar
const today = new Date();
generateCalendar(today.getFullYear(), today.getMonth());

let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

document.getElementById('prev').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById('next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});
