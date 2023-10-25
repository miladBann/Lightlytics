import { Arrow, Layer, Stage } from "react-konva";

function Edges({ width, height, edges }) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        {edges.map((edge, i) => {
          // Ensure edge.points is an array of valid numeric coordinates.
          const validPoints = edge.points.every((coord) => !isNaN(coord));
          if (validPoints) {
            return (
              <Arrow
                key={i}
                points={edge.points}
                strokeWidth={1}
                stroke={"black"}
                fill={"black"}
              />
            );
          } else {
            console.warn("Invalid 'points' data:", edge.points);
            return null; // Skip rendering the arrow with invalid points.
          }
        })}
      </Layer>
    </Stage>
  );
}

export default Edges;
