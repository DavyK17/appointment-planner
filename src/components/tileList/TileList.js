import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((c, i) => <Tile key={i} data={c} />)}
    </div>
  );
};
