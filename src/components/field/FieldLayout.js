import styles from "./FieldLayout.module.css";
import { drawFigure } from "../../utils";
import { handelCellClik } from "../../handlers";

export const FieldLayout = ({ field, status, dispatch, currentPlayer }) => {
  return (
    <div className={styles.container}>
      {field.map((cellPlayer, index) => (
        <div
          className={`${styles.cell} ${styles.active}`}
          onClick={() =>
            handelCellClik(index, field, status, dispatch, currentPlayer)
          }
          key={index}
        >
          {drawFigure(cellPlayer, { place: "inCell" })}
        </div>
      ))}
    </div>
  );
};
