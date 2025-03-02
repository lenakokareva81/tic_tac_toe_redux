import { FieldLayout } from "./FieldLayout";
import { useSelector } from "react-redux";
import {
  selectField,
  selectCurrentPlayer,
  selectStatus,
} from "../../selectors";
import { useDispatch } from "react-redux";

export const Field = () => {
  const field = useSelector(selectField);
  const status = useSelector(selectStatus);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const dispatch = useDispatch();

  return (
    <FieldLayout
      field={field}
      dispatch={dispatch}
      status={status}
      currentPlayer={currentPlayer}
    />
  );
};
