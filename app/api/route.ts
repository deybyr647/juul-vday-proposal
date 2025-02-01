import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ status: "success", ...response.body });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Properly await parsing JSON
    console.log("Received Data:", body); // Log the parsed data

    return NextResponse.json({ status: "success", ...body });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { status: "error", message: "Invalid JSON" },
      { status: 400 }
    );
  }
}
