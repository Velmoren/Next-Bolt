import { combineReducers } from "redux";
import cart from "./cart";
import search from "./search";
const reducer = combineReducers({
	cart,
	search,
});

export default reducer;
