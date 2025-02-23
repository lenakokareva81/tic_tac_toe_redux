import styles from "./newGameButton.module.css";
import { handleRestart } from "../../handlers";

export const NewGameButton = () => {
  return (
    <div className={styles.button} onClick={handleRestart}>
      начать новую игру
    </div>
  );
};
