import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Replace with real side-effects: email, CRM task, queue job, etc.
  console.log("Contact inquiry", parsed.data);

  return NextResponse.json({ ok: true });
}
