import { NextResponse } from "next/server";
// import { twitterFeedsIds } from "@/data";

export async function GET(request) {
    // console.log(request,NextResponse.json({status:400},{ data: twitterFeedsIds }))
    return NextResponse.json({
        data: [
            "1706813790468071823",
            "1710069164130365895",
            "1709690305941754008",
        ],
    });
} 
