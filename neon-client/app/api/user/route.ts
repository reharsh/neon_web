import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, name } = await req.json();
  console.log(name, email);
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return Response.json({ message: "User not found" });
  }
  return Response.json(user);
}
