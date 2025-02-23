import styles from "./FieldLayout.module.css";
import { Zero, Cross } from "../../components";
import { PLAYER } from "../../constants";
import { store } from "../../store";
import { useState, useEffect } from "react";
import { handelCellClik } from "../../handlers";

export const FieldLayout = () => {
  const [onNext, setOnNext] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setOnNext(store.getState()));
    return unsubscribe;
  }, []);

  const { field } = onNext;
  return (
    <div className={styles.container}>
      {field.map((cellPlayer, index) => (
        <div
          className={`${styles.cell} ${styles.active}`}
          onClick={() => handelCellClik(index)}
          key={index}
        >
          {cellPlayer === PLAYER.TIC ? <Cross size="cross__inCell" /> : ""}
          {cellPlayer === PLAYER.TAC ? <Zero size="zero__inCell" /> : ""}
        </div>
      ))}
    </div>
  );
};
