import { ADD_TO_TEAM, CLEAR_TEAM, REMOVE_FROM_TEAM } from "../types";

const initialState = {
    team: [],
};

export default function teamReducer(state = initialState, action){
    switch (action.type) {
        case ADD_TO_TEAM:
        {
            let newItem = {name: action.payload.name, icon: action.payload.icon, id: action.payload.id}
            let repeatedItem = state.team.find(item => item.id === newItem.id);
            return repeatedItem
            ?
            {
                ...state,
                team: state.team.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item)
            }
            :
            {
                ...state,
                team: [...state.team, {...newItem, quantity: 1}]
            }
        }
        case REMOVE_FROM_TEAM:
            return{
                ...state,
                team: state.team.filter(item => item.id !== action.payload)
            }
        case CLEAR_TEAM:
            return{}    
        default:
            return state;
    }
}