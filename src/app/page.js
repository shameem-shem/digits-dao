// import Image from 'next/image'
import Banner from "@/components/banner";
import Treasury from "@/components/treasury";
import About from "@/components/about";
import Statistics from "@/components/statistics";
import Features from "@/components/features";
import FAQ from "@/components/faq";
import RecentTweeks from "@/components/recentTweeks";
import { getData } from "@/data";
// import { useRouter } from "next/navigation";

export default async function Home() {
    // const router = useRouter()
    const tweets = await getData("twitter");
    const treasury = await getData("treasury");
    // console.log( router); 
    return (
        <main className="">
            <Banner />
            <Treasury treasury={treasury} />
            <About />
            <Statistics />
            <Features />
            <FAQ />
            <RecentTweeks tweets={tweets} />
        </main>
    );
}
