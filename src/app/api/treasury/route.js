import { NextResponse } from "next/server";
import { treasury } from "@/data";

export async function GET(request) {
    return NextResponse.json({ data: treasury });
}
