import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const canvas = await prisma.canvas.findMany({});
  return Response.json({ canvases: canvas });
}
