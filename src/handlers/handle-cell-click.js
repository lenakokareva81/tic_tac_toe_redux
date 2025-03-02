import { STATUS, PLAYER } from "../constants";
import { checkEmtyCell, checkWin } from "../utils";

import { setCurrentPlayer, setField, setStatus } from "../actions";

export const handelCellClik = (
  cellIndex,
  field,
  status,
  dispatch,
  currentPlayer
) => {
  // const { status, field, currentPlayer } = store.getState();

  if (
    status === STATUS.WIN ||
    status === STATUS.DRAW ||
    field[cellIndex] !== PLAYER.NOBODY
  ) {
    return;
  }
  const newfield = [...field];

  newfield[cellIndex] = currentPlayer;
  dispatch(setField(newfield));

  if (checkWin(newfield, currentPlayer)) {
    dispatch(setStatus(STATUS.WIN));
    // store.dispatch({ type: "SET_STATUS", payload: STATUS.WIN });
  } else if (checkEmtyCell(newfield)) {
    const newCurrentPlayer =
      currentPlayer === PLAYER.TIC ? PLAYER.TAC : PLAYER.TIC;
    dispatch(setCurrentPlayer(newCurrentPlayer));
    // // store.dispatch({
    // //   type: "SET_CURRENT_PLAYER",
    // //   payload: newCurrentPlayer,
    // });
  } else {
    dispatch(setStatus(STATUS.DRAW));
    // store.dispatch({ type: "SET_STATUS", payload: STATUS.DRAW });
  }
  // console.log(store.getState());
};
