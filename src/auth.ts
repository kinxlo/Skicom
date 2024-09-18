// import { jwtDecode } from "jwt-decode";
/* eslint-disable no-console */
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",

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
          const response = await fetch(
            "https://curaflux-server.onrender.com/auth/signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          );

          const user = await response.json();
          // let decode;

          if (response.ok && user) {
            console.log(user);

            // decode = jwtDecode(user.token);
            // console.log(decode);

            return user;
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          console.error(error);

          return;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        // token.firstname = user.firstname;
        // token.lastname = user.lastname;
        // token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        // session.user.firstname = token.firstname as string;
        // session.user.lastname = token.lastname as string;
        // session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
