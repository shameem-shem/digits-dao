import React from "react";
import { ArrowRight } from "./icons";
import Button from "./button";

export default function Banner() {
    return (
        <div
            className={`bg-no-repeat pb-36 pt-60 bg-section-gradient relative overflow-hidden before:absolute before:right-[5%] before:bottom-[-12%] before:bg-banner-img before:bg-right-bottom before:bg-no-repeat before:w-full before:h-full`}
        >
            <div className="container">
                <div className="max-w-[445px]">
                    <h2 className="text-51 font-bold mb-5">Digits DAO</h2>
                    <p className="text-13 mb-4">
                        We use our treasury to farm and trade on multiple
                        chains. Treasury profits are used to buy back $DIGITS
                        and distribute profits back to holders.
                    </p>
                    <Button
                        type="light-pink"
                        rounded
                        className="flex items-center"
                    >
                        Dashboard
                        <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
