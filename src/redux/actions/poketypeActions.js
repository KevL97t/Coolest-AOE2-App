import { ADD_TO_TEAM, CLEAR_TEAM, POKETYPE, REMOVE_FROM_TEAM } from "../types";

export const setPoketype = (actualPayload) => ({type: POKETYPE, payload: actualPayload});

export const addToTeam = (payload) => ({ type: ADD_TO_TEAM, payload})

export const removeFromTeam = (payload) => ({ type: REMOVE_FROM_TEAM, payload})

export const clearTeam = (payload) => ({ type: CLEAR_TEAM, payload})