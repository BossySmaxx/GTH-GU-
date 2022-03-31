

const datePills = document.querySelectorAll(".date-pill");
const calDates = calendarWrapper.childNodes;

runHighlighter();

function runHighlighter() {
    /* Not in use right now but will be later --------------------------------------

    calDates.forEach(clickableDateField => {
        clickableDateField.addEventListener("click", (e) => {
            let date1 = fetchDateOnclick(e);
            datePills.forEach(tempDate => {
                console.log(date1, tempDate);
            });
        });
    });
    */

    calDates.forEach(clickableDateField => {
        if (parseInt(clickableDateField.textContent) === new Date().getDate() && months.indexOf(monthLabel.textContent) === new Date().getMonth() && parseInt(yearLabel.textContent) === new Date().getFullYear()  ) {
            clickableDateField.classList.add("today");
        }

        let date1 = clickableDateField.textContent + " " + monthLabel.textContent + " " + yearLabel.textContent;
        datePills.forEach(tempDate => {
            // console.log(new Date(date1).getTime() === new Date(tempDate.textContent).getTime() );
            if (new Date(date1).getTime() === new Date(tempDate.textContent).getTime() ) {
                // console.log(clickableDateField);
                clickableDateField.classList.add("active");
                tempDate.textContent.concat("#");
                console.log(tempDate.textContent.replaceAll(" ", "-"));
                
            }
        })
    });
    
    /* Not in use right now but maybe in future -----------------------------------------
        function fetchDateOnclick (e) {
            let clickableMonth = monthLabel.textContent;
            let clickableYear = yearLabel.textContent;
            let fetchedDate = {
                date: e.target.textContent, 
                month: monthLabel.textContent, 
                year: yearLabel.textContent
            }
            let dateStr = fetchedDate.date.toString() + fetchedDate.month.toString() + fetchedDate.year.toString()
            return dateStr;
        }
    */

}

