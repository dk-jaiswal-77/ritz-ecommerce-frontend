import {createStore, combineReducers, applyMiddleware, compose} from "redux";

const rootReducer = combineReducers({});

const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof(action) === "function")
    {
        return action(store.dispatch);
    }
    next(action);
}



const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;