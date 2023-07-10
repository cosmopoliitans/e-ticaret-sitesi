import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { drawerRaducer } from "./reducers/drawer"
import { productsReducer, productsDetailReducer } from "./reducers/products";

let initialState = {};

const reducers = combineReducers({
  drawer: drawerRaducer,
  products: productsReducer,
  product: productsDetailReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
