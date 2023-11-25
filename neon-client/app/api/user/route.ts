import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, name, profileImage, password } = await req.json();
  console.log(name, email);
  if (password) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
    if (!user) {
      return Response.json({
        name: name.split(" ")[0],
        email: email,
        profileImage: profileImage,
      });
    }
    return Response.json(user);
  } else {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return Response.json({
        name: name.split(" ")[0],
        email: email,
        profileImage: profileImage,
      });
    }
    return Response.json(user);
  }
}
