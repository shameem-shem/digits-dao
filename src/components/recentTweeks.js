"use client"
import { useEffect } from "react";
import { Tweet } from "react-tweet";

export default function RecentTweeks(props) {
    useEffect(()=>{
        console.log(props?.tweets)
    },[])
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
                </div>
            </div>
        </section>
    );
}
