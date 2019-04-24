import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    weather: weatherReducer,
    loading: loadingReducer
})