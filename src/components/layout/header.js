// import React from 'react'
import Image from "next/image";
import { logo } from "@/assets";
import { headerNavs } from "@/data/navigations";
import Button from "../button";
// import { iconsMap } from "../icons";
import SocialNav from "../socialNav";

export default function Header() {
    return (
        <header className="py-6 absolute top-0 left-0 w-full z-10">
            <div className="container">
                <div className="flex items-center gap-8">
                    <Image src={logo} alt="Digits DAO" width={171} height={56} className="mr-auto"/>
                    <ul className="gap-4 items-center hidden lg:flex">
                        {headerNavs.map((nav, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={nav.link}
                                        className="py-2 px-5 text-15 font-bold block"
                                    >
                                        {nav.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <SocialNav className="hidden xl:flex" />
                    <Button className="ml-auto" type="green">
                        Connect Wallet
                    </Button>
                </div>
            </div>
        </header>
    );
}
