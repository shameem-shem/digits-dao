// import React from 'react'
// import { treasury } from "@/data/treasury";
import Button from "./button";
import { useTreasury } from "@/hooks/useTreasury";
import { ArrowRight, IconUnicorn } from "./icons";

export default function Treasury(props) {
    const {
        treasuryFromPrice,
        treasuryFromDate,
        treasuryToPrice,
        treasuryToDate,
        // treasuryDiffrence,
        treasuryPercentage,
    } = useTreasury(props?.treasury);
    return (
        <section className="md:pt-[84px] md:pb-[72px] py-12 text-center">
            <div className="container">
                <span className="md:text-18 text-16 font-bold bg-white/[.16] py-3 px-7 rounded-full mb-5 inline-block">
                    DAO Treasury
                </span>
                <h2 className="md:text-37 text-3xl mb-4 font-bold">
                    Our Treasury RFV* is growing fast
                </h2>
                <div className="flex items-center lg:justify-center py-5  justify-between">
                    <div className="flex-shrink-0 pr-4 text-left order-2">
                        <h5 className="md:text-22 text-18 font-bold">
                            {treasuryFromPrice}
                        </h5>
                        <p className="md:text-18 text-16">{treasuryFromDate}</p>
                    </div>

                    <div className="w-full bg-light-green rounded-full h-8 relative order-1 lg:order-2 overflow-hidden">
                        <div
                            className="bg-lighter-green h-8 rounded-s-full"
                            style={{ width: treasuryPercentage }}
                        ></div>
                        <span className="text-dark-blue font-bold text-13 absolute left-1/2 top-0 leading-8">
                            {treasuryToPrice}
                        </span>
                    </div>

                    <div className="flex-shrink-0 pl-6 text-left order-2">
                        <h5 className="md:text-22 text-18 font-bold">{treasuryToPrice}</h5>
                        <p className="md:text-18 text-16">{treasuryToDate}</p>
                    </div>
                </div>
                <Button
                    rounded
                    type="green"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center"
                    href="https://app.1inch.io/#/1/simple/swap/DAI/0xBE56ab825fD35678A32dc35bc4EB17e238e1404F"
                >
                    <IconUnicorn className="mr-2 flex-shrink-0 md:text-22 text-18" />
                    Buy Now <ArrowRight className="ml-2 flex-shrink-0" />
                </Button>
                <h6 className="text-16 text-green font-bold py-4">
                    SLIPPAGE 7%
                </h6>
                <p className="mb-0 text-13">
                    *RFV (Risk free Value) - Value of all treasury assets in USD
                    terms minus $Digits LP.
                </p>
            </div>
        </section>
    );
}
