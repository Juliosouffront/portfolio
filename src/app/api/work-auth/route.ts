import { NextResponse } from "next/server";
import {
  WORK_ACCESS_COOKIE,
  createWorkAccessToken,
  getWorkAccessPassword,
  isWorkAccessGranted,
} from "@/lib/work-access";

export async function GET() {
  const granted = await isWorkAccessGranted();
  return NextResponse.json({ granted });
}

export async function POST(request: Request) {
  let password = "";

  try {
    const body = (await request.json()) as { password?: string };
    password = body.password?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  if (password !== getWorkAccessPassword()) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(WORK_ACCESS_COOKIE, createWorkAccessToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
