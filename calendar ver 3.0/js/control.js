
let calStatus = true;
calendarBtn.addEventListener("click", (e) => {
    if (calStatus) {
        calendarPane.style.display = "flex";
        calendarBtn.classList.add("fa-times");
        calendarBtn.classList.remove('fa-calendar');
        calStatus = false;  
    } else {
        calendarPane.style.display = "none";
        calendarBtn.classList.add("fa-calendar");
        calendarBtn.classList.remove('fa-times');
        calStatus = true;  
    }
});

monthLabel.textContent = months[date.getMonth()];

let monthClickStatus = true;

monthLabel.addEventListener("click", (e) => {
    if (monthClickStatus) {
        monthSelector.classList.add("animated");
        monthClickStatus = false;
    } else {
        monthSelector.classList.remove("animated");
        monthClickStatus = true;
    }
    e.target.nextElementSibling.addEventListener("click", (e) => {
        let dateObj = dateObject(parseInt(fetchMonthNumber(monthLabel.textContent)), yearLabel.textContent);
        renderSelectedCalendar(dateObj.numOfDays, dateObj.weekDay);
        monthClickStatus = true;
        monthSelector.classList.remove("animated");

        runHighlighter();
    });
});

let yearClickStatus = true;
yearLabel.addEventListener("click", (e) => {
    if (yearClickStatus) {
        yearSelector.classList.add("animated");
        yearClickStatus = false;
    } else {
        yearSelector.classList.remove("animated");
        yearClickStatus = true;
    }

    e.target.nextElementSibling.addEventListener("click", (e) => {
        let dateObj = dateObject(parseInt(fetchMonthNumber(monthLabel.textContent.trim())), yearLabel.textContent);
        console.log(dateObj);
        renderSelectedCalendar(dateObj.numOfDays, dateObj.weekDay);
        yearClickStatus = true;
        yearSelector.classList.remove("animated");
        runHighlighter();
    });
});

// month selector click event -------------------------------------
monthSelector.addEventListener('click', (e) => {
    monthLabel.textContent = e.target.textContent;
});

// year selector click event -------------------------------------
yearSelector.addEventListener('click', (e) => {
    yearLabel.textContent = e.target.textContent;
});

function fetchMonthNumber(monthName) {
    const monthsArr = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let monthString = monthName.toLowerCase();
    for (let i = 0; i < monthsArr.length; i++) {
        if (monthString === monthsArr[i]) {
            return i+1;
        }
    }
}

const newsCard = document.querySelectorAll(".news-card");

// date scrolling to inner cards ------------------------------------------------------------------------
document.querySelectorAll(".news-card").forEach(card => {
    card.setAttribute("id", card.querySelector(".date-pill").textContent.replaceAll(" ", "-"));
});

