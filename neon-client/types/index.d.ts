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

interface UserProps {
  name: string;
  email: string;
  password: string;
  profileImage: string;
  role: string;
}
