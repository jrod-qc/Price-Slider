var sliderHoursRange = document.getElementById("slider-hours-range");
var sliderHoursRangeResults = document.getElementById("slider-hours-results");
var sliderDayRangeResults = document.getElementById("slider-day-results");
var sliderMonthResults = document.getElementById("slider-month-results");
var sliderYearResults = document.getElementById("slider-year-results");
var kwattPrice = .35;

sliderHoursRangeResults.innerHTML = sliderHoursRange.value;


sliderHoursRange.oninput = function() {
    // sliderHoursRangeResults.innerHTML = "$ " + Math.round(kwattPrice * this.value * 100) / 100;
    sliderHoursRangeResults.innerHTML = this.value;
    // sliderKilowattsResults.innerHTML = this.value * 1000;
}