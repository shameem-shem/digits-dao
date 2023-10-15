import { NextResponse } from "next/server";
// import { treasury } from "@/data";

export async function GET(request) {
    return NextResponse.json(JSON.parse(JSON.stringify({
        data: {
            from: {
                price: 100000,
                date: "Feb 09, 2022",
            },
            to: {
                price: 2691883,
                date: "Jan 31, 2023",
            },
        },
    })));
}
