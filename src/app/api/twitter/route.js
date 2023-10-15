import { NextResponse } from "next/server";
import { twitterFeedsIds } from "@/data";

export async function GET(request) {
    // console.log(request,NextResponse.json({status:400},{ data: twitterFeedsIds }))
    return NextResponse.json({ data: twitterFeedsIds });
}
