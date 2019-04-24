import axios from 'axios';

export const fetchWeather = (city) => async (dispatch) => {
	const response = await axios.get(
		`http://www.mapquestapi.com/geocoding/v1/address?key=jWu6kJX0FXTOVucWLAFKW8bv2jDEbgmF&location=${city}`
	);

	if (!response.data.results[0].locations[0].adminArea3) {
        return alert('Unable to find that address');
	}
	
	let lat = response.data.results[0].locations[0].latLng.lat;
	let lng = response.data.results[0].locations[0].latLng.lng;

	
	const weather = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3a177cf49a5c831874f49818596387c3/${lat},${lng}`);

	dispatch(loading(false));

	console.log(weather.data.currently)
	
	dispatch({ type: 'FETCH_WEATHER', payload: { area: response.data.results[0].locations[0], weather: weather.data.currently } });
};

export const loading = (boolean) => {
	return {
		type: 'LOADING',
		payload: boolean
	}
}

