// import React from 'react'
// import { treasury } from "@/data/treasury";
import { useTreasury } from "@/hooks/useTreasury";
import Button from "./button";
import { ArrowRight, IconUnicorn } from "./icons";

export default function Treasury(props) {
    const {
        treasuryFromPrice,
        treasuryFromDate,
        treasuryToPrice,
        treasuryToDate,
        treasuryDiffrence,
        treasuryPercentage,
    } = useTreasury(props?.treasury);
    return (
        <section className="pt-[84px] pb-[72px] text-center">
            <div className="container">
                <span className="text-18 font-bold bg-white/[.16] py-3 px-7 rounded-full mb-5 inline-block">
                    DAO Treasury
                </span>
                <h2 className="text-37 mb-4 font-bold">
                    Our Treasury RFV* is growing fast
                </h2>
                <div className="flex items-center justify-center py-5">
                    <div className="flex-shrink-0 pr-4 text-left">
                        <h5 className="text-22 font-bold">
                            {treasuryFromPrice}
                        </h5>
                        <p className="text-18">{treasuryFromDate}</p>
                    </div>

                    <div className="w-full bg-light-green rounded-full h-8 relative">
                        <div
                            className="bg-lighter-green h-8 rounded-s-full"
                            style={{ width: treasuryPercentage }}
                        ></div>
                        <span className="text-dark-blue font-bold text-13 absolute left-1/2 top-0 leading-8">
                            {treasuryDiffrence}
                        </span>
                    </div>

                    <div className="flex-shrink-0 pl-6 text-left">
                        <h5 className="text-22 font-bold">{treasuryToPrice}</h5>
                        <p className="text-18">{treasuryToDate}</p>
                    </div>
                </div>
                <Button
                    type="green"
                    rounded
                    className="inline-flex items-center"
                >
                    <IconUnicorn className="mr-2 flex-shrink-0 text-22" />
                    Buy Now <ArrowRight className="ml-2 flex-shrink-0" />
                </Button>
                <h6 className="text-16 text-green font-bold py-4">
                    SLIPPAGE 12%
                </h6>
                <p className="mb-0 text-13">
                    *RFV (Risk free Value) - Value of all treasury assets in USD
                    terms minus $Digits LP.
                </p>
            </div>
        </section>
    );
}
