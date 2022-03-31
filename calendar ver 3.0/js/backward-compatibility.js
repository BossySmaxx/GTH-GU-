const monthsWrapper = document.querySelector(".months-wrapper");
const yearWrapper = document.querySelector(".year-wrapper");


if (navigator.userAgent.indexOf('Chrome') === -1) {
    monthsWrapper.style.background = "#131C3B";
    yearWrapper.style.background = "#131C3B";

    monthsWrapper.style.border = "1px solid #21346b76";
    yearWrapper.style.border = "1px solid #21346b76";

}