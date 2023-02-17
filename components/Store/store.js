import { createStore } from "redux";
import addFavorites from "./reducer";
const store = createStore(addFavorites)
export default store;