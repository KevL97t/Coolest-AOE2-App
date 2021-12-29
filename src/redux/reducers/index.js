import { combineReducers } from "redux";
import poketypeReducer from "./poketypeReducer";
import teamReducer from "./teamReducer";


const reducer = combineReducers({
    poketype: poketypeReducer,
    team: teamReducer
})

export default reducer;