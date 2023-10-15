// import React from 'react'
// import { noPreSale, noSeed, noVcs } from "@/assets";
// import Image from "next/image";
import { Tweet } from "react-tweet";
// import { twitterFeedsIds } from "@/data";

export default function RecentTweeks(props) {
    return (
        <section className="pt-7 pb-16 bg-section-gradient bg-no-repeat">
            <div className="container">
                <h2 className="md:text-37 text-3xl font-bold mb-10 text-center">
                    Recent Tweets
                </h2>
                <div className="grid md:grid-cols-3 lg:gap-[30px] gap-4">
                    {props?.tweets?.map((tw, twi) => {
                        return (
                            <div data-theme="light" key={twi}>
                                <Tweet id={tw} />
                            </div>
                        );
                    })}
                    {/* <div data-theme="light">
                        <Tweet id="1706813790468071823" />
                    </div>
                    <div data-theme="light">
                        <Tweet id="1710069164130365895" />
                    </div>
                    <div data-theme="light">
                        <Tweet id="1709690305941754008" />
                    </div> */}
                </div>
            </div>
        </section>
    );
}
