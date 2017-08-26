import {createStore} from "redux";
import reducers from "../reduces/reducers";

var store = createStore(reducers);

export default store;