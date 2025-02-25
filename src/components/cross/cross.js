import styles from "./cross.module.css";

export const Cross = ({ place }) => {
  return <div className={`${styles.cross} ${styles[place]}`}>&#10006;</div>;
};
