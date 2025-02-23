import styles from "./zero.module.css";

export const Zero = ({ size }) => {
	return <div className={`${styles.zero} ${styles[size]}`}></div>;
};
