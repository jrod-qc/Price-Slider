var sliderHoursRange = document.getElementById("slider-hours-range");
var sliderHoursRangeResults = document.getElementById("slider-hours-results");
var sliderPriceRangeResults = document.getElementById("slider-price-results");
var kwattPrice = .30;

sliderHoursRangeResults.innerHTML = sliderHoursRange.value;


sliderHoursRange.oninput = function() {
    sliderPriceRangeResults.innerHTML = "$ " + Math.round(kwattPrice * this.value * 100) / 100 + " KiloWatts";
    sliderHoursRangeResults.innerHTML = this.value;
}