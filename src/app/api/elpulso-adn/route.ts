import { NextRequest, NextResponse } from "next/server";
import { put, head } from "@vercel/blob";

const PATHNAME = "elpulso-adn/respuestas.json";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const payload = JSON.stringify({ answers: body, updatedAt: new Date().toISOString() });

  await put(PATHNAME, payload, {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
  });

  return NextResponse.json({ ok: true });
}

export async function GET() {
  try {
    const blob = await head(PATHNAME);
    const res = await fetch(blob.url, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ answers: {}, updatedAt: null });
  }
}
