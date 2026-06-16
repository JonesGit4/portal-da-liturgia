import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const collection = body.collection || "todas";

  revalidatePath("/");
  console.log(`[ISR] Revalidated / — trigger: ${collection}`);

  return NextResponse.json({
    revalidated: true,
    collection,
    timestamp: Date.now(),
  });
}
