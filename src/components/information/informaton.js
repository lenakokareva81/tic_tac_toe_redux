import { PLAYER_ACTION, STATUS, PLAYER } from "../../constants";
import { InformationLayout } from "./informationLayout";
import { Cross, Zero } from "../../components";
import { store } from "../../store";
import { useState, useEffect } from "react";

export const Information = () => {
  const [onNext, setOnNext] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setOnNext(store.getState()));
    return unsubscribe;
  }, []);

  const { status, currentPlayer } = onNext;

  const playerAction = PLAYER_ACTION[status];
  const information = status === STATUS.DRAW ? "ничья" : `${playerAction}`;
  const drawFigure = (currentPlayer) => {
    return currentPlayer === PLAYER.TIC ? (
      <Cross size="cross__small" />
    ) : (
      <Zero size="zero__small" />
    );
  };

  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      information={information}
      drawFigure={drawFigure}
    />
  );
};
