/* eslint-disable no-console */
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "~/lib/ConnectDatabase";
import { User } from "~/models/User";

export const POST = async (request: NextRequest) => {
  try {
    const { firstName, lastName, email, password, role } = await request.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 },
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const hashPassword = await hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      role,
    });

    console.log(newUser);

    return NextResponse.json(
      { success: true, message: "Registration was successful" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 },
    );
  }
};
