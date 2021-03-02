import { combineReducers } from "redux";

import usuariosReducer from "./usuarios.reducers";

const rootReducer = combineReducers({
  usuariosReducer,
});

export default rootReducer;
