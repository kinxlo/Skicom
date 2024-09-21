/* eslint-disable unicorn/no-null */
/* eslint-disable no-console */
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { connectDB } from "./lib/ConnectDatabase";
import { User } from "./models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const email = credentials?.email;
          const password = credentials?.password;

          console.log("Attempting login for:", email);

          if (!email || !password) {
            console.error("Missing email or password");
            throw new Error("Please provide both email and password");
          }

          await connectDB();

          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            console.error("User not found:", email);
            throw new Error("Invalid email or password");
          }

          if (!user.password) {
            console.error("User has no password set:", email);
            throw new Error("Invalid account configuration");
          }

          const checkPassword = await compare(
            password as string,
            user.password,
          );

          if (!checkPassword) {
            console.error("Invalid password for user:", email);
            return null;
          }

          console.log("Login successful for:", email);

          return {
            id: user._id.toString(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
