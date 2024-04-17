import { DefaultSession } from "next-auth";

type Role = "ADMIN" | "VENDOR" | "USER";

declare module "next-auth" {
  interface User {
    role: Role;
    username: string;
  }
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
    username: string;
  }
}
