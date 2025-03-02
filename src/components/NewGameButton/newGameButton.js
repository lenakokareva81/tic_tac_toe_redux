import styles from "./newGameButton.module.css";
import { handleRestart } from "../../handlers";
import { useDispatch } from "react-redux";

export const NewGameButton = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.button} onClick={() => handleRestart(dispatch)}>
      начать новую игру
    </div>
  );
};
