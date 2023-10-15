import { NextResponse } from "next/server";
import { twitterFeedsIds } from "@/data";


function removeByteOrderMark(str){
    return str.replace(/^\ufeff/g,"")
}

export async function GET(request) {
    const twitterData = removeByteOrderMark(JSON.stringify(twitterFeedsIds))
    // console.log(request,NextResponse.json({status:400},{ data: twitterFeedsIds }))
    return NextResponse.json(JSON.stringify({ data: twitterData }), {
        headers: { 'content-type': 'application/json' },
      });
}
// export  function handler(req, res) {
//     res.status(200).json({ text: 'Hello' });
// }