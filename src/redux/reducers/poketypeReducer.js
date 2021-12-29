import { POKETYPE } from "../types";


const initialState = null;
export default function poketypeReducer(state = initialState, action){
    switch (action.type) {
        case POKETYPE:
            return state = action.payload
        default:
            return state;
    }
}