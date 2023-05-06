var result1 = document.getElementById("result1")
var result2 = document.getElementById("result2")
var result3 = document.getElementById("result3")
var result4 = document.getElementById("result4")
var btn = document.getElementById("btn");
var cities = document.getElementById("cities")
var city = document.getElementById("city")
var state = document.getElementById("state")
var stateInput = document.getElementById("stateInput")
var currentState = document.getElementById("currentState")
var table = document.getElementById("table");
var currentCity = document.getElementById("currentCity")
var darkMode = document.getElementById("darkMode");
var body = document.getElementById("body")
var input = document.querySelectorAll("input")
var th = document.querySelectorAll("th")
var td = document.querySelectorAll("td")

var cityBtn = document.getElementById("cityBtn")
window.addEventListener("load", () => {
    fetch('https://api.covid19india.org/v4/min/data.min.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var stateName = data;
            totalStates = Object.keys(stateName)
            for (let i = 0; i < totalStates.length; i++) {
                const ele = totalStates[i];
                state.innerHTML += "<option>" + ele + "</option>"
            }
            stateInput.addEventListener("change", () => {
                var citiyNames = data[`${stateInput.value}`]['districts']
                totalCities = Object.keys(citiyNames);
                cities.innerHTML = ""
                for (let i = 0; i < totalCities.length; i++) {
                    const element = totalCities[i];
                    cities.innerHTML += "<option>" + element + "</option>"
                }
            })


            var cityBtn = document.getElementById("cityBtn")
            cityBtn.addEventListener("click", () => {

                var confirmed = data[`${stateInput.value}`]['districts'][`${city.value}`]['delta']['confirmed'];
                var recovered = data[`${stateInput.value}`]['districts'][`${city.value}`]['delta']['recovered'];
                var deceased = data[`${stateInput.value}`]['districts'][`${city.value}`]['delta']['deceased'];
                var vaccinated = data[`${stateInput.value}`]['districts'][`${city.value}`]['delta']['vaccinated'];
                currentState.innerHTML = stateInput.value
                currentCity.innerHTML = city.value


                if (confirmed == undefined) {
                    result1.innerHTML = "N/A"
                } else {
                    result1.innerHTML = confirmed
                }

                if (recovered == undefined) {
                    result2.innerHTML = "N/A"
                } else {
                    result2.innerHTML = recovered
                }

                if (deceased == undefined) {
                    result3.innerHTML = "N/A"
                } else {
                    result3.innerHTML = deceased
                }

                if (vaccinated == undefined) {
                    result4.innerHTML = "N/A"
                } else {
                    result4.innerHTML = vaccinated
                }
                console.log(confirmed, recovered, deceased, vaccinated);
                table.style.display = "block"
                cities.innerHTML = ""
                city.value = ""
                stateInput.value = ""
            })
        })
        .catch(err => {
            alert("Please Choose Correct State And City")
            city.value = ""
            stateInput.value = ""
        })

})

darkMode.addEventListener("click", () => {
    darkMode.classList.toggle("fa-moon-o")
    body.classList.toggle("dark")
    input[0].classList.toggle("darkInput")
    input[1].classList.toggle("darkInput")
    input[2].classList.toggle("darkInput")
    td[0].classList.toggle("darkTh")
    td[1].classList.toggle("darkTd")
    td[2].classList.toggle("darkTd")
    td[3].classList.toggle("darkTd")
    td[4].classList.toggle("darkTd")
    td[5].classList.toggle("darkTd")
    th[0].classList.toggle("darkTh")
    th[1].classList.toggle("darkTh")
    th[2].classList.toggle("darkTh")
    th[3].classList.toggle("darkTh")
    th[4].classList.toggle("darkTh")
    th[5].classList.toggle("darkTh")
})