import { useState } from "react";

const ClickAnywhere = () => {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);
  const handlePlaceCircle = (e) => {
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };

  console.log(points);
  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  };

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="click-area" onClick={handlePlaceCircle}>
        {points.map((point, idx) => (
          <div
            className="mark"
            key={idx}
            style={{ left: point.x - 5 + "px", top: point.y - 125 + "px" }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default ClickAnywhere;
