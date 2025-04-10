const calendarContainer = document.getElementById('calendar');
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function createMonth(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthDiv = document.createElement('div');
  monthDiv.className = 'month';

  const title = document.createElement('h2');
  title.textContent = monthNames[month];
  monthDiv.appendChild(title);

  const weekdaysDiv = document.createElement('div');
  weekdaysDiv.className = 'weekdays';
  weekdays.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    weekdaysDiv.appendChild(dayDiv);
  });
  monthDiv.appendChild(weekdaysDiv);

  const daysDiv = document.createElement('div');
  daysDiv.className = 'days';

  for (let i = 0; i < firstDay; i++) {
    daysDiv.appendChild(document.createElement('div'));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    daysDiv.appendChild(dayDiv);
  }

  monthDiv.appendChild(daysDiv);
  return monthDiv;
}

function generateCalendar(year) {
  for (let i = 0; i < 12; i++) {
    const month = createMonth(i, year);
    calendarContainer.appendChild(month);
  }
}

generateCalendar(2026);
