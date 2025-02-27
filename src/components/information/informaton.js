import { PLAYER_ACTION, STATUS } from "../../constants";
import { InformationLayout } from "./informationLayout";

import { useAppState } from "../../hooks";

export const Information = () => {
  const { status, currentPlayer } = useAppState();

  const playerAction = PLAYER_ACTION[status];
  const information = status === STATUS.DRAW ? "ничья" : `${playerAction}`;

  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      information={information}
    />
  );
};
