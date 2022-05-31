import {createStore, combineReducers, applyMiddleware, compose} from "redux";

// importing reducers
import updateProductReducer from "./updateProduct/reducer";
import updateQueryParamsReducer from "./updateQueryParams/reducer";
import updateCartReducer from "./updateCart/reducer";

const rootReducer = combineReducers({
    products : updateProductReducer, 
    queryParams : updateQueryParamsReducer, 
    cart : updateCartReducer
});

const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof(action) === "function")
    {
        return action(store.dispatch);
    }
    next(action);
}


const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;