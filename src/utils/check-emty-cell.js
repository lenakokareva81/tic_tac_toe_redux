import { PLAYER } from "../constants";
export const checkEmtyCell = (field) =>
	field.some((cellPlayer) => cellPlayer === PLAYER.NOBODY);
