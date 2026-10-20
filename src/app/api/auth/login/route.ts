import { NextResponse } from "next/server";
import { config } from "@/constants/config";
import { loginSchema } from "@/utils/validators";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const result = loginSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { message: result.error.issues[0]?.message ?? "Invalid login details." },
      { status: 400 },
    );
  }

  const { email } = result.data;
  const token = `demo-${crypto.randomUUID()}`;
  const response = NextResponse.json({
    token,
    user: {
      id: email,
      email,
      name: email.split("@")[0],
    },
  });

  response.cookies.set(config.authCookieName, token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
