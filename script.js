var sliderHoursRange = document.getElementById("slider-hours-range");
var sliderHoursRangeResults = document.getElementById("slider-hours-results");
var sliderDayRangeResults = document.getElementById("slider-day-results");
var sliderMonthResults = document.getElementById("slider-month-results");
var sliderYearResults = document.getElementById("slider-year-results");

// This is the Template for the fan Object

function fan(model, watts, kwh, kwhPrice) {
    this.model = model;
    this.watts = watts;
    this.kwh = kwh;
    this.kwhPrice = kwhPrice;
}

// this is the Fan Selection
function onFanSelect() {
    var fanSelection = document.getElementById("fan-selection").value;
    if (fanSelection == "trident") {
        document.getElementById("trident-models").style.display = "block";
        document.getElementById("stealth-models").style.display = "none";
    } else if (fanSelection == "stealth") {
        document.getElementById("trident-models").style.display = "none";
        document.getElementById("stealth-models").style.display = "block";


    } else {
        alert("Please Select a Fan");
    }
}

// This is the Trident Selection


function onTridentSelect() {
    // This is the Model 1.5
    var tridentSelection = document.getElementById("trident-models").value;
    if (tridentSelection == "1.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var trident = new fan(1.5, 115, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


            }
            // This is the Model 2.5
    } else if (tridentSelection == "2.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var trident = new fan(2.5, 244, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


            }
            // This is the Model 3.3
    } else if (tridentSelection == "3.3") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var trident = new fan(3.3, 323, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


            }
            // This is the Model 4.8
    } else if (tridentSelection == "4.8") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(4.8, 555, 1000, .35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        }

        // This is the Model 5.5
    } else if (tridentSelection == "5.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var trident = new fan(5.5, 632, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


            }
            // This is the Model 6.0
    } else if (tridentSelection == "6.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var trident = new fan(6.0, 777, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


            }
            // This is the Model 7.0
    } else if (tridentSelection == "7.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(7.0, 1147, 1000, .35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        }
    } else {
        alert("Please Make A Model Selection");
    }
}

function onStealthSelect() {
    // This is the Model 1.5
    var stealthSelection = document.getElementById("stealth-models").value;
    if (stealthSelection == "1.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var stealth = new fan(1.5, 66.7, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


            }
            // This is the Model 2.5
    } else if (stealthSelection == "2.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var stealth = new fan(2.5, 157, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


            }
            // This is the Model 3.3
    } else if (stealthSelection == "3.3") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var stealth = new fan(3.3, 264, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


            }
            // This is the Model 4.8
    } else if (stealthSelection == "4.8") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(4.8, 408, 1000, .35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        }

        // This is the Model 5.5
    } else if (stealthSelection == "5.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var stealth = new fan(5.5, 490, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


            }
            // This is the Model 6.0
    } else if (stealthSelection == "6.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
                sliderHoursRangeResults.innerHTML = this.value;

                var stealth = new fan(6.0, 462, 1000, .35);
                // This is for the day
                sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

                // This is for the Month
                sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

                // This is for the Year
                sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


            }
            // This is the Model 7.0
    } else if (stealthSelection == "7.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value;
        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(7.0, 725, 1000, .35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        }
    } else {
        alert("Please Make A Model Selection");
    }
}