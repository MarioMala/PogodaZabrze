/** @format */

const containerHistory = document.querySelector('.container-history');

const URL =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Zabrze?unitGroup=metric&key=Y7J37B7LSLELMQDYV4AANMW37&contentType=json';

async function historyWeather() {
	try {
		const response = await fetch(URL);
		const data = await response.json();
		console.log(data);
		containerHistory.innerHTML += `
      
        `;
	} catch (err) {
		console.log(err);
	}
}

historyWeather();
