import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const Draw = () => {
  const [canvas, setBrush] = useState("#FCA5A5");
  const [brush, setThick] = useState(50);
  const [data, setData] = useState();
  const canvasRef = useRef();

  const style = {
    width: brush + "px",
    background: canvas,
    marginLeft: "50%",
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <CanvasDraw
        className="canvas"
        ref={canvasRef}
        brushRadius={brush}
        canvasWidth={500}
        canvasHeight={500}
      />
      <div className="actions">
        <button
          onClick={() => {
            setData(canvasRef.current.getSaveData());
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            canvasRef.current.undo();
          }}
        >
          UNDO
        </button>
        <button
          onClick={() => {
            canvasRef.current.clear();
          }}
        >
          CLEAR
        </button>

        <br />
        <label>Colour picker</label>
        <input
          style={{ background: { canvas } }}
          type="color"
          value={canvas}
          onChange={(event) => {
            console.log(event.target.value);
            setBrush(event.target.value);
          }}
        />

        <br />
        <label>Brush Thickness</label>

        <div className="thickness" style={style}></div>
        <input
          min="2"
          max="50"
          type="range"
          onChange={(event) => {
            console.log(event.target.value);
            setThick(event.target.value);
          }}
        />
      </div>
      <div>
        Saved data =
        <label data-testid="dataValue">
          {data ? Object.keys(data).length : ""}
        </label>
      </div>
    </div>
  );
};

export default Draw;
