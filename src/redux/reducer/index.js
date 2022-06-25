import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMovie/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
});

export default rootReducer;
