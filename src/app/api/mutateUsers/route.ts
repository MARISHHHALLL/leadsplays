import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  try {
    const { fullName, email, location, phone } = await req.json();
    console.log(
      "name, email, locale, phoneNumber",
      fullName,
      email,
      location,
      phone
    );
    const newContact = await prisma.uSERS.create({
      data: { name: fullName, email, locale: location, phoneNumber: phone },
    });
    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
