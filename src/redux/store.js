import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import postsReducer  from './reducers/postsReducers';

const rootReducer=combineReducers({
    posts:postsReducer
})
const store = createStore(rootReducer,
    applyMiddleware(thunk)
  
    );
 export default store
