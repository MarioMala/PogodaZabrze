/** @format */
const container = document.querySelector('.container');
const timeBox = document.querySelector('.time-box');

let currentTime = () => {
	let currentTime = new Date();
	let h = currentTime.getHours();
	if (h < 9) {
		h = '0' + h;
	}
	let m = currentTime.getMinutes();
	if (m < 9) {
		m = '0' + m;
	}
	let s = currentTime.getSeconds();
	if (s < 9) {
		s = '0' + s;
	}
	let current = `${h}:${m}:${s}`;

	return current;
};

let updateDisplay = () => {
	let current = currentTime();
	timeBox.innerHTML = `<p class='time'>Bieżący czas: ${current}</p>`;
};

setInterval(updateDisplay, 1000);

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
        <p class='solarradiation'>Promieniowanie słoneczne: ${data.currentConditions.solarradiation} lumenów</p>
		 <p class='sunrise'>Wschód słońca o godz: ${data.currentConditions.sunrise}</p>
		 <p class='sunset'>Zachód słońca o godz: ${data.currentConditions.sunset}</p>
        `;
	} catch (err) {
		console.log(err);
	}
}

fetchWeather();
