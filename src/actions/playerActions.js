import { GET_PLAYERS, GET_TEAMS } from "./types";
import axios from "axios";

export const getPlayers = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/players?_limit=10');
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