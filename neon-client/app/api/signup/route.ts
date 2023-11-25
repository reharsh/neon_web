import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, name, password, profileImage } = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    const user = await prisma.user.create({
      //@ts-ignore
      data: {
        email: email,
        name: name,
        password: password,
        profileImage: profileImage
          ? profileImage
          : "https://static.vecteezy.com/system/resources/previews/028/190/440/non_2x/user-profile-avatar-of-person-with-beard-mustache-wearing-knitted-hat-on-head-man-face-portrait-in-circle-illustration-vector.jpg",
      },
    });
    if (!user) {
      return Response.json({ message: "User can't be created!!", status: 400 });
    }
    return Response.json(user);
  }
  return Response.json({ message: "User already exists", status: 401 });
}
