import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { verifyDownloadToken } from "@/lib/download-token";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token || !verifyDownloadToken(token)) {
    return NextResponse.json(
      { error: "Invalid or expired download link" },
      { status: 403 }
    );
  }

  const filePath = join(process.cwd(), "private", "juglee-extension.zip");

  try {
    const file = await readFile(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="juglee-extension.zip"',
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
