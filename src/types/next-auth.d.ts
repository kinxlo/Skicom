declare module "next-auth" {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
  }

  interface Session {
    user: User;
  }
}
