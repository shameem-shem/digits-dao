// import React from 'react'
import Image from "next/image";
import { logo } from "@/assets";
import { footerNav } from "@/data/navigations";
import SocialNav from "../socialNav";
export default function footer() {
    return (
        <footer className="sm:py-11 py-6">
            <div className="container">
                <div className="flex items-center flex-col md:flex-row gap-6">
                    <ul className="flex sm:gap-12 gap-6">
                        {footerNav.map((fl, fi) => {
                            return (
                                <li key={fi}>
                                    <a href={fl.link} className="text-15">{fl.label}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="ml-auto flex items-center gap-12 mr-auto md:mr-0">
                        <SocialNav />
                        <Image
                            src={logo}
                            width={171}
                            height={56}
                            alt="Digits DAO"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
