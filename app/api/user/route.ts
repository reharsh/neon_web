import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, username } = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      username: username,
      email: email,
    },
  });
  return Response.json(user);
}
