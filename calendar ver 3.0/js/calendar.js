const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const calendarBtn = document.querySelector('.calendar-btn');
const calendarPane = document.querySelector(".calendar-container");
const monthLabel = document.querySelector(".label-month");
const yearLabel = document.querySelector(".label-year");
const monthSelector = document.querySelector(".months-wrapper");
const yearSelector = document.querySelector(".year-wrapper");

function firstRun () {
    const day = document.querySelector(".calendar-header .date");
    const month = document.querySelector(".calendar-header .month");
    const year = document.querySelector(".calendar-header .year");

    day.textContent = new Date().getDate();
    month.textContent = months[new Date().getMonth()];
    year.textContent = new Date().getFullYear();

    monthLabel.textContent = months[new Date().getMonth()];
    yearLabel.textContent = new Date().getFullYear();

}
firstRun();

const calendarWrapper = document.querySelector('.calendar-wrapper');

let date = new Date();
let currentDate = date.getDate();
let numOfDaysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0).getDate();
let startWeekDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1, 0).getDay();

// console.log(numOfDaysInCurrentMonth, startWeekDayOfCurrentMonth)

renderCalendar();

function dateField(dateArg) {
    
    const dateField = document.createElement('span');
    const hyperLink = document.createElement('a');
    
    dateField.classList.add('field');
    if (dateArg === '  ') {
    } else {
        dateField.classList.add('date-field');
    } 
    
    dateField.appendChild(hyperLink);
    hyperLink.setAttribute("href",  "#"+ dateArg.toString().concat("-").concat(monthLabel.textContent.toLowerCase()).concat("-").concat(yearLabel.textContent));
    // hyperLink.textContent = dateArg.toString().length <= 1?"0"+dateArg.toString():dateArg;
    hyperLink.textContent = dateArg.toString().length <= 1?"0"+dateArg.toString():dateArg;

    return dateField;
}

function renderCalendar() {
    for (let i = 0; i < numOfDaysInCurrentMonth + startWeekDayOfCurrentMonth; i++) {
        if (i < startWeekDayOfCurrentMonth) {
            calendarWrapper.appendChild(dateField("  "));
        } else {
            calendarWrapper.appendChild(dateField(i-startWeekDayOfCurrentMonth+1));
        }
    }
}

function renderSelectedCalendar (numOfDays, startWeekDay) {
    calendarWrapper.innerHTML = "";
    for (let i = 0; i < numOfDays + startWeekDay; i++) {
        if (i < startWeekDay) {
            calendarWrapper.appendChild(dateField("  "));
        } else {
            calendarWrapper.appendChild(dateField(i-startWeekDay+1));
        }
    }
}

function dateObject(month, year) {
    let selectedDate = new Date(year, month, 0, 0);
    let numOfDaysInSelectedMonth = selectedDate.getDate();
    let startWeekDayOfSelectedMonth = new Date(year, month-1, 1, 0).getDay();

    return {
        numOfDays: numOfDaysInSelectedMonth, 
        weekDay: startWeekDayOfSelectedMonth , 
        dateStr: selectedDate
    }
}

// console.log(dateObject(3, 2022));