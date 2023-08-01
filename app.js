/** @format */
const container = document.querySelector('.container');
const timeBox = document.querySelector('.time-box');


const currentTime = () => {
	return function time() {
		const date = new Date();

		let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

		let timeString = `${h}:${m}:${s}`;

		timeBox.innerHTML = `
   <p class='time'>${timeString}</p>
   `;
	};
};

const newTime = currentTime();
setInterval(newTime, 1000);

const URL =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Zabrze?unitGroup=metric&key=Y7J37B7LSLELMQDYV4AANMW37&contentType=json';

async function fetchWeather() {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		container.innerHTML += `
        <p class='address'>${data.resolvedAddress}</p>
        <p class='latitude'>Szerokość geograficzna: ${data.latitude}°</p>
        <p class='longitude'>Długość geograficzna: ${data.longitude}°</p>
        <p class='conditions'>Zachmurzenie: ${data.currentConditions.conditions}</p>
        <p class='humidity'>Wilgotność powietrza: ${data.currentConditions.humidity} %</p>
        <p class='pressure'>Ciśnienie powietrza: ${data.currentConditions.pressure} hPa</p>
        <p class='temp'>Temperatura powietrza: ${data.currentConditions.temp}°C</p>
        <p class='solarradiation'>Promieniowanie słoneczne: ${data.currentConditions.solarradiation} lx</p>
		 <p class='sunrise'>Wschód słońca o godz: ${data.currentConditions.sunrise}</p>
		 <p class='sunset'>Zachód słońca o godz: ${data.currentConditions.sunset}</p>
        `;
	} catch (err) {
		console.log(err);
	}
}

fetchWeather();
