import styles from "./GameLauout.module.css";

import { Field, Information } from "./components/index";
import { NewGameButton } from "./components/NewGameButton/newGameButton";

export const GameLauout = () => (
  <div className={styles.container}>
    <Information />
    <br></br>
    <Field />
    <NewGameButton />
  </div>
);

export default GameLauout;
