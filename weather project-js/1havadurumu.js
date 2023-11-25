const input = document.getElementById("searchBar");

const url = "https://api.openweathermap.org/data/2.5/";
const key = "3e03ee850fc6d8feb2b59e9d2fa4516a";

const searchValue = (e) => {
  if (e.key === "Enter") {
    getResult(input.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;

  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then((displayResult) => {
      let acity = document.getElementsByClassName("acity");
      acity.innerText = "input.value";
      let temp = document.getElementsByClassName("temp");
      temp.innerText = `${displayResult.main.temp}`;
      let desc = document.getElementsByClassName("desc");
      let min = document.getElementsByClassName("min");
    });
};
// console.log(displayResult);
// const displayResult=result=>{

//   console.log(result);

// }

input.addEventListener("keypress", searchValue);
