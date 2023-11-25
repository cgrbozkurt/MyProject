const input = document.getElementById("searchBar");

const getSata = (e) => {
  if (e.key === "Enter") {
    getData(input.value);
  }
};
input.addEventListener("keypress", getSata);

const getData = (name) => {
  const API = "3e03ee850fc6d8feb2b59e9d2fa4516a";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((weather) => {
      console.log(weather);
      let city = document.querySelector("#city");
      city.innerText = `${weather.name}`;

      let temp = document.querySelector(".temp");
      temp.innerText = `${Math.round(weather.main.temp)}°C`;
      let desc = document.querySelector(".desc");
      desc.innerText = `${weather.weather[0].description}`;
      let min = document.querySelector(".min");
      min.innerText = `${Math.round(weather.main.temp_min)}°C/${Math.round(
        weather.main.temp_max
      )}°C`;
    });
};
