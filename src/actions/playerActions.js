import { GET_PLAYERS } from "./types";
import axios from "axios";

export const getPlayers = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/players');
  dispatch({
    type: GET_PLAYERS,
    payload: res.data
  });
};