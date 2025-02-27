import { useState, useEffect } from "react";
import { store } from "../store";

export const useAppState = () => {
  const [onNext, setOnNext] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setOnNext(store.getState()));
    return unsubscribe;
  }, []);
  return onNext;
};
