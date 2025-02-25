import { PLAYER_ACTION, STATUS } from "../../constants";
import { InformationLayout } from "./informationLayout";

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

  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      information={information}
    />
  );
};
