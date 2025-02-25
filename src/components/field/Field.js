import { FieldLayout } from "./FieldLayout";
import { store } from "../../store";
import { useState, useEffect } from "react";

export const Field = () => {
  const [onNext, setOnNext] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setOnNext(store.getState()));
    return unsubscribe;
  }, []);

  const { field } = onNext;
  return <FieldLayout field={field} />;
};
