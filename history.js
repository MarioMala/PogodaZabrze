/** @format */

const containerHistory = document.querySelector('.container-history');

const URL =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Zabrze?unitGroup=metric&key=Y7J37B7LSLELMQDYV4AANMW37&contentType=json';

async function historyWeather() {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		const history = [...data.days];

		history.forEach(day => {
			containerHistory.innerHTML += `
			<span>Dane za dzień:  ${day.datetime}</span>
			<div class='weather-box'>
				<p class='date-time'>Rodzaj pogody: ${day.conditions}</p>
				<p class='date-time'>Wschód słońca o godzinie: ${day.sunrise}</p>
				<p class='date-time'>Zachód słońca o godzinie: ${day.sunset}</p>
				<p class='temp-max'>Temperatura maksymalna: ${day.tempmax}°C</p>
				<p class='temp-min'>Temperatura minimalna: ${day.tempmin}°C</p>
				<p class='temp-max'>Średnia temperatura: ${day.temp}°C</p>
				<p class='pressure'>Ciśnienie: ${day.pressure}%</p>
				<p class='humidity'>Wilgotność powietrza: ${day.humidity} hPa</p>
			</div>
			
			`;
		});
	} catch (err) {
		console.log(err);
	}
}

historyWeather();
