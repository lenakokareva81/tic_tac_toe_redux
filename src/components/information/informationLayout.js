import styles from "./informationLayout.module.css";

export const InformationLayout = ({
	information,
	currentPlayer,
	drawFigure,
}) => (
	<div className={styles.container}>
		<div className={styles.text}>{information}</div>
		{information !== "ничья" ? drawFigure(currentPlayer) : ""}
	</div>
);
