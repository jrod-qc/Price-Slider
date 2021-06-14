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
        document.getElementById("slider-and-results-wrapper").style.display = "none";
    } else if (fanSelection == "stealth") {
        document.getElementById("trident-models").style.display = "none";
        document.getElementById("stealth-models").style.display = "block";
        document.getElementById("slider-and-results-wrapper").style.display = "none";
    } else {
        alert("Please Select a Fan");
        document.getElementById("trident-models").style.display = "none";
        document.getElementById("stealth-models").style.display = "none";
    }
}

// This is the Trident Selection
function onTridentSelect() {
    // This is the Model 1.5
    var tridentSelection = document.getElementById("trident-models").value;
    if (tridentSelection == "1.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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


// This is the Stealth Selection
function onStealthSelect() {
    // This is the Model 1.5
    var stealthSelection = document.getElementById("stealth-models").value;
    if (stealthSelection == "1.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = 0;
        sliderMonthResults.innerHTML = 0;
        sliderYearResults.innerHTML = 0;

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

// This is the AC Section

var sliderDayRangeResultsAC = document.getElementById("slider-day-results-ac");
var sliderMonthRangeResultsAC = document.getElementById("slider-month-results-ac");
var sliderYearRangeResultsAC = document.getElementById("slider-year-results-ac");
var sliderHoursRangeAC = document.getElementById("slider-hours-range-ac");
var sliderHoursRangeResultsAC = document.getElementById("slider-hours-results-ac");


function onAcKwhSelect() {
    var acKwhSelection = document.getElementById("ac-kwh-selection").value;

    if (acKwhSelection === "3000") {
        document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";

        sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 0;
        sliderDayRangeResultsAC.innerHTML = 0;
        sliderMonthRangeResultsAC.innerHTML = 0;
        sliderYearRangeResultsAC.innerHTML = 0;
        sliderHoursRangeAC.oninput = function() {
            sliderHoursRangeResultsAC.innerHTML = this.value;

            var watts3000 = new fan(3000, 3000, 1000, .35);
            // This is for the day
            sliderDayRangeResultsAC.innerHTML = "$" + Math.round(watts3000.watts / watts3000.kwh * this.value * watts3000.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(watts3000.watts / watts3000.kwh * this.value * 30 * watts3000.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearRangeResultsAC.innerHTML = "$" + Math.round(watts3000.watts / watts3000.kwh * this.value * 365 * watts3000.kwhPrice * 100) / 100;
        }
    } else if (acKwhSelection === "5000") {
        document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";

        sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 0;
        sliderDayRangeResultsAC.innerHTML = 0;
        sliderMonthRangeResultsAC.innerHTML = 0;
        sliderYearRangeResultsAC.innerHTML = 0;

        sliderHoursRangeAC.oninput = function() {
            sliderHoursRangeResultsAC.innerHTML = this.value;

            var watts5000 = new fan(5000, 5000, 1000, .35);
            // This is for the day
            sliderDayRangeResultsAC.innerHTML = "$" + Math.round(watts5000.watts / watts5000.kwh * this.value * watts5000.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(watts5000.watts / watts5000.kwh * this.value * 30 * watts5000.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearRangeResultsAC.innerHTML = "$" + Math.round(watts5000.watts / watts5000.kwh * this.value * 365 * watts5000.kwhPrice * 100) / 100;
        }
    } else if (acKwhSelection === "8000") {
        document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";

        sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 0;
        sliderDayRangeResultsAC.innerHTML = 0;
        sliderMonthRangeResultsAC.innerHTML = 0;
        sliderYearRangeResultsAC.innerHTML = 0;

        sliderHoursRangeAC.oninput = function() {
            sliderHoursRangeResultsAC.innerHTML = this.value;

            var watts8000 = new fan(8000, 8000, 1000, .35);
            // This is for the day
            sliderDayRangeResultsAC.innerHTML = "$" + Math.round(watts8000.watts / watts8000.kwh * this.value * watts8000.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(watts8000.watts / watts8000.kwh * this.value * 30 * watts8000.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearRangeResultsAC.innerHTML = "$" + Math.round(watts8000.watts / watts8000.kwh * this.value * 365 * watts8000.kwhPrice * 100) / 100;
        }
    } else {
        alert("Please Select KWH");
    }
}