import manageCardsReducer from './manageCards';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    manageCardsReducer
})

export default allReducers