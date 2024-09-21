import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstname: string;
      lastname: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    firstname: string;
    lastname: string;
    role: string;
  }
}
