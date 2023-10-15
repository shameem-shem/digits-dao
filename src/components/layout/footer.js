// import React from 'react'
import Image from "next/image";
import { logo } from "@/assets";
import { footerNav } from "@/data/navigations";
import SocialNav from "../socialNav";
export default function footer() {
    return (
        <footer className="py-11">
            <div className="container">
                <div className="flex items-center">
                    <ul className="flex gap-12">
                        {footerNav.map((fl, fi) => {
                            return (
                                <li key={fi}>
                                    <a href={fl.link} className="text-15">{fl.label}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="ml-auto flex items-center gap-12">
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
