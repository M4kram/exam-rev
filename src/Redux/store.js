import { legacy_createStore } from "redux";
import userReducer from "./Reducers/usersReducer";

const store = legacy_createStore(userReducer);

export default store;
