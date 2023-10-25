

In order to display the missing arrows we need to modify some code inside the Edges.js component, the warning states that 'points' attribute has a non-numeric element [object Object], means that we are providing an array of points, and one of the elements within that array is not a number but an object, so in order to fix that we need to make sure to pass numeric values instead, so this is how the code inside Edges.js should look like:

```
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

```
<img width="495" alt="image" src="https://user-images.githubusercontent.com/67682405/174679660-99971eb0-1b42-4937-8cc1-52f93e6b24ca.png">
