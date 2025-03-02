import { PLAYER_ACTION, STATUS } from "../../constants";
import { InformationLayout } from "./informationLayout";
import { useSelector } from "react-redux";
import { selectStatus, selectCurrentPlayer } from "../../selectors";

export const Information = () => {
  const status = useSelector(selectStatus);
  const currentPlayer = useSelector(selectCurrentPlayer);

  const playerAction = PLAYER_ACTION[status];
  const information = status === STATUS.DRAW ? "ничья" : `${playerAction}`;

  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      information={information}
    />
  );
};
