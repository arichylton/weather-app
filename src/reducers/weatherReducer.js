export default (state={}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return {...action.payload.area, ...action.payload.weather};
        default:
            return state;
    }
}