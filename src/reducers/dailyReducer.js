export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_WEATHER':
			return  [...action.payload.allWeather];
		default:
			return state;
	}
};
