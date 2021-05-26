import { combineReducers } from 'redux';
import ipLocationSearchReducer from "./reducers/ipLocationSearchReducer"
import ipUrlSearchReducer from "./reducers/ipUrlSearchReducer"

const rootReducer = combineReducers({
    ipLocationSearchReducer,
    ipUrlSearchReducer
});

export default rootReducer;