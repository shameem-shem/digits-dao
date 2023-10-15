import Image from "next/image";
import { aboutImg, digitsEffect } from "@/assets";

export default function About() {
    return (
        <section className="pt-[26px] pb-11 bg-section-gradient bg-no-repeat relative overflow-hidden before:absolute before:top-[84px] before:left-[-240px] before:w-[1022px] before:h-[718px] before:bg-line before:bg-left before:bg-no-repeat before:bg-contain">
            <div className="container relative z-10">
                <h3 className="text-37 font-bold text-center mb-[4.5rem]">
                    About Digits DAO
                </h3>
                <div className="grid grid-cols-2 mb-7">
                    <div className="flex justify-end">
                        <Image
                            src={aboutImg}
                            alt=""
                            width={443}
                            height={368}
                        />
                    </div>
                    <div>
                        <h2 className="text-51 font-bold mb-7">
                            What is Digits DAO?
                        </h2>
                        <p className="mb-4">
                            Over 95% of crypto traders lose money within their
                            first 6 months of trading. Digits DAO is the 5%.
                        </p>
                        <p>
                            We trade and farm profitably so you don’t have to.
                            Using advanced cross-chain farming and trading
                            techniques, we have generated over a year of
                            positive PnL with minimal drawdown. Digits DAO aims
                            to bring these type of returns to $DIGITS holders.
                            What would it mean for you to add another digit to
                            your net worth?
                        </p>
                    </div>
                </div>
                <h3 className="text-41 font-bold text-center mb-11">
                    About Digits DAO
                </h3>
                <Image
                    src={digitsEffect}
                    alt=""
                    width={854}
                    height={425}
                    className="block mx-auto"
                ></Image>
            </div>
        </section>
    );
}
