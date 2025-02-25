import styles from "./zero.module.css";

export const Zero = ({ place }) => {
  return <div className={`${styles.zero} ${styles[place]}`}></div>;
};
