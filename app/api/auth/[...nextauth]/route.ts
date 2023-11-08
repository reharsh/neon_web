import NextAuth from "next-auth";

//@ts-ignore
const handler = NextAuth({});

export { handler as GET, handler as POST };
