import { STATUS, PLAYER } from "../constants";
import { checkEmtyCell, checkWin } from "../utils";
import { store } from "../store";

export const handelCellClik = (cellIndex) => {
  const { status, field, currentPlayer } = store.getState();

  if (
    status === STATUS.WIN ||
    status === STATUS.DRAW ||
    field[cellIndex] !== PLAYER.NOBODY
  ) {
    return;
  }
  const newfield = [...field];

  newfield[cellIndex] = currentPlayer;
  store.dispatch({ type: "SET_FIELD", payload: newfield });

  if (checkWin(newfield, currentPlayer)) {
    store.dispatch({ type: "SET_STATUS", payload: STATUS.WIN });
  } else if (checkEmtyCell(newfield)) {
    const newCurrentPlayer =
      currentPlayer === PLAYER.TIC ? PLAYER.TAC : PLAYER.TIC;

    store.dispatch({
      type: "SET_CURRENT_PLAYER",
      payload: newCurrentPlayer,
    });
  } else {
    store.dispatch({ type: "SET_STATUS", payload: STATUS.DRAW });
  }
};
