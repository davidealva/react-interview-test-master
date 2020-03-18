import { GET_PLAYERS } from "../actions/types";

const initialState = {
  players: [],
  team: ''
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload 
      };
      default:
        return state;
  }
}