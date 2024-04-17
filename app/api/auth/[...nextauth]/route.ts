import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

import { ENV } from "@/source/utils/environment";
import prisma from "@/source/utils/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Bcrypt from "bcrypt";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: ENV.'',
      clientSecret: ENV.'',
    }),
    FacebookProvider({
      clientId: ENV.'',
      clientSecret: ENV.F',
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone_Email_Username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your name",
        },
        password: {
          label: "Name",
          type: "text",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.phone_Email_Username && !credentials?.password) {
          return null;
        }
        const user1 = await prisma.user.findUnique({
          where: {
            email: credentials.phone_Email_Username,
          },
          select: {
            id: true,
            role: true,
            image: true,
            password: true,
            email: true,
            username: true,
            name: true,
          },
        });
        const user2 = await prisma.user.findUnique({
          where: {
            phone: credentials.phone_Email_Username,
          },
          select: {
            id: true,
            role: true,
            email: true,
            image: true,
            username: true,
            password: true,
            name: true,
          },
        });
        const user3 = await prisma.user.findUnique({
          where: {
            username: credentials.phone_Email_Username,
          },
          select: {
            id: true,
            role: true,
            email: true,
            image: true,
            username: true,
            password: true,
            name: true,
          },
        });
        const user = user2 || user3 || user1;

        if (!user || !user.password) {
          return null;
        } else {
          if (await Bcrypt.compare(credentials.password, user.password)) {
            const newUser: User = {
              id: user.id,
              username: user.username as string,
              name: user.name,
              email: user.email,
              role: user.role,
              image: user.image,
            };
            return newUser;
          } else {
            return null;
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  theme: { colorScheme: "light" },
  // pages: { signIn: "/auth", newUser: "/auth", signOut: "/" },
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    async jwt({ token, user }) {
      if (token && user) {
        (token.role = user.role), (token.username = user.username);
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
