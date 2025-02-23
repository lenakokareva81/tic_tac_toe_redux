import { WIN_PATTERNS } from "../constants";
export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winpattern) =>
		winpattern.every((cellPlayer) => field[cellPlayer] === currentPlayer),
	);
