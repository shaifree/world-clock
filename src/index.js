function refreshTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYork = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYork.format("MMMM D, YYYY");
  newYorkTime.innerHTML = newYork.format("h:mm:ss [<small>]A[</small>]");

  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let paris = moment().tz("Europe/Paris");

  parisDate.innerHTML = paris.format("MMMM D, YYYY");
  parisTime.innerHTML = paris.format("h:mm:ss [<small>]A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyo = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyo.format("MMMM D, YYYY");
  tokyoTime.innerHTML = tokyo.format("h:mm:ss [<small>]A[</small>]");
}

refreshTime();
setInterval(refreshTime, 1000);
