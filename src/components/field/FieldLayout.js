import styles from "./FieldLayout.module.css";
import { drawFigure } from "../../utils";
import { handelCellClik } from "../../handlers";

export const FieldLayout = ({ field }) => {
  return (
    <div className={styles.container}>
      {field.map((cellPlayer, index) => (
        <div
          className={`${styles.cell} ${styles.active}`}
          onClick={() => handelCellClik(index)}
          key={index}
        >
          {drawFigure(cellPlayer, { place: "inCell" })}
        </div>
      ))}
    </div>
  );
};
