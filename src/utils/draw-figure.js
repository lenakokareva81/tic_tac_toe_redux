import { PLAYER } from "../constants";
import { Cross, Zero } from "../components";

export const drawFigure = (currentPlayer, { place }) => {
  console.log(`cross__${place} `);

  if (currentPlayer === PLAYER.TAC) {
    return <Zero place={`zero__${place}`} />;
  } else if (currentPlayer === PLAYER.TIC) {
    return <Cross place={`cross__${place}`} />;
  }
};
