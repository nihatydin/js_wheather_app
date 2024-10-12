const key = "1a07cd4df8f41b4c26ea93830f72b40f";
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let cityName = "Bursa";

const setfetchApi = () => {
  fetchApi(input.value);
};

const fetchApi = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  )
    .then((response) => response.json())
    .then(displayRes)
    .catch((err) => console.log(err));
};

let displayRes = (data) => {
  console.log(data);
  const contain = document.querySelector(".contain");
  const div = document.createElement("div");
  const title = document.createElement("h3");
  const p = document.createElement("p");

  title.textContent = data.name;
  p.textContent = Math.round(data.main.temp);

  div.append(title, p);
  contain.append(div);
};

fetchApi(cityName);

btn.addEventListener("click", setfetchApi);

// coin_api

// const apikey = "AEB2DD9B-D96C-4551-A799-41E50B77D6D7";
// const getFetch = () => {
//   fetch(`https://rest.coinapi.io/v1/exchangerate/USD?apikey=${apikey}`)
//     .then((response) => response.json())
//     .then((res) => printCyripto(res))
//     .catch((err) => console.log(err));
// };

// const printCyripto = (dt) => {
//   console.log(dt);
//   console.log(dt.rates[1].asset_id_quote);
//   console.log(dt.asset_id_base);
// };

// getFetch();
