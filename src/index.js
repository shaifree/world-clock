function refreshTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date");
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYork = moment().tz("America/New_York");

    newYorkDate.innerHTML = newYork.format("MMMM D, YYYY");
    newYorkTime.innerHTML = newYork.format("h:mm:ss [<small>]A[</small>]");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    let paris = moment().tz("Europe/Paris");

    parisDate.innerHTML = paris.format("MMMM D, YYYY");
    parisTime.innerHTML = paris.format("h:mm:ss [<small>]A[</small>]");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyo = moment().tz("Asia/Tokyo");

    tokyoDate.innerHTML = tokyo.format("MMMM D, YYYY");
    tokyoTime.innerHTML = tokyo.format("h:mm:ss [<small>]A[</small>]");
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-location") {
	cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
	 <div class="city-date-time">
        <div class="city-date">
          <h2>${cityName}<h2>
          <p class="date">${cityTime.format("MMMM D, YYYY")}</p>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>`;
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", changeCity);

refreshTime();
setInterval(refreshTime, 1000);
