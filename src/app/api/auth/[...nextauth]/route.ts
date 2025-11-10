import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type AuthHandler = (request: NextRequest) => Promise<Response>;

let cachedHandler: AuthHandler | null = null;

async function getAuthHandler(): Promise<AuthHandler> {
  if (cachedHandler) {
    return cachedHandler;
  }
  const { default: NextAuth } = await import("next-auth");
  const { authOptions } = await import("@/lib/auth/options");
  cachedHandler = NextAuth(authOptions);
  return cachedHandler!;
}

const authEnabled = process.env.NEXT_PUBLIC_ENABLE_AUTH === "true";

export async function GET(request: NextRequest) {
  if (!authEnabled) {
    return NextResponse.json(
      { message: "Authentication is disabled for this preview." },
      { status: 503 }
    );
  }

  const handler = await getAuthHandler();
  if (!handler) {
    return NextResponse.json(
      { message: "Authentication handler is unavailable." },
      { status: 500 }
    );
  }
  return handler(request);
}

export const POST = GET;
