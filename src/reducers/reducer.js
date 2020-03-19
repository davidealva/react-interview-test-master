import { GET_PLAYERS, GET_TEAMS } from "../actions/types";

const initialState = {
  players: [],
  teams: [], 
  value:''
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload 
      };
      case GET_TEAMS:
        return {
          ...state,
          teams: action.payload 
        };
      default:
        return state;
  }
}