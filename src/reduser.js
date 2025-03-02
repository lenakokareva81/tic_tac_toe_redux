import { STATUS, PLAYER } from "./constants";
import { createEmtyField } from "./utils";

export const initialState = {
  status: STATUS.TURN,
  field: createEmtyField,
  currentPlayer: PLAYER.TIC,
};

export const appreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: payload,
      };
    case "SET_FIELD":
      return {
        ...state,
        field: payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: payload,
      };

    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
};
