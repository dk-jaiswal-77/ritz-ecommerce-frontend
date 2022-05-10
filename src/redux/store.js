import {createStore, combineReducers, applyMiddleware, compose} from "redux";

const rootReducer = combineReducers({});

const store = createStore(rootReducer, compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;