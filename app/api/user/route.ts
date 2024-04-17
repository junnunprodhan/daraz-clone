import prisma from "@/source/utils/prisma";
import Bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import Slugify from "slugify";
export async function GET(request: Request) {
  try {
    return new NextResponse("Ok");
  } catch (error) {
    return new NextResponse("Something went wrong");
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, password }: InputUser = await request.json();
    if (!name || !email || !password || !phone) {
      return new NextResponse("Invalid credentials !", { status: 401 });
    }
    const slug =
      Slugify(name, {
        lower: true,
        replacement: ".",
      }) + (Math.random() * 999).toFixed(0); // unique username generator
    const pass = await Bcrypt.hash(password, 10); // Encrypt password

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username: slug,
        password: pass,
        phone,
      },
    });

    return new NextResponse(JSON.stringify(user));
  } catch (error) {
    return new NextResponse(JSON.stringify(error));
  }
}
