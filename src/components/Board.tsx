import { useEffect, useState } from "react";
import { BoardModel } from "../models/BoardModel";
import Square from "./Square";
import "../styles/Board.css";

function Board({ board }: { board: BoardModel }) {
  const [turns, setTurn] = useState(true);

  const [changingX, setChangingX] = useState(0);
  const [changingY, setChangingY] = useState(0);

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const [drop, setDrop] = useState(false);

  useEffect(() => {
    if (drop)
      board.possibleMove(turns, setTurn, changingX, changingY, startX, startY);
      setDrop(false)
  }, [drop]);

  return (
    <>
      {board.board.map((row, i) => {
        return (
          <div key={i} className="checkers-row">
            {row.map((square, j) => (
              <Square
                key={j}
                square={square}
                board={board}
                setChangingX={setChangingX}
                setChangingY={setChangingY}
                setStartX={setStartX}
                setStartY={setStartY}
                setDrop={setDrop}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}

export default Board;