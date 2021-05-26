import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

let middleware = [thunk]

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware]
}
const store = () => {
    const composeEnhancers = compose;
  
    let store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(...middleware))
    );
  
    return store
  }
export default store