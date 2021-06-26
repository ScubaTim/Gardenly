import { combineReducers } from 'redux'
import gardenReducer from './gardenReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    garden: gardenReducer,
    auth: authReducer,
})

export default rootReducer