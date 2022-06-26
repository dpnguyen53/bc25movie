import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMovie/reducer";
import authReducer from "../../containers/AdminTemplate/AuthPage/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
});

export default rootReducer;
