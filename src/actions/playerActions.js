import { GET_PLAYERS, GET_TEAMS, SEARCH } from "./types";
import axios from "axios";

export const getPlayers = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/players?_page=3&limit=10');
  dispatch({
    type: GET_PLAYERS,
    payload: res.data
  });
};

export const getTeams = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/teams');
  dispatch({
    type: GET_TEAMS,
    payload: res.data
  });
};

export function search(value) {
  return {type: SEARCH, value};
};