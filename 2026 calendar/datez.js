const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const renderCalendar = (year) => {
  const container = document.getElementById("calendar-container");
  for (let month = 0; month < 12; month++) {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);

    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const title = document.createElement("h2");
    title.textContent = monthNames[month];
    monthDiv.appendChild(title);

    const weekdays = document.createElement("div");
    weekdays.className = "weekdays";
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;
      weekdays.appendChild(dayDiv);
    });
    monthDiv.appendChild(weekdays);

    const days = document.createElement("div");
    days.className = "days";
    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement("div");
      days.appendChild(emptyDiv);
    }
    for (let d = 1; d <= totalDays; d++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = d;
      days.appendChild(dayDiv);
    }
    monthDiv.appendChild(days);

    container.appendChild(monthDiv);

    // Add click effect
    monthDiv.addEventListener("click", () => {
      const allMonths = document.querySelectorAll(".month");
      const isActive = monthDiv.classList.contains("active");

      allMonths.forEach(m => {
        m.classList.remove("active");
        m.classList.remove("faded");
      });

      if (!isActive) {
        monthDiv.classList.add("active");
        allMonths.forEach(m => {
          if (m !== monthDiv) {
            m.classList.add("faded");
          }
        });
      }
    });
  }
};

renderCalendar(2026);
