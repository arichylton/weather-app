import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import weatherReducer from './weatherReducer';
import dailyReducer from './dailyReducer';

export default combineReducers({
    weather: weatherReducer,
    loading: loadingReducer,
    daily: dailyReducer
})