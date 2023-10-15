import { NextResponse } from "next/server";
import { twitterFeedsIds } from "@/data";

export async function GET(request) {
    return NextResponse.json({ data: twitterFeedsIds });
}
