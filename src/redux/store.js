import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { drawerRaducer } from "./reducers/drawer"
import { productsReducer, productsDetailReducer } from "./reducers/products";
import {cardReducer} from "./reducers/card"
import { searchReducer } from "./reducers/search";


const cardItems = JSON.parse(localStorage.getItem("cardItems")) || []
let initialState = {
  card: {cardItems}
};

const reducers = combineReducers({
  drawer: drawerRaducer,
  products: productsReducer,
  product: productsDetailReducer,
  card: cardReducer,
  search: searchReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
