type Draw = {
  context: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

type DrawLineProps = Draw & {
  color: string;
  size: number;
};

type Point = { x: number; y: number };
