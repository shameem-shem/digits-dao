import React from "react";
import { ArrowRight } from "./icons";
import Button from "./button";

export default function Banner() {
    return (
        <div
            className={`bg-no-repeat lg:pb-36 lg:pt-60 sm:pt-32 sm:pb-24 pt-36 pb-20 bg-section-gradient relative overflow-hidden before:absolute before:right-[5%] before:bottom-[-12%] before:bg-banner-img before:bg-right-bottom before:bg-no-repeat before:w-full before:h-full before:opacity-25 before:lg:opacity-100 before:bg-cover before:md:bg-auto`}
        >
            <div className="container">
                <div className="max-w-[445px] relative z-10">
                    <h2 className="md:text-51 text-41 font-bold mb-5">Digits DAO</h2>
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
