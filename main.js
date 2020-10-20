const api = {
  key: "dcc6a84298c73203bd82064db36695fb",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&appid=${api.key}&units=metric`).then(
    (weather) => {
      return console.log(
        weather.json().then((result) => dysplayResults(result))
      );
    }
  );
}

function dysplayResults(weather) {
  console.log(weather);
  console.log(weather.name);
  console.log(weather.main.temp);

  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now =new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBulider(now);
  let newdom = document.querySelector(".current .temp");
  newdom.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  console.log(newdom);
  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
}
function dateBulider(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sempteber",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
