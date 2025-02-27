import { FieldLayout } from "./FieldLayout";
import { useAppState } from "../../hooks";

export const Field = () => {
  const { field } = useAppState();
  return <FieldLayout field={field} />;
};
