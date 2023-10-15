import Banner from "@/components/banner";
import Treasury from "@/components/treasury";
import About from "@/components/about";
import Statistics from "@/components/statistics";
import Features from "@/components/features";
import FAQ from "@/components/faq";
import RecentTweeks from "@/components/recentTweeks";
import { getData, treasury, twitterFeedsIds } from "@/data";
// import {tres}

export default async function Home() {
    const tweets = await getData("twitter");
    // const treasury = await getData("treasury");
   
    return (
        <main className="">
            <Banner />
            {/* <Treasury treasury={treasury} />  */}
            <About />
            <Statistics />
            <Features />
            <FAQ />
            <RecentTweeks tweets={tweets} />
        </main>
    );
}
