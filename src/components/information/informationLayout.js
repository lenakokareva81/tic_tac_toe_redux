import styles from "./informationLayout.module.css";
import { drawFigure } from "../../utils";

export const InformationLayout = ({ information, currentPlayer }) => (
  <div className={styles.container}>
    <div className={styles.text}>{information}</div>
    {information !== "ничья"
      ? drawFigure(currentPlayer, { place: "inInf" })
      : ""}
  </div>
);
